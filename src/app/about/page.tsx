
import ContentSection from "@/components/ContentSection"
import Footer from "@/components/Footer"
import NavBarV2 from "@/components/NavBar"
import ProgressBar from "@/components/ProgressBar"
import Type from "@/components/Type"
import { Person, ChevronRight, PatchCheck } from "react-bootstrap-icons"
import Header from "@/components/Header"
import { I_AM } from "@/constants/resume"

export default function About() {

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

            <div className="row">
              <div className="col-5 col-md-2"><ChevronRight className="text-action" /> <strong>Birthday:</strong></div>
              <div className="col-7 col-md-4">16 October 1994</div>
              <div className="col-5 col-md-2"><ChevronRight className="text-action" /> <strong>Website:</strong></div>
              <div className="col-7 col-md-4"><a className="link text-break" href="https://philiphannemann.github.io">philiphannemann.github.io</a></div>

              <div className="col-5 col-md-2"><ChevronRight className="text-action" /> <strong>City:</strong></div>
              <div className="col-7 col-md-4">Würzburg, Germany</div>
              <div className="col-5 col-md-2"><ChevronRight className="text-action" /> <strong>Age:</strong></div>
              <div className="col-7 col-md-4">29</div>

              <div className="col-5 col-md-2"><ChevronRight className="text-action" /> <strong>Email:</strong></div>
              <div className="col-7 col-md-4">philip.hannemann@t-online.de</div>
              <div className="col-5 col-md-2"><ChevronRight className="text-action" /> <strong>Degree:</strong></div>
              <div className="col-7 col-md-4">Master</div>
            </div>
          </ContentSection>

          <ContentSection icon={PatchCheck} title="Skills" variant={2}>

            <h3>Main Programming Languages</h3>
            <div className="row w-100">
              <div className="col-lg-6" data-aos="fade-up">

                <ProgressBar title="JavaScript" percentage={100} />
                <ProgressBar title="TypeScript" percentage={100} />
                <ProgressBar title="php" percentage={90} />
                <ProgressBar title="Python" percentage={100} />

              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                <ProgressBar title="Swift" percentage={100} />
                <ProgressBar title="Java" percentage={95} />
                <ProgressBar title="Kotlin" percentage={95} />
                <ProgressBar title="C++" percentage={95} />

              </div>
            </div>

            <h3 className="mt-5">Frameworks</h3>
            <div className="row w-100">
              <div className="col-lg-6" data-aos="fade-up">

                <ProgressBar title="React" percentage={100} />
                <ProgressBar title="Next.js" percentage={100} />
                <ProgressBar title="Pandas" percentage={90} />
                <ProgressBar title="Flask" percentage={100} />

              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                <ProgressBar title="Spring Boot" percentage={95} />
                <ProgressBar title="Boost" percentage={90} />
                <ProgressBar title="ROS" percentage={80} />
                <ProgressBar title="SwiftUI" percentage={99} />

              </div>
            </div>

            <h3 className="mt-5">Tools</h3>
            <div className="row w-100">
              <div className="col-lg-6" data-aos="fade-up">
                <ProgressBar title="CI / CD (GitLab CI & GitHub Actions)" percentage={100} />
                <ProgressBar title="Git" percentage={100} />
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <ProgressBar title="Docker" percentage={100} />
                <ProgressBar title="Kafka" percentage={100} />
              </div>
            </div>
          </ContentSection>
        </main>

        <Footer />
      </div>
    </>
  )
}
