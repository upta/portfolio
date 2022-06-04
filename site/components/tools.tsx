import { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  title: string;
  list: string[];
};

export const Tools: FC<Props> = ({ className, title, list }) => {
  return (
    <div className={`${className}`}>
      <div className="font-semibold uppercase leading-none text-gray-400">
        {title}
      </div>
      <ul className="mt-2 text-lg font-thin text-white">
        {list.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
};
