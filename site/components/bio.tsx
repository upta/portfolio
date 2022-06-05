import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { FC, HTMLAttributes } from "react";
import { Section } from "../sanity";

type Props = HTMLAttributes<HTMLDivElement> & {
  value: Section;
};

const components: Partial<PortableTextReactComponents> = {
  block: ({ children }) => <p className="mt-4">{children}</p>,
  list: {
    bullet: ({ children }) => (
      <ul className="mt-2 list-disc pl-12">{children}</ul>
    ),
  },
};

export const Bio: FC<Props> = ({
  className,
  value: { title, body, summary },
}) => {
  return (
    <>
      <div
        className={`${className} bg-gray-800 py-12 px-4 text-left text-xl font-thin text-gray-400 pdf:hidden md:px-12`}
      >
        <p className="text-center text-3xl font-semibold">{title}</p>
        <div className="mt-4">
          {body && <PortableText value={body} components={components} />}
        </div>
      </div>
      <div className="mt-2 hidden font-thin pdf:block">{summary}</div>
    </>
  );
};
