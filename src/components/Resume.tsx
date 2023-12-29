
interface ResumeEntry {
    headline: string,
    time: string,
    workingOn: string[]
}

interface ResumeProps {
    education: ResumeEntry[],
    carrier: ResumeEntry[]
}

export default function Resume({ education, carrier }: ResumeProps) {

    function resumeItemView({ headline, time, workingOn }: ResumeEntry, index: number) {

        let description = <p>{workingOn[0]}</p>

        if (workingOn.length > 1) {
            const listItems = workingOn.map((text, i) => <li key={i}>{text}</li>)
            description = <ul>{listItems}</ul>
        }

        return (
            <div className="resume-item" key={index}>
                <h4>{headline}</h4>
                <h5 className="rounded bg-secondary opacity-50 text-black">{time}</h5>
                {description}
            </div>
        )
    }

    const educationView = education.map(resumeItemView)
    const carrierView = carrier.map(resumeItemView)

    return (
        <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Education</h3>
                {educationView}
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Professional Experience</h3>
                {carrierView}
            </div>
        </div>
    )
}