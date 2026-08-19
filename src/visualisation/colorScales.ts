import * as THREE from "three";

export function resultColor(value: number, view: "freshwaterLoss" | "waterStress") {
  const clamped = Math.max(0, Math.min(value, 1));
  const low = new THREE.Color(view === "freshwaterLoss" ? "#4f9bc8" : "#f0c06a");
  const high = new THREE.Color(view === "freshwaterLoss" ? "#d65b4a" : "#a83333");

  return low.lerp(high, clamped);
}
