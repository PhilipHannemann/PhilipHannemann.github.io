import NextLink from "next/link";

type LinkProps = Parameters<typeof NextLink>[0];

/**
 * Renders a link with an orange color on hover.
 */
export default function Link({ className = "", ...props }: LinkProps) {
  return <NextLink className={`link text-break ${className}`} {...props} />;
}
