"use client";

import { usePathname } from "next/navigation";
import { CSSProperties, ReactNode, useState } from "react";
import { type Icon as BIcon } from "react-bootstrap-icons";
import Link from "../Link";

interface SectionHeadlineProps {
  /** The optional icon to display left the headline. */
  Icon?: BIcon;
  /** id for generation a reference link. */
  linkId?: string;
  /** The headline content. */
  children: ReactNode;
}

const ICON_STYLE: CSSProperties = { left: "-40px" };
const ICON_CLASSNAME = "position-absolute transiotion-opacity-05";

const visibale = (show: boolean) => (show ? "opacity-1" : "opacity-0");

/**
 * Renders a headline with an optional icon.
 */
export default function SectionHeadline({
  Icon,
  children,
  linkId,
}: SectionHeadlineProps) {
  const [linkVisible, setShowLink] = useState(false);
  const path = usePathname();

  const iconVisible = !linkId || !linkVisible;
  const iconView = Icon && (
    <Icon
      className={`${ICON_CLASSNAME} ${visibale(iconVisible)}`}
      style={ICON_STYLE}
    />
  );

  const linkIcon = linkId && (
    <Link
      href={`${path}#${linkId}`}
      className={`${ICON_CLASSNAME} ${visibale(linkVisible)} pe-4`}
      style={ICON_STYLE}
    >
      #
    </Link>
  );

  const hideLink = () => setShowLink(false);
  const showLink = () => setShowLink(true);

  return (
    <span className="py-4 text-primary">
      <span onMouseEnter={showLink} onMouseLeave={hideLink}>
        <span className="position-relative h2">
          {iconView}
          {linkIcon}
        </span>
        <h2 className="d-inline">{children}</h2>
      </span>
      <hr className="text-action border border-1 border-top border-action opacity-100 w-60px" />
    </span>
  );
}
