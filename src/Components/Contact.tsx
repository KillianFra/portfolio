import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="w-full flex justify-center mt-36 pb-80">
            <div className="w-full lg:w-1/3 flex items-center text-white flex-col gap-6 p-8 rounded-2xl backdrop-blur-sm bg-slate-800/20 border border-slate-700/30 shadow-md hover:shadow-slate-700/10 transition-all duration-300">
                <h2 className="font-Sansita text-3xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent flex items-center gap-3">
                    Want to get in touch ? <MdEmail className="text-white animate-pulse" />
                </h2>
                <p className="text-gray-300 text-center text-sm">I'm always open to new opportunities and interesting projects.</p>
                <div className="flex gap-4 items-center">
                    <a href="https://github.com/Kfra1990" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors duration-300">
                        <FaGithub className="text-white/30 hover:text-white duration-200" />
                    </a>
                    <a 
                        href="mailto:fravalo.killian2@gmail.com?subject=[Project] - We could work together !" 
                        className="group relative px-8 py-3 bg-gradient-to-tr from-red-800 to-slate-800 rounded-lg font-medium text-white shadow hover:shadow-red-900/10 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <span className="relative z-10">Send me an email</span>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-red-700 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/killian-fravalo/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-blue-400 transition-colors duration-300">
                        <FaLinkedin className="text-white/30 hover:text-white duration-200" />
                    </a>
                </div>
            </div>
        </div>
    )
}