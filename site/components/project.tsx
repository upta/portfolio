import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { TypedObject } from "@portabletext/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { FC, HTMLAttributes } from "react";
import { image } from "../sanity";

type Props = HTMLAttributes<HTMLDivElement> & {
  name: string;
  urls: string[];
  thumbnail: SanityImageSource;
  description: TypedObject | TypedObject[];
  technology: TypedObject | TypedObject[];
  lessons: TypedObject | TypedObject[];
};

const components: Partial<PortableTextReactComponents> = {
  list: {
    bullet: ({ children }) => (
      <ul className="mb-2 mt-1 list-disc pl-12">{children}</ul>
    ),
  },
};

export const Project: FC<Props> = ({
  className,
  name,
  urls,
  thumbnail,
  description,
  technology,
  lessons,
}) => {
  return (
    <div
      className={`${className} grid gap-y-4 gap-x-6 text-left lg:grid-cols-4`}
    >
      <div className="text-xl font-semibold lg:col-span-3 lg:col-start-2">
        {name}
      </div>

      <div className="lg:row-span-2 lg:row-start-1 lg:pt-1">
        <img
          src={image(thumbnail).width(800).url()}
          alt={`${name} Thumbnail`}
          className="max-h-[400px] brightness-90"
        />
      </div>

      <div className="lg:col-span-3 lg:col-start-2">
        <div>
          {urls.map((a, i) => (
            <a
              key={i}
              href={a}
              className="mb-1 block text-blue-400"
              target="_blank"
              rel="noreferrer"
            >
              {a}
            </a>
          ))}
        </div>

        <Header text="Description" />
        <PortableText value={description} components={components} />

        <Header text="Technology" />
        <PortableText value={technology} components={components} />

        <Header text="Lessons Learned" />
        <PortableText value={lessons} components={components} />
      </div>
    </div>
  );
};

const Header: FC<{ text: string }> = ({ text }) => (
  <p className="mt-4 mb-2 text-sm font-semibold uppercase leading-none text-gray-400">
    {text}
  </p>
);
