"use client"
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from 'next/navigation'
import { Github } from "react-bootstrap-icons";


interface NavLinkProps {
    children: ReactNode,
    href: string,
    className?:string
}

function NavLink({ children, href, className = "" }: NavLinkProps) {

    const path = usePathname()
    const color = path === href ? "text-action" : "text-primary"

    return (
        <li className={`nav-item ${className}`}>
            <Link className={`nav-link ${color}`} href={href}>{children}</Link>
        </li>
    )
}

export default function NavBarV2() {

    return (
        <div className="sticky-top top-0" style={{zIndex:1000}}>
            <nav className="container navbar navbar-expand py-3 text-uppercase">
                <ul className="navbar-nav bg-blue-milk rounded-3 shadow w-100 p-2 position-relative fw-semibold">
                    <NavLink href="/about">About Me</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/resume">Resume</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                    <NavLink href="#" className="end-0 position-absolute px-2"><Github/></NavLink>
                </ul>
            </nav>
        </div>
    );
}