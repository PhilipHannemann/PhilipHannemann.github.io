
interface ProgressBarProps {
    percentage: number,
    title: string
}

export default function ProgressBar({ percentage, title}: ProgressBarProps) {
    return (
        <div className="py-1">
            <span>{title}</span>
            <div className="progress my-2" style={{height: "20px"}}>
                <div className="progress-bar bg-light-orange text-dark-blue" role="progressbar" style={{ width: percentage + "%" }} aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>{percentage}%</div>
            </div>
        </div>
    )
}