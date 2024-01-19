
import { Github } from "react-bootstrap-icons"

interface FooterProps {
    extented?: boolean
}

export default function Footer({ extented }: FooterProps) {

    const headline = extented && <h3>One More Thing</h3>
    const description = extented && (
        <p>
            This webside does not have the need for Next.js and React because there is not much interaction with its content and no server functionality is needed.<br />
            But to show, that I&apos;m good at developing I have made the entire website with Next.js.<br />
            You can find the code of it here: <a className="text-orange" href="#" >Website source code <Github /></a>
        </p>
    )

    const classNameCenter = extented ? "mt-3" : "d-flex justify-content-center mt-3"

    return (
        <footer id="footer" className="p-3 bg-dark text-white">
            <div className="container px-5 py-3">

                <div className={classNameCenter}>
                    <span className="text-start">
                        {headline}
                        <p>Designed by <span className="text-orange">Philip Hannemann</span> and made with <span className="text-orange">Next.js</span></p>
                        {description}
                    </span>
                </div>
            </div>
        </footer>
    )
}