import NextLink from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  /** The URL to navigate to. */
  href: string;

  /** The content of the link. */
  children: ReactNode;
}

/**
 * Renders a link with an orange color on hover.
 */
export default function Link({ href, children }: LinkProps) {
  return (
    <NextLink href={href} className="link text-break">
      {children}
    </NextLink>
  );
}
