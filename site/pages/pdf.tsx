import type { GetStaticProps, NextPage } from "next";
import { Basic } from "../components/basic";
import { Bio } from "../components/bio";
import { Experience } from "../components/experience";
import { Name } from "../components/name";
import { Project } from "../components/project";
import { Tech } from "../components/tech";
import { Portfolio } from "../sanity";
import { client } from "../sanity/client";

const Pdf: NextPage<Portfolio> = ({
  bio,
  contact,
  fullName,
  location,
  experience,
  tech,
  projects,
}) => {
  return (
    <main className="pdf bg-white p-4 text-gray-600">
      <div className="flex justify-between gap-12 pdf:-mt-4">
        <div>
          <Name fullName={fullName} />
          {bio && <Bio value={bio} />}
        </div>

        <Basic
          location={location}
          email={contact?.email}
          phone={contact?.phone}
          website={contact?.website}
        />
      </div>

      {tech && <Tech className="mt-2 ml-1" value={tech} />}

      {experience && <Experience className="mt-4" value={experience} />}

      {projects && (
        <Project className="mt-4 break-before-page" value={projects} />
      )}
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const portfolio = await client.fetch(
    `*[_type == "portfolio" && slug.current == "brian"][0]`
  );

  return {
    props: portfolio,
  };
};

export default Pdf;
