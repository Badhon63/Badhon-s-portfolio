import Navbar from "../components/Navbar";
import Image from "next/image";
export default function About() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* নেভবার */}
      <Navbar />

      <section className="max-w-7xl mx-auto px-10 py-16 flex flex-col md:flex-row items-center gap-12">
        
        {/* ছবির অংশ */}
        <div className="flex-1 relative">
          <div className="absolute -top-4 -left-4 w-full h-full border-4 border-purple-600 rounded-2xl -z-10"></div>
          <Image
            src="/profile1.png" // আপনার ফাইল লিস্টে থাকা দ্বিতীয় ছবি
            alt="About Badhon"
            width={450}
            height={550}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* টেক্সট অংশ */}
        <div className="flex-1 text-left">
          <h2 className="text-purple-600 font-bold text-lg uppercase tracking-widest">
            About Me
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 text-gray-900 leading-tight">
            I am a Creative <br /> 
            <span className="text-purple-600">Web Developer</span>
          </h1>
          
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
           Hi, I’m Lima Akter (Badhon), a Frontend-Focused Full Stack Developer. I enjoy building modern, responsive, and user-friendly web applications using technologies like React, Tailwind CSS, and JavaScript. I also work with Node.js and databases to handle backend functionality.

I love turning ideas into real-world solutions through code. Currently, I am working on a medicine service platform that includes features like user authentication, prescription upload, and online ordering to improve accessibility and user experience.

I am continuously learning and improving my skills, especially in backend development, to become a more complete developer. My goal is to build impactful digital products that solve real problems and provide a great user experience.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-3xl font-bold text-purple-600">10+</h3>
              <p className="text-gray-500 font-medium">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-600">A+</h3>
              <p className="text-gray-500 font-medium">Quality Work</p>
            </div>
          </div>

          <div className="mt-10">
            <button className="bg-purple-600 text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-purple-700 transition">
              Download CV
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}