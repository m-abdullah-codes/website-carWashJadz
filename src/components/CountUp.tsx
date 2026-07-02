"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

function format(n: number, decimals: number, prefix: string, suffix: string) {
  return `${prefix}${n.toFixed(decimals)}${suffix}`;
}

// Renders the final value in the server HTML (SEO / no-JS safe), then counts
// up from 0 the first time it scrolls into view. Writes textContent directly
// inside a rAF loop — no React re-renders while animating.
export default function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1400,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = format(value * eased, decimals, prefix, suffix);
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, decimals, prefix, suffix, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {format(value, decimals, prefix, suffix)}
    </span>
  );
}
