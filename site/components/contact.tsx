import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/outline";
import { FC } from "react";
import { Contact as ContactSchema } from "../sanity";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  includePhone: boolean;
  value: ContactSchema;
};

export const Contact: FC<Props> = ({
  includePhone,
  value: { email, phone },
}) => {
  return (
    <div>
      {email && (
        <div className="inline-flex items-center text-sm font-semibold uppercase leading-none text-gray-400 pdf:flex">
          <AtSymbolIcon width={24} className="mr-2" /> <span>{email}</span>
        </div>
      )}
      {includePhone && phone && (
        <div className="mt-2 inline-flex items-center text-sm font-semibold uppercase leading-none text-gray-400 pdf:flex">
          <PhoneIcon width={24} className="mr-2" /> <span>{phone}</span>
        </div>
      )}
    </div>
  );
};
