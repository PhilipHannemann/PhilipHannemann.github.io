"use client"

import Link from "next/link"
import { House, Person, JournalCode, PatchCheck, Envelope, Linkedin, XLg } from "react-bootstrap-icons"

export default function Header() {

    function closeSidebar() {

    }

    return (
        <header id="header">
            <div className="d-flex flex-column">
                <div className="profile">
                    <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><Link href="/">Philip Hannemann</Link></h1>
                    <h6 className="text-light mt-1">Computer Scientist</h6>
                    <div className="social-links mt-3 text-center">
                        <a href="https://www.linkedin.com/in/philiphannemann/" className="linkedin"><Linkedin /></a>
                    </div>
                </div>

                <div className="position-absolute top-0 end-0 text-light p-2"><XLg role="button" onClick={() => closeSidebar()} /></div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><a href="#hero" className="nav-link scrollto active"><House /> <span>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><Person /> <span>About Me</span></a></li>
                        <li><a href="#projects" className="nav-link scrollto"><JournalCode /> <span>Projects</span></a></li>
                        <li><a href="#resume" className="nav-link scrollto"><PatchCheck /> <span>Skills</span></a></li>
                        <li><a href="#contact" className="nav-link scrollto"><Envelope /> <span>Contact</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}