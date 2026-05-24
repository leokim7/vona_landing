const WORDS = ["친구가", "상담사가", "코치가", "선생님이"];

export function RotatingWord() {
  return (
    <span
      className="inline-flex h-[1.1em] overflow-hidden align-bottom text-coral"
      aria-label={WORDS.join(", ")}
    >
      <span className="flex flex-col motion-safe:animate-rotate-words">
        {[...WORDS, WORDS[0]].map((word, idx) => (
          <span
            key={`${word}-${idx}`}
            className="block h-[1.1em] leading-[1.1] whitespace-nowrap"
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}
