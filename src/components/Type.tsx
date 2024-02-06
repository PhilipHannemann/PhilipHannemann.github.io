"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypeProps {
  /** The array of strings to be typed sequentially. */
  text: ReadonlyArray<string>;

  /**
   * The speed at which the text is typed (in milliseconds per character).
   * Default: 100
   */
  typeSpeed?: number;

  /**
   * The prefix to be added before each typed string.
   * Default: ""
   */
  prefix?: string;
}

/**
 * A component that types out an array of strings with optional prefix.
 * Uses the Typed.js library for the typing animation.
 */
export default function Type({
  text,
  typeSpeed = 100,
  prefix = "",
}: TypeProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const strings = text.map((t) => `${prefix}<span>${t}</span>`);
    const typed = new Typed(ref.current, {
      strings,
      typeSpeed,
      loop: true,
      backSpeed: 50,
      backDelay: 500,
    });

    return () => typed.destroy();
  }, [prefix, text, typeSpeed]);

  return <span className="type-container text-shadow" ref={ref} />;
}
