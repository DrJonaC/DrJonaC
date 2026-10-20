"use client";
import { useState } from "react";
import { memoryPrompts } from "@/lib/site-data";
export function MemoryExplorer() {
  const [active, setActive] = useState(0);
  return (
    <div className="explorer">
      <div className="explorer-controls">
        <p className="eyebrow">Choose a thread</p>
        {memoryPrompts.map((prompt, index) => (
          <button
            key={prompt.label}
            type="button"
            aria-pressed={active === index}
            aria-controls="memory-response"
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            {prompt.label}
            <span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <div
        className="explorer-response"
        id="memory-response"
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="eyebrow">Personal index / 0{active + 1}</p>
        <h3>{memoryPrompts[active].label}</h3>
        <p>{memoryPrompts[active].response}</p>
        <span className="explorer-footnote">A curated view into my work.</span>
      </div>
    </div>
  );
}
