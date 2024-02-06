"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Github } from "react-bootstrap-icons";

interface NavLinkProps {
  /** The content of the navigation link. */
  children: ReactNode;

  /** The URL to navigate to. */
  href: string;

  /** Additional css classes for the navigation link.*/
  className?: string;
}

/**
 * Renders a navigation link for the navigation bar.
 * The link is styled with an underline if the current path matches the href.
 */
function NavLink({ children, href, className = "" }: NavLinkProps) {
  const path = usePathname();
  const color = path === href ? "active" : "";

  return (
    <li className={`nav-item ${className}`}>
      <Link className={`nav-link ${color}`} href={href}>
        {children}
      </Link>
    </li>
  );
}

/** Renders the navigation bar. */
export default function NavBar() {
  const id = "navBar";

  return (
    <div className="sticky-top top-0 px-2 zindex-sticky">
      <nav className="container navbar navbar-expand-sm py-3 text-uppercase">
        <div className="container-fluid bg-blue-milk shadow rounded-3">
          <button
            className="navbar-toggler border-0 p-1 py-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-controls={id}
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id={id}>
            <ul className="navbar-nav p-2 position-relative fw-semibold">
              <NavLink href="/about">About Me</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/resume">Resume</NavLink>
              <NavLink href="/contact">Contact</NavLink>

              <NavLink href="#" className="end-0 position-absolute px-2">
                <Github />
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
