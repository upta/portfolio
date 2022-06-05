import { DocumentDownloadIcon } from "@heroicons/react/outline";
import type { GetStaticProps, NextPage } from "next";
import { Basic } from "../components/basic";
import { Bio } from "../components/bio";
import { Experience } from "../components/experience";
import { Name } from "../components/name";
import { Project } from "../components/project";
import { Tech } from "../components/tech";
import { Portfolio } from "../sanity";
import { client, image } from "../sanity/client";

const Home: NextPage<Portfolio> = ({
  background,
  bio,
  contact,
  fullName,
  header,
  location,
  photo,
  experience,
  tech,
  projects,
}) => {
  return (
    <main>
      <section className="relative h-[500px]">
        <div
          style={{ backgroundImage: `url('${background}')` }}
          className={`absolute top-0 h-full w-full bg-cover bg-center`}
        ></div>
        <div className="absolute top-0 h-full w-full bg-slate-900 opacity-30"></div>
      </section>

      <section className="relative">
        <div className="container mx-auto -mt-64 mb-6 px-4 brightness-125">
          <div
            className={`relative rounded-lg bg-gray-700 px-6 pb-12 pt-[96px] shadow-xl`}
          >
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
            {photo && (
              <img
                alt={`${fullName} Photo`}
                src={image(photo).width(192).url()}
                className="mx-auto -mt-[192px] h-auto w-[192px] rounded-full border-none shadow-xl brightness-90"
              />
            )}

            <div className="mt-6 text-center">
              <Name fullName={fullName} />

              <Basic
                location={location}
                email={contact?.email}
                phone={undefined}
                website={undefined}
              />

              {/* <h2 className="mt-10 text-2xl font-semibold leading-none">
                {header.title}
              </h2>

              <h3 className="mt-4 text-xl font-light leading-none">
                <PortableText value={header.body} />
              </h3> */}

              {bio && <Bio className="-mx-6 mt-12" value={bio} />}

              {tech && <Tech className="mt-12" value={tech} />}

              {experience && (
                <Experience className="mt-12" value={experience} />
              )}

              {projects && <Project className="mt-12" value={projects} />}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const portfolio = await client.fetch<Portfolio>(
    `*[_type == "portfolio" && slug.current == "brian"][0]`
  );

  return {
    props: portfolio,
  };
};

export default Home;
