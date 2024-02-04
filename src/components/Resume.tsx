export interface ResumeEntry {
  headline: string;
  subheadline?: string;
  time: string;
  at: string;
  description?: string;
  workingOn: string[];
}

interface ResumeProps {
  education: readonly ResumeEntry[];
  carrier: readonly ResumeEntry[];
}

export default function Resume({ education, carrier }: ResumeProps) {
  function resumeItemView(
    { headline, time, workingOn, subheadline, at, description }: ResumeEntry,
    index: number,
  ) {
    const workingOnList = (
      <ul className="m-0">
        {workingOn.map((text, i) => (
          <li className="pb-1" key={i}>
            {text}
          </li>
        ))}
      </ul>
    );

    return (
      <div className="resume-item" key={index}>
        <h4 className="fw-bolder text-dark text-uppercase h5">{headline}</h4>
        <div className="pb-2">
          <i>{subheadline}</i>
        </div>
        <h5 className="rounded bg-secondary bg-opacity-25 text-dark">{time}</h5>
        <h5 className="mx-2 rounded bg-secondary bg-opacity-25 text-dark">
          @{at}
        </h5>
        <p>{description}</p>
        {workingOnList}
      </div>
    );
  }

  const educationView = education.map(resumeItemView);
  const carrierView = carrier.map(resumeItemView);

  return (
    <div className="row">
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
