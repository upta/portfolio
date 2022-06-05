import {
  AtSymbolIcon,
  LinkIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import { FC } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  location: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  website: string | undefined;
};

export const Basic: FC<Props> = ({ location, email, phone, website }) => {
  return (
    <div className="flex flex-col items-center gap-1 text-sm font-semibold uppercase text-gray-400 pdf:items-start">
      {location && (
        <div className="inline-flex items-center">
          <LocationMarkerIcon width={24} className="mr-2" />{" "}
          <span>{location}</span>
        </div>
      )}

      {email && (
        <div className="inline-flex items-center">
          <AtSymbolIcon width={24} className="mr-2" /> <span>{email}</span>
        </div>
      )}

      {phone && (
        <div className="inline-flex items-center">
          <PhoneIcon width={24} className="mr-2" /> <span>{phone}</span>
        </div>
      )}

      {phone && (
        <div className="inline-flex items-center">
          <LinkIcon width={24} className="mr-2" />{" "}
          <a href={`https://${website}`}>
            <span>{website}</span>
          </a>
        </div>
      )}
    </div>
  );
};
