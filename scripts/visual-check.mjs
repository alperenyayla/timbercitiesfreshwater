import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
];
const screenshotDir = path.join(process.cwd(), "test-results");

await mkdir(screenshotDir, { recursive: true });

let browser;

try {
  browser = await chromium.launch({ channel: "msedge", headless: true });
} catch {
  browser = await chromium.launch({ headless: true });
}

const results = [];

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await page.waitForSelector("canvas", { timeout: 10_000 });
  await page.locator("#visualisation").scrollIntoViewIfNeeded();
  await page.screenshot({
    fullPage: false,
    path: path.join(screenshotDir, `visualisation-${viewport.name}-natural.png`),
  });
  await page.locator(".transition-scrubber").fill("100");
  await page.waitForTimeout(500);
  await page.screenshot({
    fullPage: false,
    path: path.join(screenshotDir, `visualisation-${viewport.name}-plantation.png`),
  });

  const result = await page.evaluate(async () => {
    await new Promise((resolve) => requestAnimationFrame(resolve));

    const canvas = document.querySelector("canvas");
    const transitionText = document.querySelector(".transition-state")?.textContent;

    if (!canvas) {
      return { canvasFound: false, transitionText, nonWhiteSamples: 0 };
    }

    const gl =
      canvas.getContext("webgl2", { preserveDrawingBuffer: true }) ||
      canvas.getContext("webgl", { preserveDrawingBuffer: true });
    const samples = [
      [0.2, 0.35],
      [0.5, 0.45],
      [0.8, 0.35],
      [0.3, 0.64],
      [0.5, 0.72],
      [0.7, 0.8],
    ];
    let nonWhiteSamples = 0;

    if (gl) {
      const pixel = new Uint8Array(4);
      for (const [xRatio, yRatio] of samples) {
        const x = Math.floor(canvas.width * xRatio);
        const y = Math.floor(canvas.height * (1 - yRatio));
        gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
        const isWhite = pixel[0] > 245 && pixel[1] > 245 && pixel[2] > 245;
        if (pixel[3] > 0 && !isWhite) {
          nonWhiteSamples += 1;
        }
      }
    }

    return {
      canvasFound: true,
      width: canvas.width,
      height: canvas.height,
      clientWidth: canvas.clientWidth,
      clientHeight: canvas.clientHeight,
      transitionText,
      nonWhiteSamples,
    };
  });

  results.push({ viewport: viewport.name, ...result });
  await page.close();
}

await browser.close();

console.log(JSON.stringify(results, null, 2));

if (results.some((result) => !result.canvasFound || result.nonWhiteSamples === 0)) {
  process.exitCode = 1;
}
