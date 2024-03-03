import { GITHUB_PAGES_URL } from "@/constants/contact";
import { Github } from "react-bootstrap-icons";

interface FooterProps {
  /** If true, the footer shows additional information about the website. */
  extented?: boolean;
}

/**
 * Footer shows thw text at the end of the website.
 * If extented is true, it shows additional information about the website.
 */
export default function Footer({ extented }: FooterProps) {
  const headline = extented && <h3>One More Thing</h3>;
  const description = extented && (
    <p>
      While this website doesn&apos;t inherently require the use of Next.js and
      React, I&apos;ve chosen to showcase my development skills by building the
      entire site with Next.js. Despite the minimal interaction with content and
      the absence of server functionality, this choice reflects my commitment
      for creating cutting-edge technologies in my projects.
      <br />
      <br />
      Curious about the code behind the scenes? Explore the website&apos;s
      source code{" "}
      <a className="text-action" href={GITHUB_PAGES_URL}>
        here&nbsp;
        <Github />
      </a>{" "}
      to gain insights into the implementation.
    </p>
  );

  const classNameCenter = extented
    ? "mt-3"
    : "d-flex justify-content-center mt-3";

  return (
    <footer id="footer" className="p-3 bg-dark text-white">
      <div className="container px-5 py-3">
        <div className={classNameCenter}>
          <span className="text-start">
            {headline}
            <p>
              Designed by <span className="text-action">Philip Hannemann</span>{" "}
              and made with <span className="text-action">Next.js</span>
            </p>
            {description}
          </span>
        </div>
      </div>
    </footer>
  );
}
