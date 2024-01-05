
import ContentSection from "@/components/ContentSection"
import Footer from "@/components/Footer"
import NavBarV2 from "@/components/NavBar"
import ProgressBar from "@/components/ProgressBar"
import Type from "@/components/Type"
import { Person, ChevronRight, PatchCheck } from "react-bootstrap-icons"

export default function About() {

  return (
    <>
      <div className="paralax-container">
        <header className="h-100">
          <img src="/Philip.JPG" alt="Philip Hannemann" />
          <div className="blend-container blend-in" />
          <div className="text-container">
            <h1 className="display-3">Philip Hannemann</h1>
            <h4><Type prefix="I'm " text={["a Senior Developer", "a Data Scientist", "a Full-Stack Developer", "Head of Process Automation"]} /></h4>
          </div>
        </header>

        <main>
          <NavBarV2 />
          <ContentSection icon={Person} title="About Me" mediaSrc="/PhilipHannemann.JPG">
            <h3>Head of Process Automation &amp; Developer.</h3>
            <p>As an Applied Computer Science graduate from TU Chemnitz, I'm pushing the boundaries of technology and innovation. My journey has taken me from cutting-edge research to leading the process automation team at STTech.</p>
            <p>
              I expanded my horizons with a transformative semester at San José State University, USA, and a course at Stanford University, absorbing diverse perspectives in tech.
            </p>
            <p>
              During my master thesis, I architected real-time optimization algorithms in C++ to make trains more energy-efficient. This sparked the interest of a professor from TU Munich, who recruited me to STTech. Over three years as a developer and 1.5 years as the head of the Process Automation department, I've improved my skills and led teams towards impressiv products.
            </p>
            <table>
              <thead>
                <tr>
                  <th scope="col" className="col-1"></th>
                  <th scope="col" className="col-3"></th>
                  <th scope="col" className="col-1"></th>
                  <th scope="col" className="col-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th><ChevronRight className="text-orange" /> <strong>Birthday:</strong></th>
                  <td>16 October 1994</td>
                  <th><ChevronRight className="text-orange" /> <strong>Website:</strong></th>
                  <td><a href="https://philiphannemann.github.io">philiphannemann.github.io</a></td>
                </tr>
                <tr>
                  <th><ChevronRight className="text-orange" /> <strong>City:</strong></th>
                  <td>Würzburg, Germany</td>
                  <th><ChevronRight className="text-orange" /> <strong>Age:</strong></th>
                  <td>29</td>
                </tr>
                <tr>
                  <th><ChevronRight className="text-orange" /> <strong>Email:</strong></th>
                  <td>philip.hannemann@t-online.de</td>
                  <th><ChevronRight className="text-orange" /> <strong>Degree:</strong></th>
                  <td>Master</td>
                </tr>
              </tbody>
            </table>
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
