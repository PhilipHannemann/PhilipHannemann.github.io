interface ProgressBarProps {
  /** The percentage value of the progress bar. */
  percentage: number;

  /** The title of the progress bar. */
  title: string;
}

/**
 * Renders a progress bar with the specified percentage and title.
 */
export default function ProgressBar({ percentage, title }: ProgressBarProps) {
  return (
    <div className="py-1">
      <span>{title}</span>
      <div className="progress my-2" style={{ height: "20px" }}>
        <div
          className="progress-bar bg-secondary text-dark"
          role="progressbar"
          style={{ width: percentage + "%" }}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
}
