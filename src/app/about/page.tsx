
import ContentSection from "@/components/ContentSection"
import Footer from "@/components/Footer"
import NavBarV2 from "@/components/NavBar"
import Header from "@/components/Header"
import SkillSet from "@/components/SkillSet"
import { ABOUT_DATA, SKILLS } from "@/constants/about"
import { I_AM } from "@/constants/resume"
import { Person, PatchCheck } from "react-bootstrap-icons"

export default function About() {

  const skills = SKILLS.map(({ name, left, right }) => (
    <>
      <h3 className="mt-5">{name}</h3>
      <SkillSet leftSkills={left} rightSkills={right} />
    </>
  ))


  return (
    <>
      <div className="paralax-container">
        <Header title="Philip Hannemann" typed={I_AM} />

        <main>
          <NavBarV2 />
          <ContentSection icon={Person} title="About Me" mediaSrc="/PhilipHannemann.JPG">
            <h3>Head of Process Automation &amp; Developer</h3>
            <p>As an applied computer science graduate from TU Chemnitz, I am pushing the boundaries of technology and innovation. My journey has taken me from cutting-edge research to leading the process automation team at STTech.</p>
            <p>
              I expanded my horizons with a transformative semester at San José State University, USA, and a course at Stanford University, absorbing diverse perspectives in tech. <br />
              During my master thesis, I architected real-time optimization algorithms in C++ to make trains more energy-efficient. This sparked the interest of a professor from TU Munich, who recruited me to STTech. Over three years as a developer and 1.5 years as the head of the Process Automation department, I&apos;ve improved my skills and lead teams towards impressiv products.
            </p>

            <DataList data={ABOUT_DATA} />
          </ContentSection>

          <ContentSection icon={PatchCheck} title="Skills" variant={2}>
            {skills}
          </ContentSection >
        </main >

        <Footer />
      </div>
    </>
  )
}
