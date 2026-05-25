import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa6";

export default function Hero() {

  return (
    <section className="grid md:grid-cols-2 items-center px-10 mt-10 min-h-[70vh]">
      {/* Left Content Area */}
      <div>
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-purple-600">Badhon</span>
        </h1>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Frontend-Focused Full Stack Developer
        </h2>

        <p className="text-gray-500 mb-6 max-w-md leading-relaxed">
          I build responsive, user-friendly web applications using modern technologies like React, Tailwind CSS, and Node.js. 
          Passionate about creating clean UI and solving real-world problems through code.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex gap-4 mb-8">
          <Link href="/contact">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition">
              Hire Me
            </button>
          </Link>
          <Link href="/projects">
            <button className="border border-purple-600 text-purple-600 px-6 py-2 rounded-md font-medium hover:bg-purple-50 transition">
              See Projects
            </button>
          </Link>
        </div>

        {/* Social Media Links (Black Icons) */}
        <div className="flex gap-6 items-center ml-1">
          <Link 
            href="https://www.linkedin.com/in/lima-akter-badhon" 
            target="_blank" 
            className="text-gray-900 hover:text-purple-600 transition-colors"
          >
            <CiLinkedin size={28} />
          </Link>

          <Link 
            href="https://github.com/Badhon63" 
            target="_blank" 
            className="text-gray-900 hover:text-purple-600 transition-colors"
          >
            <FaGithub size={28} />
          </Link>

          <Link 
            href="https://www.discordapp.com/users/lima_akter" 
            target="_blank" 
            className="text-gray-900 hover:text-purple-600 transition-colors"
          >
            <FaDiscord size={28} />
          </Link>
        </div>
      </div>

      
      <div className="flex justify-center mt-10 md:mt-0"> 
        <img
          src="/profile.png"
          alt="profile"
          className="w-[300px] md:w-[400px] object-contain"
        />
      </div>
    </section>
  );
}