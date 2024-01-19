
import Footer from "@/components/Footer"
import NavBarV2 from "@/components/NavBar"
import Resume from "@/components/Resume"
import SectionHeadline from "@/components/SectionHeadline"
import Type from "@/components/Type"
import { CARRIER, EDUCATION } from "@/constants/resume"
import { Clipboard2DataFill } from "react-bootstrap-icons"

export default function Home() {

  return (
    <>
      <div className="paralax-container">
        <header className="h-100">
          <img src="/Philip.JPG" alt="Philip Hannemann" />
          <div className="blend-container blend-in" />
          <div className="text-container">
            <h1 className="display-3">Resume</h1>
            <h4>I&apos;m <Type text={["a Senior Developer", "a Data Scientist", "a Full-Stack Developer", "Head of Process Automation"]} /></h4>
          </div>
        </header>

        <main>
          <NavBarV2 />

          <section id="resume" className="resume bg-white">
            <div className="container">

              <SectionHeadline icon={Clipboard2DataFill} >Resume</SectionHeadline>
              <div className="section-title">
                <p>During my career as a computer scientist, I have been involved in many innovative automated systems that redefine convenience, efficiency, and sustainability.</p>
              </div>

              <Resume carrier={CARRIER} education={EDUCATION} />
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  )
}
