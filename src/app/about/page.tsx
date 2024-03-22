"use client";
import ContentSection from "@/components/layout/ContentSection";
import DataList from "@/components/DataList";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import SkillSet from "@/components/SkillSet";
import { ABOUT_DATA, SKILLS } from "@/constants/about";
import { I_AM } from "@/constants/resume";
import { Fragment } from "react";
import { Person, PatchCheck } from "react-bootstrap-icons";

/**
 * Renders the About page.
 */
export default function About() {
  const skills = SKILLS.map(({ name, left, right }) => (
    <Fragment key={name}>
      <h3 className="mt-5">{name}</h3>
      <SkillSet leftSkills={left} rightSkills={right} />
    </Fragment>
  ));

  return (
    <div className="paralax-container">
      <Header title="Philip Hannemann" typed={I_AM} />
      <NavBar />

      <main>
        <ContentSection
          Icon={Person}
          title="About Me"
          mediaSrc="/philip_klein.JPG"
        >
          <h3>Head of Process Automation &amp; Developer</h3>
          <p>
            As an applied computer science graduate from TU Chemnitz, I am
            pushing the boundaries of technology and innovation. My journey has
            taken me from cutting-edge research to leading the process
            automation team at STTech.
          </p>
          <p>
            I expanded my horizons with a transformative semester at San José
            State University, USA, and a course at Stanford University,
            absorbing diverse perspectives in tech. <br />
            During my master thesis, I architected real-time optimization
            algorithms in C++ to make trains more energy-efficient. This sparked
            the interest of a professor from TU Munich, who recruited me to
            STTech. Over three years as a developer and 1.5 years as the head of
            the Process Automation department, I&apos;ve improved my skills and
            lead teams towards impressiv products.
          </p>

          <DataList data={ABOUT_DATA} />
        </ContentSection>

        <ContentSection Icon={PatchCheck} title="Skills" variant={2}>
          {skills}
        </ContentSection>
      </main>

      <Footer />
    </div>
  );
}
