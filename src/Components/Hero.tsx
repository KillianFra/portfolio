export default function Hero() {
  return (
    <div className="flex justify-center gap-56 items-center mt-48">
      <div className="font-Sansita text-white w-96">
        <h1 className="text-3xl">
          HELLO IT'S <span className="bg-clip-text text-transparent bg-gradient-to-tr from-slate-200 from-60% to-red-900">KILLIAN</span>
        </h1>
        <p className="text-sm text-wrap mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium est esse provident at, vel nostrum hic culpa, eos, voluptate dolorem consectetur sequi laborum magni odio? Excepturi non aliquid tempora minima?</p>
        <div className="flex gap-10 mt-8">
          <a href="" className="px-5 p-1.5 bg-slate-800 rounded-lg hover:bg-slate-800/70 duration-300">
            See Projects
          </a>
          <a href="" className="px-5 p-1.5 bg-red-900 rounded-lg  hover:bg-red-900/80 duration-300">
            Contact Me
          </a>
        </div>
      </div>
      <div className="size-64 lg:size-72 rounded-full border-e-2 border-black bg-[linear-gradient(to_top,theme(colors.slate.800),60%,theme(colors.red.800/90%)),url(https://digitalfreepen.com/images/2017/whitenoise.png)] bg-[size:auto,100px]"></div>
    </div>
  );
}
