"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypeProps {
  text: ReadonlyArray<string>;
  typeSpeed?: number;
  prefix?: string;
}

export default function Type({
  text,
  typeSpeed = 100,
  prefix = "",
}: TypeProps) {
  // Create reference to store the DOM element containing the animation
  const ref = useRef(null);

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
