
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
            <h4>I'm <Type text={["a Senior Developer", "a Data Scientist", "a Full-Stack Developer", "Head of Process Automation"]} /></h4>
          </div>
        </header>

        <main>
          <NavBarV2 />

          <section id="resume" className="resume bg-white">
            <div className="container">

              <SectionHeadline icon={Clipboard2DataFill} >Resume</SectionHeadline>
              <div className="section-title">
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
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
