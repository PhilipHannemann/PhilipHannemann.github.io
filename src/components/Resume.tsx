import { ReactNode } from "react";
import Link from "./Link";

/**
 * Represents a single entry in the resume.
 */
export interface ResumeEntry {
  /** The job title. */
  headline: string;
  /** An optional subheadline like the thesis. */
  subheadline?: string;
  /** The time period of the job. */
  time: string;
  /** The company or institution. */
  at: string;
  /** The description of the job. */
  description?: string;
  /** The projects or tasks worked on. */
  workingOn: string[];
  /** additional reference link */
  link?: { title: string; href: string };
}

/**
 * Represents the props for the Resume component.
 */
interface ResumeProps {
  /** The education history. */
  education: ReadonlyArray<ResumeEntry>;
  /** The carrier history. */
  carrier: ReadonlyArray<ResumeEntry>;
}

/**
 * Renders a Resume for education and carrier side by side.
 */
export default function Resume({ education, carrier }: ResumeProps) {
  /**
   * Converts a resume entry to a ResumeItem component.
   */
  function resumeEntryToItem(item: ResumeEntry, index: number) {
    return <ResumeItem {...item} key={index} />;
  }

  const educationView = education.map(resumeEntryToItem);
  const carrierView = carrier.map(resumeEntryToItem);

  return (
    <div className="row resume">
      <div className="col-lg-6">
        <h3 className="text-dark py-4">Education</h3>
        {educationView}
      </div>
      <div className="col-lg-6">
        <h3 className="text-dark py-4">Professional Experience</h3>
        {carrierView}
      </div>
    </div>
  );
}

/**
 * The ResumeItem component displays a single resume entry.
 */
function ResumeItem({
  headline,
  time,
  workingOn,
  subheadline,
  at,
  description,
  link,
}: ResumeEntry) {
  const workingOnList = (
    <ul className="m-0">
      {workingOn.map((text, i) => (
        <li className="pb-1" key={i}>
          {text}
        </li>
      ))}
    </ul>
  );

  function HighLight({ children }: { children: ReactNode }) {
    return (
      <h5 className="me-2 rounded bg-secondary bg-opacity-25 text-dark">
        {children}
      </h5>
    );
  }

  return (
    <div className="resume-item">
      <h4 className="fw-bolder text-dark text-uppercase h5">{headline}</h4>
      <div className="pb-2">
        <i>{subheadline}</i>
      </div>
      <HighLight>{time}</HighLight>
      <HighLight>@{at}</HighLight>
      {link && (
        <HighLight>
          <Link href={link.href}>{link.title}</Link>
        </HighLight>
      )}
      <p>{description}</p>
      {workingOnList}
    </div>
  );
}
