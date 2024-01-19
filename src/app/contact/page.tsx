
import ContentSection from "@/components/ContentSection"
import Footer from "@/components/Footer"
import NavBarV2 from "@/components/NavBar"
import { Envelope, Github, Linkedin, Phone } from "react-bootstrap-icons"

export default function Home() {

  return (
    <>
      <div className="paralax-container">
        <header className="h-100">
            <img src="/Philip.JPG" alt="Philip Hannemann" />
            <div className="blend-container blend-in" />
            <div className="text-container">
              <h1 className="display-3">Contact</h1>
            </div>
        </header>

        <main>
        <NavBarV2 />
        <ContentSection icon={Envelope} title="Contact" mediaSrc="/PhilipHannemann.JPG">
            <h3>Let&apos;s Connect</h3>
            <p>As an applied computer science graduate from TU Chemnitz / San José State / Stanford University and my long professional time as a software engineer at various different companies, I am the perfect fit for developing your groundbraking solutions.</p>
            <p>
              If I made you curious, let&apos;s connect: 
            </p>

            <div className="grid-container-2">
                <div><span className="text-action">@</span>&nbsp;&nbsp;<strong>Email:</strong></div>
                <div>philip.hannemann@t-online.de</div>
              
                <div><Linkedin className="text-action" />&nbsp;&nbsp;<strong>LinkedIn:</strong></div>
                <div><a className="link text-break" href="www.linkedin.com/in/philiphannemann">linkedin.com/in/philiphannemann</a></div>
    
                <div><Github className="text-action" />&nbsp;&nbsp;<strong>Git:</strong></div>
                <div><a className="link text-break" href="https://github.com/PhilipHannemann">github.com/PhilipHannemann</a></div>

                <div><Phone className="text-action" />&nbsp;&nbsp;<strong>Phone:</strong></div>
                <div>+49 176 8505 1499</div>
            </div>
          </ContentSection>
        </main>

        <Footer/>
      </div>
    </>
  )
}
