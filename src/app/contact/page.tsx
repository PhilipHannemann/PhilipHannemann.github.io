
import Footer from "@/components/Footer"
import NavBarV2 from "@/components/NavBar"
import SectionHeadline from "@/components/SectionHeadline"
import { Envelope } from "react-bootstrap-icons"

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
          <section id="contact" className="contact bg-white">
            <div className="container">

              <SectionHeadline icon={Envelope} >Contact</SectionHeadline>
              <div className="section-title">
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>

            </div>
          </section>

        </main>

        <Footer/>
      </div>
    </>
  )
}
