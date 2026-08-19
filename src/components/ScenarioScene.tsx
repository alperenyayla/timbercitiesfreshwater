import { useEffect, useRef } from "react";
import type { Scenario } from "../types";
import { createScenarioScene } from "../visualisation/scene";

type ScenarioSceneProps = {
  scenario: Scenario;
  progress: number;
};

export function ScenarioScene({ scenario, progress }: ScenarioSceneProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const scene = createScenarioScene(containerRef.current);
    return () => scene.destroy();
  }, []);

  useEffect(() => {
    const event = new CustomEvent("scenario-change", {
      detail: { scenario, progress },
    });
    window.dispatchEvent(event);
  }, [scenario, progress]);

  return (
    <div
      ref={containerRef}
      className="scenario-scene"
      aria-label="Interactive scenario visualisation"
      role="img"
    />
  );
}
