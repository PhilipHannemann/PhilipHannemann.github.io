import { FC, Fragment, ReactNode } from "react";

/** The type of each element in the list. */
export type ListElement = [Icon: FC, headline: string, content: ReactNode];

interface DataListProps {
  /** The list of elements to be displayed. */
  data: ReadonlyArray<ListElement>;
}

/**
 * Renders a list of data with icons, a headline and some content next to it.
 */
export default function DataList({ data }: DataListProps) {
  const listView = data.map(([Icon, headline, content], index) => (
    <Fragment key={index}>
      <div>
        <span className="text-action">
          <Icon />
        </span>
        &nbsp;&nbsp;<strong>{headline}</strong>
      </div>
      <div>{content}</div>
    </Fragment>
  ));

  return <div className="grid-container-2">{listView}</div>;
}
