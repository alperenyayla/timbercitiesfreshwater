import { useState } from "react";
import { scenarios } from "../content/siteContent";
import { ScenarioScene } from "./ScenarioScene";

export function InteractiveVisualisation() {
  const [progress, setProgress] = useState(0);
  const scenario = scenarios[0];

  return (
    <section className="section visualisation-section" id="visualisation">
      <div className="section-heading">
        <h2>Forest transition and freshwater response</h2>
        <p>
          Move the slider to explore changes in water yield as natural forest
          is progressively converted to plantation forest.
        </p>
      </div>

      <div className="scroll-visualisation">
        <div className="visualisation-layout">
          <div className="scene-shell">
            <ScenarioScene scenario={scenario} progress={progress} />
          </div>
        </div>

        <div className="visualisation-scrubber">
          <div className="scrubber-labels" aria-hidden="true">
            <span>Natural forest</span>
            <span>Plantation forest</span>
          </div>
          <input
            aria-label="Landscape transition"
            className="transition-scrubber"
            max="100"
            min="0"
            type="range"
            value={Math.round(progress * 100)}
            onChange={(event) => setProgress(Number(event.target.value) / 100)}
          />
        </div>
      </div>
    </section>
  );
}
