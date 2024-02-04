
import Footer from "@/components/Footer"
import NavBarV2 from "@/components/NavBar"
import Resume from "@/components/Resume"
import SectionHeadline from "@/components/SectionHeadline"
import { CARRIER, EDUCATION, HEADER_SLIDES, I_AM } from "@/constants/resume"
import { Clipboard2DataFill } from "react-bootstrap-icons"

export default function Home() {

  return (
    <>
      <div className="paralax-container">
        <Header title="Resume" typed={I_AM} slideShow={HEADER_SLIDES} />

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
