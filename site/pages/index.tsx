import { BriefcaseIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import { PortableText } from "@portabletext/react";
import type { GetStaticProps, NextPage } from "next";
import { Bio } from "../components/bio";
import { client, image } from "../sanity";

const Home: NextPage = ({
  background,
  bio,
  fullName,
  header,
  location,
  photo,
}: any) => {
  return (
    <main>
      <section className="relative h-[500px]">
        <div
          style={{ backgroundImage: `url('${background}')` }}
          className={`absolute top-0 h-full w-full bg-cover bg-center`}
        ></div>
        <div className="absolute top-0 h-full w-full bg-slate-900 opacity-40"></div>
      </section>
      <section className="relative">
        <div className="container mx-auto -mt-64 px-4">
          <div className={`rounded-lg bg-white px-6 pt-[96px] shadow-xl`}>
            <img
              alt={`${fullName} Photo`}
              src={image(photo).width(192).url()}
              className="mx-auto -mt-[192px] h-auto w-[192px] rounded-full border-none shadow-xl"
            />

            <div className="mt-6 text-center">
              <h1 className="text-4xl font-semibold leading-normal text-gray-700">
                {fullName}
              </h1>
              <div className="mt-2 inline-flex items-center text-sm font-semibold uppercase leading-none text-gray-500">
                <LocationMarkerIcon width={24} className="mr-2" />{" "}
                <span>{location}</span>
              </div>
              <h2 className="mt-10 text-2xl font-semibold leading-none text-gray-700">
                {header.title}
              </h2>
              <h3 className="mt-4 text-xl font-light leading-none text-gray-500">
                <PortableText value={header.body} />
              </h3>
              <Bio className="-mx-6 mt-12" {...bio} />
              <div className="mt-12">
                <h2 className="text-2xl font-semibold leading-none text-gray-700">
                  Work & School
                </h2>
                <div className="container mx-auto mt-6 grid max-w-2xl items-center gap-8">
                  <div className="text-normal flex items-start font-semibold uppercase leading-none text-gray-500">
                    <div>
                      <BriefcaseIcon width={28} className="mr-4" />{" "}
                    </div>
                    <div className="text-left">
                      <div>IntelliTect</div>
                      <div className="text-sm font-thin">
                        January 2019 - Present
                      </div>

                      <div className="mt-2 text-sm">
                        Senior Software Engineer
                      </div>
                      <ul className="mt-2 list-disc pl-12 font-thin normal-case">
                        <li>Gotta come up with some things to put here</li>
                        <li>Yup, at least a couple</li>
                        <li>
                          Should probably figure out some shared styling for
                          lists
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-normal flex items-start font-semibold uppercase leading-none text-gray-500">
                    <div>
                      <BriefcaseIcon width={28} className="mr-4" />{" "}
                    </div>
                    <div className="text-left">
                      <div>World Wide Group, LLC</div>
                      <div className="text-sm font-thin">
                        May 2016 - December 2018
                      </div>

                      <div className="mt-2 text-sm">Division Supervisor</div>
                      <ul className="mt-2 list-disc pl-12 font-thin normal-case">
                        <li>
                          Managed a team of 4 full-time developers and 1 remote
                          contractor
                        </li>
                        <li>
                          Provided training, guidance and advice for other devs
                        </li>
                        <li>Performed code reviews</li>
                        <li>
                          Remained directly involved in development in
                          additional to supervisor duties, mainly as a software
                          architect
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-24">
                Some other content, as you might imagine
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default Home;
