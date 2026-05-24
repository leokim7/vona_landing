"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Variant = "fade-up" | "fade" | "from-left" | "from-right" | "zoom";

type RevealProps = {
  children: ReactNode;
  variant?: Variant;
  /** ms delay before transition starts */
  delay?: number;
  /** override element tag (default div) */
  as?: "div" | "li" | "article" | "section" | "header" | "p" | "h2";
  className?: string;
  /** how much of the element must be in view (0–1) */
  threshold?: number;
  /** extra margin around root for triggering */
  rootMargin?: string;
};

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  as: Tag = "div",
  className = "",
  threshold = 0.15,
  rootMargin = "0px 0px -64px 0px",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // SSR / no-IO fallback
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // if already in view at mount, reveal immediately
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}ms` }
    : undefined;

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      data-variant={variant}
      data-visible={visible ? "true" : "false"}
      className={`reveal ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}
