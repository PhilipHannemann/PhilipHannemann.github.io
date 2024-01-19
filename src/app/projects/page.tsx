
import Footer from "@/components/Footer"
import NavBarV2 from "@/components/NavBar"
import { Git, Linkedin } from "react-bootstrap-icons"
import ContentSection from "@/components/ContentSection"

export default function Home() {

  return (
    <>
      <div className="paralax-container">
        <header className="h-100">
          <img src="/Philip.JPG" alt="Philip Hannemann" />
          <div className="blend-container blend-in" />
          <div className="text-container">
            <h1 className="display-3">Projects</h1>
          </div>
        </header>

        <main>
          <NavBarV2 />
          <ContentSection icon={Git} title="Projects" mediaSrc="/future.jpeg" flip mediaSubtitle="DALL-E 3 generated image based on my career">
            <h3>Head of Process Automation &amp; Developer</h3>
            <p>During my career as a computer scientist, I have been involved in many innovative automated systems that redefine convenience, efficiency, and sustainability.</p>
            <p>
              All began with an internship at the IAV, where I contributed to the creation of a groundbreaking system — the Concierge Service. This pioneering initiative empowered vehicles to autonomously perform multiple tasks at parking spaces. It enabled cars to handle activities such as car maintenance, finding parking spaces, and even executing repairs fully autonomously.
            </p>
            <p>
              During my master thesis, I architected real-time optimization algorithms in C++ to make trains more energy-efficient. I focused on crafting algorithms aimed at energy efficiency by calculating the optimal driving strategies in real-time - an solution that holds immense promise for sustainable transportation solutions.
            </p>
            <p>
              As a software engenier I started a job at STTech what further fueled my passion for automated systems as I had the chance in developing autonomous cleaning robots build for the demands of expansive spaces like supermarkets and warehouses and working on autonomous car driving solutions.
            </p>
            <p>
              After 1.5 years at STTech, serving as the head of process automation, my focus was to revolutionize the claim handling processes for insurance companies, particularly within the domain of dentist invoices. This domain allowed me to leverage automation to enhance efficiency, accuracy, and customer satisfaction.
            </p>
          </ContentSection>
          <ContentSection mediaLarge title="Claim Automation" variant={2} mediaSubtitle="Demo: Left - The client side SwiftUI App. Right - Insurance App for an optimised emplyee experience" mediaSrc="https://res.cloudinary.com/ddecognjv/video/upload/v1701982133/projects/p7aftxks9fwdytvstro5.mp4">
            <h3>Leading the Process Automation Team</h3>
            <p>Experience streamlined insurance claim handling. Our innovative application showcases a split-screen demo. On one side, clients effortlessly scan and submit documents via a native iOS app. On the other, insurance employees access a tool for manual processing, swiftly addressing OCR errors or client queries.</p>
            <p>
              Watch as automated processing seamlessly transforms submissions into completed tasks within the insurance system. Witness the application's adaptability as intentional modifications trigger a smooth transition to manual intervention, ensuring accurate assessments.
            </p>
            <p>This demo highlights our application's powers with routine tasks while seamlessly accommodating manual intervention when needed.</p>

          </ContentSection>
          <ContentSection title="Set" flip mediaSrc="https://res.cloudinary.com/ddecognjv/video/upload/v1701981634/projects/bglpswalqwhbnekekf1f.mp4" mediaSubtitle="Set executed in a Swift-Playground">
            <h3>iOS UIKit App for Playing Set</h3>
            <p>Since I like playing the card game Set I developed this app while I was learning how to write propper iOS apps</p>
            <p>It has many different parts, what prove my coding skills. <br/> The multiple parts include: 
              <ul className="py-2">
                <li>Creating a nice looking app with UIKit and Swift</li>
                <li>Styling the individual cards with custom shapes created with bezier paths</li>
                <li>Writing the game logic with automatic set detection in Swift</li>
              </ul>
            </p>
            <p>
             It has three different play modes: singleplayer, multiplayer and playing against the AI. <br />
             It also knows if the selected cards are equivilant to a Set or not and it also shows with a green background color on the "3 More Cards"-button, if there are no Sets on the table and it is safe to press this button.
            </p>

          </ContentSection>
          <ContentSection mediaLarge title="Throw Optimization" variant={2} mediaSrc="https://res.cloudinary.com/ddecognjv/video/upload/v1701985790/projects/godeg7kmbkw370w6cx24.mp4">
            <h3>Optimizing the throwing strength</h3>
            <p>During my master thesis at <b>Siemens Mobility</b> I was working on very interesting and challenging algorithmic tasks. The master thesis itself is closed source for 5 years but what I can show is the peparation work for it.</p>
            <p>
             The task was to calculate the optimal throwing strength of a ball for a given destination in realtime. <br />
             You can see that the result is very good. It shows the flying ball over time with the optimal strength. <br />
             You can also see that the calculation takes less than 20ms to compute with algorithm 2, why it is possible to change the start position in realtime. <br/>
             When instead using the algorithm 1 what is the brute force approach, it would not be realtime.
            </p>
            <p>
              The actual master thesis was about reducing the energy consumtion of trains by developing a realtime algorithm to optimize the driving strategies based on the timetable and the track constraints.
            </p>
          </ContentSection>
          <ContentSection title="Be[e]Alive" flip mediaSrc="/projects/IBeeAlive.mp4">
            <h3>iOS SwiftUI app for optimizing your insect food</h3>
            <p>
              Due to climate change and the rizing urbanization, insects like bees more and more have trouble finding flowers to provide them food. <br />
              This app trys to help cities or any othere gardener to pick the right collection of flowers in the garden to have flowers the entire year.
            </p>
            <p>
              The App is made with SwiftUI and connects to an self hosted api with a databse of flowers. The database is work in progress and needs to now get filled with flowers, but the app is already close for shipping to the app store. <br />
              It has a plant search, a calendar and an overview page. 
            </p>
          </ContentSection>
          <ContentSection title="LinkedIn Assessment" icon={Linkedin} mediaLarge variant={2} mediaSrc="/projects/demoThrowOptimization.gif">
            <h3>Webapp for training your skills</h3>
            <p>
              LinkedIn used to have skill assessments what a GitHub user crawled into markdown files.
            </p>
            <p>
              I developed an application what can convert the markdown files into JSON data and uses it to ask you skills the same way LinkedIn used to do.
            </p>
            <p>
              It is connected to a mongoDB and stores your results and asks you first only questions that have not been asked before and afterwards the questions which where wrongly answered, before it starts with the same questions that where already answered correctly.
            </p>
          </ContentSection>
        </main>

        <Footer extented />
      </div>
    </>
  )
}
