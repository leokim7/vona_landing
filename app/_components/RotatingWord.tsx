"use client";

import { useEffect, useState } from "react";

const WORDS = ["친구가", "상담사가", "코치가", "선생님이"] as const;
const LONGEST = WORDS.reduce((a, b) => (a.length >= b.length ? a : b));
const INTERVAL_MS = 2000;

export function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="relative inline-block whitespace-nowrap align-baseline text-coral"
      aria-label={WORDS.join(", ")}
    >
      {/* invisible placeholder — anchors baseline + reserves widest width */}
      <span aria-hidden="true" className="invisible">
        {LONGEST}
      </span>
      {WORDS.map((word, i) => (
        <span
          key={word}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-all duration-500 ease-out motion-reduce:transition-none ${
            i === index
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0"
          }`}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
