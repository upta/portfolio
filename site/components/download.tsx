import { DocumentDownloadIcon } from "@heroicons/react/outline";

export const Download = () => {
  return (
    <a
      href="/api/pdf"
      target="_blank"
      className="absolute top-4 right-4 inline-flex flex-col items-center text-gray-300"
    >
      <DocumentDownloadIcon width={42} />
      <small className="text-center">
        Download
        <br />
        Resume
      </small>
    </a>
  );
};
