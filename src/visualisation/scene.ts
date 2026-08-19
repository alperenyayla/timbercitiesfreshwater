import * as THREE from "three";
import type { Scenario } from "../types";

type ScenarioChange = {
  scenario: Scenario;
  progress: number;
};

type TreePair = {
  natural: THREE.Group;
  plantation: THREE.Group;
  baseY: number;
  phase: number;
};

export function createScenarioScene(container: HTMLElement) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#ffffff");

  const camera = new THREE.OrthographicCamera(-5, 5, 3, -3, 0.1, 100);
  camera.position.set(0, 0, 10);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const landscape = new THREE.Group();
  scene.add(landscape);

  const precipitation = createPrecipitation();
  const water = createWater();
  const groundwater = createGroundwater();
  const soil = createSoil();
  const trees = createTrees();

  landscape.add(precipitation, groundwater, soil, water);
  trees.forEach((tree) => landscape.add(tree.natural, tree.plantation));

  let state: ScenarioChange = {
    scenario: {
      id: "main",
      name: "Main scenario",
      description: "",
      freshwaterLoss: 0.72,
      waterStress: 0.68,
      plantationExpansion: 0.74,
    },
    progress: 0,
  };

  const parts = { precipitation, water, groundwater, trees };

  const onScenarioChange = (event: Event) => {
    state = (event as CustomEvent<ScenarioChange>).detail;
    updateLandscape(parts, state, 0);
  };

  window.addEventListener("scenario-change", onScenarioChange);

  const resizeObserver = new ResizeObserver(() => {
    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);
    const aspect = width / height;

    const halfWidth = 5.35;
    camera.left = -halfWidth;
    camera.right = halfWidth;
    camera.top = halfWidth / aspect;
    camera.bottom = -halfWidth / aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
  resizeObserver.observe(container);

  let frame = 0;
  let animationId = 0;

  const animate = () => {
    frame += 0.012;
    precipitation.children.forEach((drop, index) => {
      drop.position.y -= 0.018 + (index % 5) * 0.002;
      if (drop.position.y < -0.32) {
        drop.position.y = 3.25 + (index % 7) * 0.06;
      }
    });
    updateLandscape(parts, state, frame);
    renderer.render(scene, camera);
    animationId = requestAnimationFrame(animate);
  };
  animate();

  return {
    destroy() {
      cancelAnimationFrame(animationId);
      window.removeEventListener("scenario-change", onScenarioChange);
      resizeObserver.disconnect();
      renderer.dispose();
      container.replaceChildren();
    },
  };
}

function createPrecipitation() {
  const group = new THREE.Group();
  const material = new THREE.LineBasicMaterial({
    color: "#78aeca",
    transparent: true,
    opacity: 0.42,
  });

  for (let index = 0; index < 54; index += 1) {
    const x = -4.7 + (index % 18) * 0.55;
    const y = 0.2 + Math.floor(index / 18) * 0.85 + (index % 4) * 0.08;
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-0.08, -0.32, 0),
    ]);
    const line = new THREE.Line(geometry, material);
    line.position.set(x, y, 0.4);
    group.add(line);
  }

  return group;
}

function createWater() {
  const group = new THREE.Group();
  const patches = [
    { x: -3.25, y: -0.88, width: 2.7, height: 0.34, salt: 1 },
    { x: -0.72, y: -0.9, width: 3.2, height: 0.4, salt: 4 },
    { x: 2.25, y: -0.87, width: 2.5, height: 0.32, salt: 8 },
    { x: 4.1, y: -0.93, width: 1.3, height: 0.22, salt: 12 },
  ];

  patches.forEach((patch, index) => {
    const water = createOrganicWaterPatch({
      ...patch,
      color: index === 1 ? "#5da9cc" : "#6aaed0",
      opacity: 0.86,
      z: 0.12,
    });
    water.userData.fadeDelay = index * 0.09;
    group.add(water);
  });

  return group;
}

function createGroundwater() {
  const group = new THREE.Group();
  const patches = [
    { x: -2.7, y: -2.2, width: 3.5, height: 0.34, salt: 18 },
    { x: 0.55, y: -2.14, width: 4.1, height: 0.38, salt: 24 },
    { x: 3.72, y: -2.23, width: 1.9, height: 0.26, salt: 31 },
  ];

  patches.forEach((patch, index) => {
    const groundwater = createOrganicWaterPatch({
      ...patch,
      color: "#b9dce8",
      opacity: 0.72,
      z: 0.08,
    });
    groundwater.userData.fadeDelay = index * 0.07;
    group.add(groundwater);
  });

  return group;
}

function createOrganicWaterPatch({
  x,
  y,
  width,
  height,
  salt,
  color,
  opacity,
  z,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  salt: number;
  color: string;
  opacity: number;
  z: number;
}) {
  const group = new THREE.Group();
  const shape = new THREE.Shape();
  const left = -width / 2;
  const right = width / 2;
  const top = height / 2;
  const bottom = -height / 2;
  const wobbleA = (seededValue(salt, 2) - 0.5) * height * 0.32;
  const wobbleB = (seededValue(salt, 5) - 0.5) * height * 0.32;
  const wobbleC = (seededValue(salt, 7) - 0.5) * height * 0.28;
  const wobbleD = (seededValue(salt, 9) - 0.5) * height * 0.28;

  shape.moveTo(left + width * 0.12, bottom + wobbleA);
  shape.bezierCurveTo(
    left + width * 0.28,
    bottom - height * 0.16 + wobbleB,
    right - width * 0.3,
    bottom - height * 0.12 + wobbleC,
    right - width * 0.1,
    bottom + wobbleD,
  );
  shape.bezierCurveTo(
    right + width * 0.06,
    bottom + height * 0.18,
    right + width * 0.04,
    top - height * 0.12,
    right - width * 0.12,
    top + wobbleB,
  );
  shape.bezierCurveTo(
    right - width * 0.34,
    top + height * 0.12 + wobbleA,
    left + width * 0.32,
    top + height * 0.14 + wobbleD,
    left + width * 0.1,
    top + wobbleC,
  );
  shape.bezierCurveTo(
    left - width * 0.05,
    top - height * 0.14,
    left - width * 0.04,
    bottom + height * 0.16,
    left + width * 0.12,
    bottom + wobbleA,
  );

  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
  });
  const mesh = new THREE.Mesh(new THREE.ShapeGeometry(shape, 24), material);
  mesh.position.set(0, 0, z);
  group.add(mesh);

  const highlightMaterial = new THREE.MeshBasicMaterial({
    color: "#f6fbfd",
    transparent: true,
    opacity: 0.52,
  });
  const highlight = new THREE.Mesh(
    new THREE.PlaneGeometry(width * 0.42, Math.max(height * 0.08, 0.018)),
    highlightMaterial,
  );
  highlight.position.set(-width * 0.12, height * 0.15, z + 0.04);
  group.add(highlight);

  group.position.set(x, y, 0);
  group.userData.baseOpacity = opacity;
  group.userData.baseScale = 1;
  group.userData.baseY = y;

  return group;
}

function createSoil() {
  const group = new THREE.Group();
  const soil = new THREE.Mesh(
    new THREE.PlaneGeometry(12.4, 2.55),
    new THREE.MeshBasicMaterial({ color: "#f3efe7" }),
  );
  soil.position.set(0, -2.08, 0);
  group.add(soil);

  const surface = new THREE.Mesh(
    new THREE.PlaneGeometry(12.4, 0.06),
    new THREE.MeshBasicMaterial({ color: "#d7c9b5" }),
  );
  surface.position.set(0, -0.83, 0.18);
  group.add(surface);

  const rootCount = 40;

  for (let index = 0; index < rootCount; index += 1) {
    const depth = 0.48 + seededValue(index, 67) * 0.36;
    const x = -5.35 + (index / (rootCount - 1)) * 10.7 +
      (seededValue(index, 71) - 0.5) * 0.16;
    const y = -1.18 - seededValue(index, 73) * 0.72;
    const root = new THREE.Mesh(
      new THREE.PlaneGeometry(0.018, depth),
      new THREE.MeshBasicMaterial({
        color: "#9d7652",
        transparent: true,
        opacity: 0.32,
      }),
    );
    root.rotation.z = -0.42 + seededValue(index, 79) * 0.84;
    root.position.set(x, y, 0.2);
    group.add(root);
  }

  return group;
}

function createTrees() {
  const trees: TreePair[] = [];

  for (let index = 0; index < 13; index += 1) {
    const x = -4.3 + index * 0.72 + (seededValue(index, 3) - 0.5) * 0.18;
    const naturalHeight = 0.82 + seededValue(index, 11) * 0.82;
    const natural = createNaturalTree(
      x + Math.sin(index) * 0.12,
      naturalHeight,
      index,
    );
    const plantation = createPlantationTree(x, 1.04);
    plantation.visible = false;

    trees.push({
      natural,
      plantation,
      baseY: -0.82,
      phase: (index % 5) / 5,
    });
  }

  return trees;
}

function createNaturalTree(x: number, height: number, variant: number) {
  const tree = new THREE.Group();
  const trunkColors = ["#8c6a4b", "#6d4a32", "#9a5f32", "#744126", "#5f4936"];
  const foliageColors = [
    "#3f765d",
    "#4f8b63",
    "#6c9a5b",
    "#7fa36a",
    "#5d8f52",
    "#7b6d2e",
    "#8a5a24",
    "#9b6b22",
    "#a8742a",
    "#6a4e24",
  ];
  const trunkWidth = 0.075 + seededValue(variant, 17) * 0.07;
  const crownScaleA = 0.74 + seededValue(variant, 23) * 0.42;
  const crownScaleB = 0.72 + seededValue(variant, 29) * 0.46;
  const crownScaleC = 0.72 + seededValue(variant, 31) * 0.38;
  const crownLift = (seededValue(variant, 37) - 0.5) * 0.12;
  const crownSpread = 0.14 + seededValue(variant, 41) * 0.16;

  const trunk = new THREE.Mesh(
    new THREE.PlaneGeometry(trunkWidth, height),
    new THREE.MeshBasicMaterial({
      color: trunkColors[variant % trunkColors.length],
    }),
  );
  trunk.position.set(0, height / 2 - 0.02, 0.28);
  tree.add(trunk);

  const foliageMaterialA = new THREE.MeshBasicMaterial({
    color: foliageColors[Math.floor(seededValue(variant, 43) * foliageColors.length)],
    transparent: true,
    opacity: 0.95,
  });
  const foliageMaterialB = new THREE.MeshBasicMaterial({
    color: foliageColors[Math.floor(seededValue(variant, 47) * foliageColors.length)],
    transparent: true,
    opacity: 0.95,
  });
  const foliageMaterialC = new THREE.MeshBasicMaterial({
    color: foliageColors[Math.floor(seededValue(variant, 53) * foliageColors.length)],
    transparent: true,
    opacity: 0.95,
  });
  const crownA = new THREE.Mesh(
    new THREE.CircleGeometry(0.44 * crownScaleA, 24),
    foliageMaterialA,
  );
  const crownB = new THREE.Mesh(
    new THREE.CircleGeometry(0.38 * crownScaleB, 24),
    foliageMaterialB,
  );
  const crownC = new THREE.Mesh(
    new THREE.CircleGeometry(0.34 * crownScaleC, 24),
    foliageMaterialC,
  );
  crownA.position.set(-crownSpread, height + 0.1 + crownLift, 0.32);
  crownB.position.set(crownSpread * 0.78, height + 0.22 + crownLift, 0.32);
  crownC.position.set(
    (seededValue(variant, 59) - 0.5) * 0.18,
    height - 0.08 + crownLift,
    0.32,
  );
  tree.add(crownA, crownB, crownC);

  tree.position.set(x, -0.82, 0);

  return tree;
}

function createPlantationTree(x: number, height: number) {
  const tree = new THREE.Group();
  const trunk = new THREE.Mesh(
    new THREE.PlaneGeometry(0.09, height),
    new THREE.MeshBasicMaterial({ color: "#8d6b4e" }),
  );
  trunk.position.set(0, height / 2, 0.3);
  tree.add(trunk);

  const foliageMaterial = new THREE.MeshBasicMaterial({
    color: "#3f7655",
    transparent: true,
    opacity: 0.95,
  });
  const crownA = new THREE.Mesh(
    new THREE.CircleGeometry(0.32, 24),
    foliageMaterial,
  );
  const crownB = new THREE.Mesh(
    new THREE.CircleGeometry(0.3, 24),
    foliageMaterial,
  );
  const crownC = new THREE.Mesh(
    new THREE.CircleGeometry(0.26, 24),
    foliageMaterial,
  );
  crownA.position.set(-0.12, height + 0.1, 0.34);
  crownB.position.set(0.12, height + 0.1, 0.34);
  crownC.position.set(0, height + 0.32, 0.34);
  tree.add(crownA, crownB, crownC);
  tree.position.set(x, -0.82, 0);

  return tree;
}

function updateLandscape(
  parts: {
    precipitation: THREE.Group;
    water: THREE.Group;
    groundwater: THREE.Group;
    trees: TreePair[];
  },
  state: ScenarioChange,
  frame: number,
) {
  const progress = smooth(state.progress);
  const loss = state.scenario.freshwaterLoss * progress;
  const stress = state.scenario.waterStress * progress;
  const surfaceRemaining = Math.max(0.22, 1 - loss * 0.68 - progress * 0.1);
  const groundwaterRemaining = Math.max(0.32, 1 - stress * 0.48 - progress * 0.08);

  updateWaterPatches(parts.water, surfaceRemaining, frame, 0.22);
  updateWaterPatches(parts.groundwater, groundwaterRemaining, frame, 0.32);

  parts.precipitation.children.forEach((drop, index) => {
    drop.position.x += Math.sin(frame + index) * 0.0018;
  });
  setGroupOpacity(parts.precipitation, 0.55 - progress * 0.2);

  parts.trees.forEach((tree) => {
    const delayed = Math.max(0, Math.min((progress - tree.phase * 0.18) / 0.82, 1));
    const eased = smooth(delayed);
    tree.natural.visible = eased < 0.98;
    tree.plantation.visible = eased > 0.02;
    tree.natural.scale.setScalar(1 - eased * 0.34);
    tree.plantation.scale.setScalar(0.72 + eased * 0.28);
    tree.natural.position.y = tree.baseY - eased * 0.12;
    tree.plantation.position.y = tree.baseY + (1 - eased) * 0.12;
    setGroupOpacity(tree.natural, 1 - eased);
    setGroupOpacity(tree.plantation, eased);
  });
}

function setGroupOpacity(group: THREE.Object3D, opacity: number) {
  group.traverse((child) => {
    if (child instanceof THREE.Mesh || child instanceof THREE.Line) {
      const material = child.material;
      if (Array.isArray(material)) {
        material.forEach((item) => {
          item.transparent = true;
          item.opacity = opacity;
        });
      } else {
        material.transparent = true;
        material.opacity = opacity;
      }
    }
  });
}

function smooth(value: number) {
  return value * value * (3 - 2 * value);
}

function updateWaterPatches(
  group: THREE.Group,
  remaining: number,
  frame: number,
  minScale: number,
) {
  group.children.forEach((patch, index) => {
    const delay = patch.userData.fadeDelay ?? 0;
    const localRemaining = Math.max(minScale, remaining - delay);
    const pulse = 1 + Math.sin(frame * 0.7 + index) * 0.012;
    const scale = localRemaining * pulse;
    patch.scale.set(scale, scale, 1);
    patch.position.y = (patch.userData.baseY ?? patch.position.y) +
      Math.sin(frame * 0.5 + index * 1.7) * 0.006;
    setGroupOpacity(
      patch,
      Math.max(0.18, (patch.userData.baseOpacity ?? 0.8) * localRemaining),
    );
  });
}

function seededValue(index: number, salt: number) {
  const value = Math.sin(index * 91.7 + salt * 37.3) * 10000;
  return value - Math.floor(value);
}
