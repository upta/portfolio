import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { TypedObject } from "@portabletext/types";
import { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  title: string;
  body: TypedObject | TypedObject[];
};

const components: Partial<PortableTextReactComponents> = {
  block: ({ children }) => <p className="mt-4">{children}</p>,
  list: {
    bullet: ({ children }) => (
      <ul className="mt-2 list-disc pl-12">{children}</ul>
    ),
  },
};

export const Bio: FC<Props> = ({ body, className, title }) => {
  return (
    <div
      className={`${className} bg-gray-700 py-12 px-4 text-left text-xl font-thin text-white md:px-12`}
    >
      <p className="text-center text-3xl font-semibold">{title}</p>
      <div className="mt-4">
        <PortableText value={body} components={components} />
      </div>
    </div>
  );
};
