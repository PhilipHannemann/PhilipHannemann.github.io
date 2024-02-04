import { ReactNode } from "react";
import { type Icon } from "react-bootstrap-icons";

interface SectionHeadlineProps {
  icon?: Icon;
  children: ReactNode;
}

export default function SectionHeadline({
  icon: TIcon,
  children,
}: SectionHeadlineProps) {
  const iconView = TIcon && (
    <TIcon className="position-absolute" style={{ left: "-40px" }} />
  );

  return (
    <div className="pb-4 text-primary">
      <span className="position-relative h2">{iconView}</span>
      <h2>{children}</h2>
      <hr className="text-action border border-1 border-top border-action opacity-100 w-60px" />
    </div>
  );
}
