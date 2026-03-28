"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
}

export default function TypedText({
  strings,
  typeSpeed = 100,
  backSpeed = 50,
  backDelay = 2000,
  loop = true,
}: TypedTextProps) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!spanRef.current) return;
    const typed = new Typed(spanRef.current, {
      strings,
      typeSpeed,
      backSpeed,
      backDelay,
      loop,
    });
    return () => typed.destroy();
  }, [strings, typeSpeed, backSpeed, backDelay, loop]);

  return <span ref={spanRef} />;
}
