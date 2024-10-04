"use client";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import { Git, Linkedin } from "react-bootstrap-icons";
import ContentSection from "@/components/layout/ContentSection";
import Header from "@/components/layout/Header";
import Link from "@/components/Link";

/**
 * Renders the Projects page.
 */
export default function Projects() {
  return (
    <div className="paralax-container">
      <Header title="Projects" />
      <NavBar />

      <main>
        <ContentSection
          Icon={Git}
          title="Projects"
          mediaSrc="/future.jpeg"
          flip
          mediaSubtitle="DALL-E 3 generated image based on my career"
        >
          <h3>Head of Process Automation &amp; App Developer</h3>
          <p>
            During my career as a computer scientist, I have been involved in
            many innovative automated systems that redefine convenience,
            efficiency, and sustainability.
          </p>
          <p>
            During my master thesis, I architected real-time optimization
            algorithms in C++ to make trains more energy-efficient. I focused on
            crafting algorithms aimed at energy efficiency by calculating the
            optimal driving strategies in real-time - an solution that holds
            immense promise for sustainable transportation solutions.
          </p>
          <p>
            As a software engenier I started a job at STTech for developing
            autonomous cleaning robots build for the demands of expansive spaces
            like supermarkets and warehouses and working on autonomous car
            driving solutions.
          </p>
          <p>
            After 1.5 years at STTech, serving as the head of process
            automation, my focus was to revolutionize the claim handling
            processes for insurance companies, particularly within the domain of
            dentist invoices. This domain allowed me to leverage automation to
            enhance efficiency, accuracy, and customer satisfaction.
          </p>
          <p>
            During my career, I have always had a passion for app development,
            creating innovative and user-friendly tools. This includes a claim
            handling app, an AI-powered video editing app, and a whiteboard app
            that automates various workflows. At STTech, my strengths in app
            development and algorithm design come together seamlessly, allowing
            me to contribute to cutting-edge solutions.
          </p>
        </ContentSection>
        <ContentSection
          mediaLarge
          title="Claim Automation"
          variant={2}
          mediaSubtitle="Demo: Left - The client side SwiftUI App. Right - Insurance App for an optimised emplyee experience"
          mediaSrc="https://res.cloudinary.com/ddecognjv/video/upload/v1701982133/projects/p7aftxks9fwdytvstro5.mp4"
        >
          <h3>Leading the Process Automation Team</h3>
          <p>
            Experience streamlined insurance claim handling. Our innovative
            application showcases a split-screen demo. On one side, clients
            effortlessly scan and submit documents via a native iOS app. On the
            other, insurance employees access a tool for manual processing,
            swiftly addressing OCR errors or client queries.
          </p>
          <p>
            Watch as automated processing seamlessly transforms submissions into
            completed tasks within the insurance system. Witness the
            application&apos;s adaptability as intentional modifications trigger
            a smooth transition to manual intervention, ensuring accurate
            assessments.
          </p>
          <p>
            This demo highlights our application&apos;s powers with routine
            tasks while seamlessly accommodating manual intervention when
            needed.
          </p>
        </ContentSection>
        <ContentSection
          title="Set"
          flip
          mediaSrc="https://res.cloudinary.com/ddecognjv/video/upload/v1701981634/projects/bglpswalqwhbnekekf1f.mp4"
          mediaSubtitle="Set executed in a Swift-Playground"
        >
          <h3>iOS UIKit App for Playing Set</h3>
          <p>
            Driven by my passion for the card game Set, I developed an iOS app
            to further enhance my skills in iOS app development.
          </p>
          <p>
            This comprehensive app showcases my coding proficiency through
            various details, including:
          </p>
          <ul className="py-2">
            <li>Creating an aesthetically interface using UIKit and Swift</li>
            <li>
              Implementing unique card designs with custom shapes created using
              bezier paths
            </li>
            <li>
              Developing robust game logic with automatic set detection in Swift
            </li>
          </ul>
          <p>
            The app offers three distinct play modes: single-player,
            multiplayer, and the option to challenge an AI opponent. Notably, it
            intelligently determines whether the selected cards form a Set and
            features a user-friendly indicator – a green background on the
            &quot;3 More Cards&quot; button – signaling a safe time to proceed
            when no Sets are present on the table.
          </p>
          <p>
            This project reflects not only my dedication to mastering iOS app
            development but also my commitment to delivering a polished and
            enjoyable user experience.
          </p>
        </ContentSection>
        <ContentSection
          mediaLarge
          title="Throw Optimization"
          mediaSubtitle="With OpenGL rendered graph for showing the ball trajectory in 2D space."
          variant={2}
          mediaSrc="https://res.cloudinary.com/ddecognjv/video/upload/v1701985790/projects/godeg7kmbkw370w6cx24.mp4"
          repository="https://github.com/PhilipHannemann/throwOptimization"
        >
          <h3>Optimizing the throwing strength</h3>
          <p>
            During my master thesis at <b>Siemens Mobility</b>, I came across a
            series of algorithmic challenges, particularly focusing here on the
            preparation work for my closed-source master thesis, which is
            protected for five years.
          </p>
          <p>
            The core preparation task involved calculating the optimal throwing
            strength of a ball for a given destination in real-time. The visible
            outcome is a remarkable simulation demonstrating the trajectory of a
            ball over time, precisely executed with the optimal strength.
            Noteworthy is the efficiency of the computation – accomplished in
            less than 20ms enabling real-time adjustments to the start position.
            In contrast the brute force approach, renders real-time performance
            unattainable with multiple seconds.
          </p>
          <p>
            While the specific details of the master thesis remain confidential,
            its overarching goal was groundbreaking – aimed at reducing energy
            consumption in trains. The focus was on the development of a
            real-time algorithm to optimize driving strategies based on the
            timetable and track constraints, thereby contributing to the broader
            initiative of sustainable and efficient transportation systems.
          </p>
          <p>
            The work resulted in the following patent{" "}
            <Link href="https://patentimages.storage.googleapis.com/08/f9/80/ecf6caec3643da/DE102020212167A1.pdf">
              <b>Method for determining an energy-saving driving style</b>
            </Link>
            .
          </p>
        </ContentSection>
        <ContentSection
          title="Be[e] Alive"
          flip
          mediaSrc="https://res.cloudinary.com/ddecognjv/video/upload/v1705700789/projects/v4zitmfwmnw6f8wxkj1x.mp4"
          mediaSubtitle="SwiftUI App recorded on an iPhone."
        >
          <h3>iOS SwiftUI app for optimizing insect food</h3>
          <p>
            In the face of climate change and escalating urbanization,
            pollinators such as bees encounter challenges in locating abundant
            floral resources. So I invented an App — an innovative solution
            designed to assist cities and avid gardeners in selecting the
            optimal assortment of flowers throughout the year.
          </p>

          <h6>Key Features:</h6>
          <ul className="py-2">
            <li>
              <b>Intelligent Plant Selection</b>: The app uses SwiftUI for an
              intuitive interface that simplifies the process of choosing the
              right mix of flowers, fostering a continuous bloom.
            </li>
            <li>
              <b>Connected to a Netcup-Hosted API</b>: Leveraging a self-created
              API, the app seamlessly integrates with a growing flower database.
              Although the database is a work in progress, the app is on the
              edge of being released to the App Store.
            </li>
            <li>
              <b>Functionalities</b>: The app boasts a robust set of features,
              including a plant search, a calendar for optimal planting times,
              and an overview page for quick reference.
            </li>
          </ul>

          <p>
            While the database is currently in development, the vision is to
            populate it comprehensively with a diverse array of flowers,
            ensuring a rich and ever-expanding resource for users.
          </p>
        </ContentSection>
        <ContentSection
          title="LinkedIn Assessment"
          Icon={Linkedin}
          mediaLarge
          variant={2}
          mediaSrc="https://res.cloudinary.com/ddecognjv/video/upload/v1705705811/projects/trjkmhb9orwfppierm6g.mp4"
        >
          <h3>Skill Training Web App: Reinventing Skill Assessments</h3>
          <p>
            I developed an innovative web application to enhance skill training,
            inspired by LinkedIn&apos;s former skill assessments. The app
            converts GitHub-crawled markdown files into JSON data, creating a
            dynamic question pool.
          </p>

          <h6>Key Features:</h6>
          <ul className="py-2">
            <li>
              <b>MongoDB Integration</b>: Seamlessly connected to MongoDB,
              storing user progress and results for a personalized learning
              experience.
            </li>
            <li>
              <b>Adaptive Questioning</b>: Utilizes a smart algorithm to present
              new questions, revisit incorrect answers, and strengthen
              understanding by revisiting correctly answered questions.
            </li>
            <li>
              <b>LinkedIn-inspired Interface</b>: Recreates the engaging skill
              assessment experience, for continuous skill development.
            </li>
          </ul>
        </ContentSection>
      </main>

      <Footer extented />
    </div>
  );
}
