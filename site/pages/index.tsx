import type { GetStaticProps, NextPage } from "next";
import { Basic } from "../components/basic";
import { Bio } from "../components/bio";
import { Experience } from "../components/experience";
import { Project } from "../components/project";
import { Tech } from "../components/tech";
import { Portfolio } from "../sanity";
import { client, image } from "../sanity/client";

const Home: NextPage<Portfolio> = ({
  background,
  bio,
  contact,
  fullName,
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
            {photo && (
              <img
                alt={`${fullName} Photo`}
                src={image(photo).width(192).url()}
                className="mx-auto -mt-[192px] h-auto w-[192px] rounded-full border-none shadow-xl brightness-90"
              />
            )}

            <div className="mt-6 text-center">
              <Basic
                location={location}
                email={contact?.email}
                phone={undefined}
                website={undefined}
              />

              {bio && <Bio className="-mx-6 mt-12" value={bio} />}

              {tech && <Tech className="mt-8" value={tech} />}

              <hr className="mx-8 my-8 text-gray-400" />

              {experience && <Experience value={experience} />}

              <hr className="mx-8 my-8 text-gray-400" />

              {projects && <Project value={projects} />}
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
