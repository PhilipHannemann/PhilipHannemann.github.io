"use client";
import ContentSection from "@/components/layout/ContentSection";
import DataList from "@/components/DataList";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import { CONTACT_DATA } from "@/constants/contact";
import { Envelope } from "react-bootstrap-icons";

/**
 * Renders the Contact page.
 */
export default function Contact() {
  return (
    <div className="paralax-container">
      <Header title="Contact" />
      <NavBar />

      <main>
        <ContentSection
          Icon={Envelope}
          title="Contact"
          mediaSrc="/philip_klein.JPG"
        >
          <h3>Let&apos;s Connect</h3>
          <p>
            As an applied computer science graduate from TU Chemnitz / San José
            State / Stanford University and my long professional time as a
            software engineer at various different companies, I am the perfect
            fit for developing your groundbraking solutions.
          </p>
          <p>If I made you curious, let&apos;s connect:</p>

          <DataList data={CONTACT_DATA} />
        </ContentSection>
      </main>

      <Footer />
    </div>
  );
}
