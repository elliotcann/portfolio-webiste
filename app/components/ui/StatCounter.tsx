"use client";

import { useEffect, useRef, useState } from "react";

interface Props { value: number; suffix?: string; label: string; }

export default function StatCounter({ value, suffix = "+", label }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      let startTs = 0;
      const duration = 1400;
      const step = (ts: number) => {
        if (!startTs) startTs = ts;
        const p = Math.min((ts - startTs) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setCount(Math.round(eased * value));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="text-3xl font-bold gradient-text" style={{ fontFamily: "var(--font-heading)" }}>
        {count}{suffix}
      </span>
      <span className="text-xs text-[var(--color-text-light)] uppercase tracking-wider">{label}</span>
    </div>
  );
}
