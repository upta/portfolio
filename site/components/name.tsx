import { FC } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  fullName: string | undefined;
};

export const Name: FC<Props> = ({ fullName }) => {
  return (
    <>
      {fullName && (
        <h1 className="text-4xl font-semibold leading-normal pdf:leading-8 pdf:text-cyan-800">
          {fullName}
        </h1>
      )}
    </>
  );
};
