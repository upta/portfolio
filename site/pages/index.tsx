import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <section className="relative h-[500px]">
        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1554281388-cf462ecb436d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"></div>
        <div className="absolute top-0 bg-slate-900 w-full h-full opacity-40"></div>
      </section>
      <section className="relative">
        <div className="container mx-auto px-4 -mt-64">
          <div className={`bg-white px-6 shadow-xl rounded-lg pt-[96px]`}>
            <img
              alt="Brian Uptagrafft Photo"
              src="/photo.webp"
              className="shadow-xl rounded-full h-auto border-none -mt-[192px] w-[192px] mx-auto"
            />
            <div className="text-center mt-6">
              <h1 className="text-4xl font-semibold leading-normal text-gray-700">
                Brian Uptagrafft
              </h1>
              <div className="text-sm leading-none font-semibold uppercase text-gray-500 mt-2">
                Spokane, Washington
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
