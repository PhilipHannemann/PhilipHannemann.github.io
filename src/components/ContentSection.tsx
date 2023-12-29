import { ReactNode } from "react";
import SectionHeadline from "./SectionHeadline";
import { type Icon } from "react-bootstrap-icons";
import Video from "./Video";


interface ContentSectionProps {
    title: ReactNode,
    icon?: Icon,
    children: ReactNode,
    mediaSrc?: string
    variant?: 1 | 2,
    mediaLarge?: boolean
    flip?: boolean,
    mediaSubtitle?: string
}


export default function ContentSection({ title, icon, children, mediaSrc, variant = 1, mediaLarge, flip, mediaSubtitle }: ContentSectionProps) {

    const isVideo = mediaSrc?.endsWith(".mp4")

    const Img = (props: Parameters<typeof Video>[0]) => <img {...props} alt="" />
    const Media = isVideo ? Video : Img

    const mediaSize = mediaLarge ? "col-lg-7" : "col-lg-4"
    const media = mediaSrc && (
        <div className={`${mediaSize} d-flex align-items-center`} data-aos="fade-right">
            <div>
                <Media src={mediaSrc} className="img-fluid rounded my-3" />
                <p className="text-center w-100"><i>{mediaSubtitle}</i></p>
            </div>
        </div>
    )

    const contentSize = mediaLarge ? "col-lg-4" : "col-lg-7"
    const content = (
        <div className={`${contentSize} pt-4 d-flex align-items-center pt-lg-0 content`} data-aos="fade-left">
            <div>{children}</div>
        </div>
    )

    const grid = mediaSrc ? (
        <div className="row">
            {flip ? content : media}
            <div className="col-lg-1">
            </div>
            {flip ? media : content}
        </div>
    ) : <div className="w-100">{children}</div>

    const background = variant == 1 ? "bg-white" : "bg-light"

    return (
        <section className={`about shadow d-flex flex-column ${background}`}>
            <div className="container px-5 d-flex flex-column flex-grow-1">

                <SectionHeadline icon={icon}>{title}</SectionHeadline>
                <div className="d-flex align-items-center flex-grow-1">
                    {grid}
                </div>
            </div>
        </section>
    )
}