import { FC, Fragment, ReactNode } from "react"

export type ListElement = [Icon: FC, headline: string, content: ReactNode]

interface DataListProps {
    data: ReadonlyArray<ListElement>
}

export default function DataList({ data }: DataListProps) {

    const listView = data.map(([Icon, headline, content], index) => (
        <Fragment key={index}>
            <div><span className="text-action"><Icon/></span>&nbsp;&nbsp;<strong>{headline}</strong></div>
            <div>{content}</div>
        </Fragment>
    ))

    return (
        <div className="grid-container-2">
            {listView}
        </div>
    )
}