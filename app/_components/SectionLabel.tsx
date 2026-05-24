type SectionLabelProps = {
  children: string;
  accent?: "dark" | "coral";
  className?: string;
};

export function SectionLabel({
  children,
  accent = "dark",
  className = "",
}: SectionLabelProps) {
  const lineColor = accent === "coral" ? "bg-coral" : "bg-dark-2";
  const textColor = accent === "coral" ? "text-coral" : "text-text-2";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`block h-px w-6 ${lineColor}`} aria-hidden="true" />
      <span
        className={`text-[12px] font-bold uppercase tracking-[3px] ${textColor}`}
      >
        {children}
      </span>
    </div>
  );
}
