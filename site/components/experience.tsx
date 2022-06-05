import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/outline";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { FC } from "react";
import { SanityKeyed } from "sanity-codegen";
import { Experience as ExperienceSchema } from "../sanity";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  value: Array<SanityKeyed<ExperienceSchema>>;
};

const components: Partial<PortableTextReactComponents> = {
  block: ({ children }) => (
    <p className="mt-2 font-normal normal-case pdf:text-sm pdf:text-gray-500">
      {children}
    </p>
  ),
  list: {
    bullet: ({ children }) => (
      <ul className="mt-2 list-disc pl-6 font-thin normal-case leading-snug pdf:text-sm pdf:text-gray-500">
        {children}
      </ul>
    ),
  },
};

export const Experience: FC<Props> = ({ className, value }) => {
  return (
    <div className={`${className}`}>
      <h2 className="text-2xl font-semibold leading-none pdf:hidden">
        Time Spent at Work & School
      </h2>
      <div className="xs:grid-cols-1 container mx-auto mt-10 grid gap-8 pdf:mx-0 pdf:mt-0 pdf:block pdf:gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-8 pdf:block">
          {value
            .filter((a) => a.type === "Work")
            .map((a, i) => (
              <Item key={i} {...a} />
            ))}
        </div>
        <div className="flex flex-col gap-8 pdf:block">
          {value
            .filter((a: any) => a.type === "Education")
            .map((a: any, i: number) => (
              <Item key={i} {...a} />
            ))}
        </div>
      </div>
    </div>
  );
};

export const Item: FC<ExperienceSchema> = ({ type, where, when, what }) => {
  const { title, body } = what || {};

  return (
    <div className="break-inside-avoid pdf:mt-4">
      <div className="text-normal flex items-start font-semibold leading-none">
        <div className="pdf:mt-1">
          {type === "Work" ? (
            <BriefcaseIcon width={28} className="mr-4 pdf:w-5" />
          ) : (
            <AcademicCapIcon width={28} className="mr-4 pdf:w-5" />
          )}
        </div>
        <div className="text-left">
          {where && <div className="uppercase pdf:text-sm">{where}</div>}
          {when && (
            <div className="text-sm text-gray-400 pdf:font-thin pdf:text-gray-500">
              {when}
            </div>
          )}

          {title && (
            <div className="mt-2 text-sm uppercase pdf:text-xs pdf:text-gray-700">
              {title}
            </div>
          )}
          {body && (
            <div className={`${type === "Education" ? "pdf:hidden" : ""}`}>
              <PortableText value={body} components={components} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
