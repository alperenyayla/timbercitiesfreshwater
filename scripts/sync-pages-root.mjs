import { cp, rm } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const assertInsideProject = (target) => {
  const relative = path.relative(root, target);

  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Refusing to write outside project: ${target}`);
  }
};

const syncDirectory = async (source, destination) => {
  const from = path.join(root, source);
  const to = path.join(root, destination);

  assertInsideProject(from);
  assertInsideProject(to);
  await rm(to, { recursive: true, force: true });
  await cp(from, to, { recursive: true });
};

await syncDirectory("dist/assets", "assets");
await syncDirectory("public/videos", "videos");
