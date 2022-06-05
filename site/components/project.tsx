import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { FC } from "react";
import { Project as ProjectSchema, SanityKeyed } from "../sanity";
import { image } from "../sanity/client";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  value: Array<SanityKeyed<ProjectSchema>>;
};

const components: Partial<PortableTextReactComponents> = {
  list: {
    bullet: ({ children }) => (
      <ul className="mb-2 mt-1 list-disc pl-12">{children}</ul>
    ),
  },
};

export const Project: FC<Props> = ({ className, value }) => {
  return (
    <div className={`${className}`}>
      <h2 className="text-2xl font-semibold leading-none pdf:text-base pdf:text-gray-700">
        A Few Side Projects
      </h2>
      <div className="container mx-auto mt-10 pdf:mt-2 pdf:ml-2">
        <div className="flex flex-col gap-8 pdf:gap-2">
          {value.map((a: any, i: number) => (
            <Item key={i} {...a} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Item: FC<ProjectSchema> = ({
  name,
  urls,
  thumbnail,
  description,
  technology,
  lessons,
  summary,
}) => {
  return (
    <div className="grid gap-y-4 gap-x-6 text-left pdf:gap-1 lg:grid-cols-4">
      <div className="text-xl font-semibold pdf:text-sm lg:col-span-3 lg:col-start-2">
        {name}
      </div>

      <div className="pdf:hidden lg:row-span-2 lg:row-start-1 lg:pt-1">
        {thumbnail && (
          <img
            src={image(thumbnail).width(800).url()}
            alt={`${name} Thumbnail`}
            className="max-h-[400px] brightness-90"
          />
        )}
      </div>

      {summary && (
        <div className="hidden text-sm font-thin text-gray-500 pdf:visible">
          {summary}
        </div>
      )}

      <div className="lg:col-span-3 lg:col-start-2">
        {urls && (
          <div>
            {urls.map((a, i) => (
              <a
                key={i}
                href={a}
                className="mb-1 block text-blue-400 pdf:text-cyan-800"
                target="_blank"
                rel="noreferrer"
              >
                {a}
              </a>
            ))}
          </div>
        )}

        <div className="mt-6 pdf:hidden">
          {description && (
            <>
              <Header text="Description" />
              <PortableText value={description} components={components} />
            </>
          )}

          {technology && (
            <>
              <Header text="Technology" />
              <PortableText value={technology} components={components} />
            </>
          )}

          {lessons && (
            <>
              <Header text="Lessons Learned" />
              <PortableText value={lessons} components={components} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Header: FC<{ text: string }> = ({ text }) => (
  <p className="mt-4 mb-2 text-sm font-semibold uppercase leading-none text-gray-400">
    {text}
  </p>
);
