"use client";

import { usePathname } from "next/navigation";
import SlideShow from "./SlideShow";
import Type from "./Type";

interface HeaderProps {
  title: string;
  slideShow?: ReadonlyArray<string>;
  typed?: ReadonlyArray<string>;
}

export default function Header({ title, slideShow, typed }: HeaderProps) {
  const path = usePathname();

  const imgSrc = path + ".JPG";

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
      <div className="blend-container blend-in" />
      <div className="text-container">
        <h1 className="display-3 text-shadow">{title}</h1>
        {subHeadline}
      </div>
    </header>
  );
}
