import { FC, HTMLAttributes } from "react";
import { Tech as TechSchema } from "../sanity";

type Props = HTMLAttributes<HTMLDivElement> & {
  value: TechSchema;
};

export const Tech: FC<Props> = ({
  className,
  value: { languages, frameworks, tools },
}) => {
  return (
    <div className={`${className}`}>
      <h2 className="text-2xl font-semibold leading-none text-gray-300 pdf:hidden pdf:text-lg">
        Current Tools of the Trade
      </h2>
      <div className="xs:grid-cols-1 container mx-auto mt-7 grid gap-8 pdf:mt-2 pdf:inline-grid pdf:grid-cols-3 md:grid-cols-3">
        {languages && <List title="Languages" list={languages} />}
        {frameworks && <List title="Frameworks" list={frameworks} />}
        {tools && <List title="Tools" list={tools} />}
      </div>
    </div>
  );
};

const List: FC<{ title: string; list: string[] }> = ({ title, list }) => (
  <div>
    <div className="font-semibold uppercase leading-none text-gray-400 pdf:text-xs pdf:text-gray-700">
      {title}
    </div>
    <ul className="mt-2 text-lg font-thin text-white pdf:mt-1 pdf:text-sm pdf:text-gray-500">
      {list.map((a, i) => (
        <li key={i}>{a}</li>
      ))}
    </ul>
  </div>
);
