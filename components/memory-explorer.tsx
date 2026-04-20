"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/card";
import { memoryPrompts } from "@/lib/site-data";

export function MemoryExplorer() {
  const [active, setActive] = useState(memoryPrompts[0]);

  return (
    <div className="grid gap-6 md:grid-cols-[320px_minmax(0,1fr)]">
      <Card className="space-y-3">
        <p className="eyebrow">Memory Exploration</p>
        <h3 className="text-2xl font-semibold tracking-[-0.03em]">What do you want to know about me?</h3>
        <div className="space-y-2">
          {memoryPrompts.map((prompt) => {
            const isActive = prompt.label === active.label;
            return (
              <button
                key={prompt.label}
                type="button"
                onMouseEnter={() => setActive(prompt)}
                onFocus={() => setActive(prompt)}
                onClick={() => setActive(prompt)}
                className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                  isActive
                    ? "border-[rgba(59,130,246,0.28)] bg-white text-[var(--color-fg)]"
                    : "border-[var(--color-line)] bg-white/50 text-[var(--color-muted)] hover:bg-white/80"
                }`}
              >
                {prompt.label}
              </button>
            );
          })}
        </div>
      </Card>
      <Card className="relative overflow-hidden">
        <motion.div
          key={active.label}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="eyebrow">Selected Node</p>
          <h3 className="text-3xl font-semibold tracking-[-0.04em]">{active.label}</h3>
          <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">{active.response}</p>
        </motion.div>
      </Card>
    </div>
  );
}
