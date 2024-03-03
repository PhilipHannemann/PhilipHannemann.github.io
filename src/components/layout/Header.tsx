"use client";

import { usePathname } from "next/navigation";
import SlideShow from "../SlideShow";
import Type from "../Type";

interface HeaderProps {
  /** The title of the website. */
  title: string;
  /** An array of image URLs for the slideshow. */
  slideShow?: ReadonlyArray<string>;
  /** An array of strings to be typed sequentially. */
  typed?: ReadonlyArray<string>;
}

/**
 * Represents the full screen image component at the start of the website.
 * Contains a title and an optional typed subheadline.
 * The image is chosen by the current url but can also be provided through a set
 * of images presented as a slideshow with a fade transition.
 */
export default function Header({ title, slideShow, typed }: HeaderProps) {
  const path = usePathname();
  const imgPath = path === "/" ? "/about" : path;

  const imgSrc = imgPath + ".JPG";

  const subHeadline = typed && (
    <h4>
      I&apos;m <Type text={typed} />
    </h4>
  );

  return (
    <header className="h-100">
      <SlideShow
        slides={slideShow ?? [imgSrc]}
        alt={`Philip Hannemann - ${title}`}
        delay={10}
      />
      <div className="blend-container w-100 h-100 position-absolute bg-dark blend-in" />
      <div className="text-container text-white">
        <h1 className="display-3 text-shadow">{title}</h1>
        {subHeadline}
      </div>
    </header>
  );
}
