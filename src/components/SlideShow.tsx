"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SEC_TO_MS = 1_000;

interface SlideShowProps {
  /** An array of image URLs */
  slides: ReadonlyArray<string>;

  /** The alternative text for the images. */
  alt: string;

  /** The delay between each slide transition in seconds. */
  delay?: number;
}

/**
 * Represents a slideshow component that displays a series of images with a fade transition.
 */
export default function SlideShow({ slides, alt, delay = 0 }: SlideShowProps) {
  const [presentedSlide, setPresentedSlide] = useState(0);

  const loop = useCallback(() => {
    setPresentedSlide((curr) => (curr >= slides.length - 1 ? 0 : curr + 1));
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) {
      return setPresentedSlide(0);
    }

    let interval: NodeJS.Timeout;
    const timeout = setTimeout(() => {
      interval = setInterval(loop, 5_000);
    }, delay * SEC_TO_MS);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [slides, slides.length, delay, loop]);

  if (!slides.length) return <></>;

  return slides.map((slide, index) => (
    <Image
      key={index}
      src={slide}
      alt={alt}
      className={`slide ${index == presentedSlide ? "show" : ""}`}
      fill
      style={{ objectFit: "cover" }}
    />
  ));
}
