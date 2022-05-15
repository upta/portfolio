import type { NextPage } from "next";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <main>
      <section className="relative h-[500px]">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1554281388-cf462ecb436d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center"></div>
        <div className="absolute top-0 h-full w-full bg-slate-900 opacity-40"></div>
      </section>
      <section className="relative">
        <div className="container mx-auto -mt-64 px-4">
          <div className={`rounded-lg bg-white px-6 pt-[96px] shadow-xl`}>
            <img
              alt="Brian Uptagrafft Photo"
              src="/photo.webp"
              className="mx-auto -mt-[192px] h-auto w-[192px] rounded-full border-none shadow-xl"
            />

            <div className="mt-6 text-center">
              <h1 className="text-4xl font-semibold leading-normal text-gray-700">
                Brian Uptagrafft
              </h1>
              <div className="mt-2 inline-flex items-center text-sm font-semibold uppercase leading-none text-gray-500">
                <LocationMarkerIcon width={24} className="mr-2" />{" "}
                <span>Spokane, Washington</span>
              </div>
              <h2 className="mt-10 text-2xl font-semibold leading-none text-gray-700">
                Software Developer & Mentor
              </h2>
              <h3 className="mt-4 text-xl font-light leading-none text-gray-500">
                Crafting elegant software solutions to delight customers and
                team members
              </h3>
              <div className="my-12 -mx-6 bg-gray-700 py-12 px-4 text-left text-xl font-thin text-white md:px-12">
                <p className="text-center text-3xl font-semibold">
                  Hi, I&apos;m Brian.
                </p>
                <p className="mt-4">
                  In over 16 years as a software dev I&apos;ve worked with a
                  plethora of technologies across desktop, web and mobile, and
                  being a life-long learner I&apos;m constantly learning new
                  ones.
                </p>
                <p className="mt-4">
                  Despite various technologies waxing and waning, I&apos;ve
                  found some things remain constant...
                </p>
                <ul className="mt-2 list-disc pl-12">
                  <li>
                    Simple, elegant solutions are better than their
                    over-engineered counterparts
                  </li>
                  <li>
                    Teams write better software when they take the time to teach
                    and learn from one another
                  </li>
                </ul>
                <p className="mt-2">
                  ...and I strive to take both of these principles to heart on
                  any project I work on.
                </p>
                <p className="mt-4">
                  Engineering software is simply more fun and more productive
                  when its being thoughtfully crafted and the team is supporting
                  one another.
                </p>
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

export default Home;
