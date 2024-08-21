export default function Navbar() {
  return (
    <div className="sticky w-full flex justify-center text-white font-Sansita text-sm items-center gap-2 pt-10">
      <a href="#Hero" className="hover:bg-slate-500/25 duration-300 px-4 p-1 rounded-lg hover:cursor-pointer">Home</a>
      <div className="w-2 h-2 rounded-full bg-white"></div>
      <a href="#Experiences" className="hover:bg-slate-500/25 duration-300 px-4 p-1 rounded-lg">Experiences</a>
      <div className="w-2 h-2 rounded-full bg-white"></div>
      <a href="mailto:fravalo.killian2@gmail.com" className="hover:bg-slate-500/25 duration-300 px-4 p-1 rounded-lg">Contact</a>
    </div>
  );
}
