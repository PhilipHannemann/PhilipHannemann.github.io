
import ContentSection from "@/components/ContentSection"
import DataList from "@/components/DataList"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import NavBar from "@/components/NavBar"
import { CONTACT_DATA } from "@/constants/contact"
import { Envelope } from "react-bootstrap-icons"

export default function Home() {

  return (
    <>
      <div className="paralax-container">
        <Header title="Contact" />
        <NavBar />

        <main>
        <ContentSection icon={Envelope} title="Contact" mediaSrc="/PhilipHannemann.JPG">
            <h3>Let&apos;s Connect</h3>
            <p>As an applied computer science graduate from TU Chemnitz / San José State / Stanford University and my long professional time as a software engineer at various different companies, I am the perfect fit for developing your groundbraking solutions.</p>
            <p>
              If I made you curious, let&apos;s connect: 
            </p>

            <DataList data={CONTACT_DATA} />
          </ContentSection>
        </main>

        <Footer/>
      </div>
    </>
  )
}
