import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import Resume from "@/components/Resume";
import SectionHeadline from "@/components/layout/SectionHeadline";
import { CARRIER, EDUCATION, HEADER_SLIDES, I_AM } from "@/constants/resume";
import { Clipboard2DataFill } from "react-bootstrap-icons";

/**
 * Renders the Resume page.
 */
export default function ResumePage() {
  return (
    <div className="paralax-container">
      <Header title="Resume" typed={I_AM} slideShow={HEADER_SLIDES} />
      <NavBar />

      <main>
        <section id="resume" className="resume bg-white">
          <div className="container">
            <SectionHeadline icon={Clipboard2DataFill}>Resume</SectionHeadline>
            <div className="section-title">
              <p>
                During my career as a computer scientist, I have been involved
                in many innovative automated systems that redefine convenience,
                efficiency, and sustainability.
              </p>
            </div>

            <Resume carrier={CARRIER} education={EDUCATION} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
