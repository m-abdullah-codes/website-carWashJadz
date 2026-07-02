"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { whenAnimReady } from "@/lib/animReady";

type RevealProps = {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  /** Extra transition delay in ms — use for staggering siblings. */
  delay?: number;
  variant?: "up" | "left" | "right" | "scale" | "fade";
  style?: CSSProperties;
};

// One shared observer for every Reveal on the page. Elements are revealed by
// toggling a class directly on the DOM node (no React state, no re-renders)
// and unobserved immediately after, so scrolling stays free of JS work.
let sharedObserver: IntersectionObserver | null = null;

function getObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            sharedObserver?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
  }
  return sharedObserver;
}

export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  variant = "up",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver;
    let cancelled = false;

    whenAnimReady().then(() => {
      if (cancelled) return;
      observer = getObserver();
      observer.observe(el);
    });

    return () => {
      cancelled = true;
      observer?.unobserve(el);
    };
  }, []);

  const mergedStyle = delay
    ? ({ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties)
    : style;

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${className}`}
      style={mergedStyle}
    >
      {children}
    </Tag>
  );
}
