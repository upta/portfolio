import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/outline";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { TypedObject } from "@portabletext/types";
import { FC } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  type: "Work" | "Education";
  where: string;
  when: string;
  what: {
    title: string;
    body: TypedObject | TypedObject[];
  };
};

const components: Partial<PortableTextReactComponents> = {
  block: ({ children }) => (
    <p className="mt-2 font-normal normal-case">{children}</p>
  ),
  list: {
    bullet: ({ children }) => (
      <ul className="mt-2 list-disc pl-6 font-thin normal-case leading-tight">
        {children}
      </ul>
    ),
  },
};

export const Experience: FC<Props> = ({
  className,
  type,
  where,
  when,
  what: { title, body },
}) => {
  return (
    <div
      className={`${className} text-normal flex items-start font-semibold uppercase leading-none text-gray-600`}
    >
      <div>
        {type === "Work" ? (
          <BriefcaseIcon width={28} className="mr-4" />
        ) : (
          <AcademicCapIcon width={28} className="mr-4" />
        )}
      </div>
      <div className="text-left">
        <div>{where}</div>
        <div className="text-sm font-thin">{when}</div>

        <div className="mt-2 text-sm">{title}</div>
        <PortableText value={body} components={components} />
      </div>
    </div>
  );
};
