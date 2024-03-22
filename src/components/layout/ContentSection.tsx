import { ReactNode } from "react";
import SectionHeadline from "./SectionHeadline";
import { Github, type Icon } from "react-bootstrap-icons";
import Video from "../Video";

interface ContentSectionProps {
  /** The title of the section. */
  title: string;
  /** The optional icon to display left the headline. */
  Icon?: Icon;
  /** The content of the section. */
  children: ReactNode;
  /** The source URL for optional media (mp4 or any supported image format). */
  mediaSrc?: string;
  /** The variation of the section (white or light blue background). */
  variant?: 1 | 2;
  /** If the media should take 2/3s of the section. */
  mediaLarge?: boolean;
  /** If the media should be on the right side. */
  flip?: boolean;
  /** The subtitle below the media. */
  mediaSubtitle?: string;
  /** An optional git repository URL. */
  repository?: string;
}

type ImgProps = Parameters<typeof Video>[0];

/**
 * Renders a section with media next to descriptive dext.
 */
export default function ContentSection({
  title,
  Icon,
  children,
  mediaSrc,
  variant = 1,
  mediaLarge,
  flip,
  mediaSubtitle,
  repository,
}: ContentSectionProps) {
  const isVideo = mediaSrc?.endsWith(".mp4");

  const Img = (props: ImgProps) => <img {...props} alt="demo" />;
  const Media = isVideo ? Video : Img;

  const mediaSize = mediaLarge ? "col-lg-7" : "col-lg-4";
  const media = mediaSrc && (
    <div className={`${mediaSize} d-flex align-items-center`}>
      <div className="position-relative">
        <Media src={mediaSrc} className="img-fluid rounded my-3" />
        <p className="text-center w-100">
          <i>{mediaSubtitle}</i>
        </p>
        {repository && (
          <a
            href={repository}
            className="position-absolute top-0 link"
            style={{ right: -16 }}
          >
            <Github className="h2 bg-white rounded-circle" />
          </a>
        )}
      </div>
    </div>
  );

  const contentSize = mediaLarge ? "col-lg-4" : "col-lg-7";
  const content = (
    <div
      className={`${contentSize} pt-4 d-flex align-items-center pt-lg-0 content`}
    >
      <div>{children}</div>
    </div>
  );

  const grid = mediaSrc ? (
    <div className="row">
      {flip ? content : media}
      <div className="col-lg-1"></div>
      {flip ? media : content}
    </div>
  ) : (
    <div className="w-100">{children}</div>
  );

  const background = variant == 1 ? "bg-white" : "bg-light";
  const id = title.toLowerCase().replace(/\s/g, "-");

  return (
    <section
      className={`about shadow d-flex min-vh-100 flex-column ${background}`}
      id={id}
    >
      <div className="container px-5 d-flex flex-column flex-grow-1">
        <SectionHeadline Icon={Icon} linkId={id}>
          {title}
        </SectionHeadline>
        <div className="d-flex align-items-center flex-grow-1">{grid}</div>
      </div>
    </section>
  );
}
