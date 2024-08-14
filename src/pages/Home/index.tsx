import Navbar from "../Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-around items-center mt-48">
        <div className="font-Sansita text-white w-96">
          <h1 className="text-3xl">
            HELLO IT'S <span className="text-ct-yellow">KILLIAN</span>
          </h1>
          <p className="text-sm text-wrap mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            est esse provident at, vel nostrum hic culpa, eos, voluptate dolorem
            consectetur sequi laborum magni odio? Excepturi non aliquid tempora
            minima?
          </p>
          <div className="flex gap-10 mt-8">
            <a
              href=""
              className="px-5 p-1.5 bg-ct-blue rounded-lg hover:bg-ct-blue/70 duration-300"
            >
              See Projects
            </a>
            <a
              href=""
              className="px-5 p-1.5 bg-ct-yellow rounded-lg hover:bg-ct-yellow/70 duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="size-40 lg:size-64 rounded-full bg-grainy, bg-gradient-to-t from-slate-50/30 to-red-900"></div>
      </div>
    </>
  );
}
