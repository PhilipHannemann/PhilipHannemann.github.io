"use client"
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from 'next/navigation'
import { Github } from "react-bootstrap-icons";


interface NavLinkProps {
    children: ReactNode,
    href: string,
    className?: string
}

function NavLink({ children, href, className = "" }: NavLinkProps) {

    const path = usePathname()
    const color = path === href ? "active" : ""

    return (
        <li className={`nav-item ${className}`}>
            <Link className={`nav-link ${color}`} href={href}>{children}</Link>
        </li>
    )
}

export default function NavBar() {

    const id = "navBar"

    return (
        <div className="sticky-top top-0 px-2 zindex-sticky">
            <nav className="container navbar navbar-expand-sm py-3 text-uppercase">
                <div className="container-fluid bg-blue-milk shadow rounded-3">
                    <button className="navbar-toggler border-0 p-1 py-2" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-controls={id} aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id={id}>
                        <ul className="navbar-nav p-2 position-relative fw-semibold">
                            <NavLink href="/about">About Me</NavLink>
                            <NavLink href="/projects">Projects</NavLink>
                            <NavLink href="/resume">Resume</NavLink>
                            <NavLink href="/contact">Contact</NavLink>

                            <NavLink href="#" className="end-0 position-absolute px-2"><Github /></NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}