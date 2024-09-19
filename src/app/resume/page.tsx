"use client";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import Resume from "@/components/Resume";
import { CARRIER, EDUCATION, HEADER_SLIDES, I_AM } from "@/constants/resume";
import { Clipboard2DataFill } from "react-bootstrap-icons";
import ContentSection from "@/components/layout/ContentSection";

/**
 * Renders the Resume page.
 */
export default function ResumePage() {
  return (
    <div className="paralax-container">
      <Header title="Resume" typed={I_AM} slideShow={HEADER_SLIDES} />
      <NavBar />

      <main>
        <ContentSection title="Resume" Icon={Clipboard2DataFill}>
          <p>
            During my career as a computer scientist, I have been involved in
            many innovative automated systems that redefine convenience,
            efficiency, and sustainability.
          </p>
          <Resume carrier={CARRIER} education={EDUCATION} />
        </ContentSection>
      </main>

      <Footer />
    </div>
  );
}
