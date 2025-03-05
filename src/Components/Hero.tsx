export default function Hero() {
  return (
    <div className="relative flex flex-col lg:flex-row justify-center lg:gap-56 items-center mt-24 lg:mt-48 px-4 lg:px-0" id="Hero">
      <div className="font-Sansita text-white w-full max-w-sm lg:w-96 z-10">
        <h1 className="text-2xl lg:text-3xl">
          HELLO IT'S <span className="bg-clip-text text-transparent bg-gradient-to-tr from-slate-200 from-60% to-red-900">KILLIAN</span>
        </h1>
        <p className="text-sm text-wrap mt-2">A web developer trying to master each technologies that seems to pop up every week.</p>
        <div className="flex gap-4 lg:gap-10 mt-8">
          <a href="#Projects" className="px-4 lg:px-5 p-1.5 bg-slate-800 rounded-[0.25rem] hover:bg-slate-800/70 duration-300">
            See Projects
          </a>
          <a href="mailto:fravalo.killian2@gmail.com" className="px-4 lg:px-5 p-1.5 bg-red-900 rounded-[0.25rem] hover:bg-red-900/80 duration-300">
            Contact Me
          </a>
        </div>
      </div>
      <div className="absolute left-0 lg:relative size-52 lg:size-72 rounded-full border-e-2 border-black opacity-20 lg:opacity-100 bg-[linear-gradient(to_top,theme(colors.slate.800),60%,theme(colors.red.800/90%)),url(https://digitalfreepen.com/images/2017/whitenoise.png)] bg-[size:auto,100px]"></div>
    </div>
  );
}
