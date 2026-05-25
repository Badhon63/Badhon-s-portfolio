
import Navbar from "../components/Navbar";
import Link from "next/link";
import { SiC, SiCplusplus,SiMongodb ,SiDaisyui} from "react-icons/si";
import { FaJava,FaLinux,FaPython,FaHtml5,FaReact, FaNodeJs, FaPhp  } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill} from "react-icons/ri";
import { DiMysql } from "react-icons/di";
const skillData = [
  { name: "C", category: "Language", desc: "Low-level programming and system logic.", icon: <SiC size={32} />, color: "bg-blue-100 text-blue-600" },
  { name: " C++", category: "Language", desc: "Powerful OOP and game development.", icon: <SiCplusplus size={32} />, color: "bg-indigo-100 text-indigo-600" },
  { name: "Java", category: "Language", desc: "Robust backend and Android apps.", icon: <FaJava size={32} />, color: "bg-red-100 text-red-600" },
  { name: "Linux", category: "OS/Tools", desc: "Server management and bash scripting.", icon: <FaLinux size={32} />, color: "bg-gray-200 text-gray-800" },
  { name: "Python", category: "Language", desc: "Data Science, AI, and Automation.", icon: <FaPython size={32} />, color: "bg-yellow-100 text-yellow-700" },
  { name: "HTML/CSS", category: "Frontend", desc: "Web structure and visual styling.", icon: <FaHtml5 size={32} />, color: "bg-orange-100 text-orange-600" },
  { name: "React Vite", category: "Frontend", desc: "Lightning fast modern web apps.", icon: <FaReact size={32} />, color: "bg-cyan-100 text-cyan-600" },
  { name: "Tailwind CSS", category: "Frontend", desc: "Rapid UI development with utility classes.", icon: <RiTailwindCssFill size={32} />, color: "bg-teal-100 text-teal-600" },
  { name: "Daisy UI", category: "Frontend", desc: "Premium Tailwind components.", icon: <SiDaisyui size={32} />, color: "bg-pink-100 text-pink-600" },
  { name: "Node.js", category: "Backend", desc: "High-performance JS server runtime.", icon: <FaNodeJs size={32} />, color: "bg-green-100 text-green-600" },
  { name: "Next.js", category: "Fullstack", desc: "The React framework for production.", icon: <RiNextjsFill size={32} />, color: "bg-slate-200 text-black" },
  { name: "MySQL", category: "Database", desc: "Structured data and SQL management.", icon: <DiMysql size={32} />, color: "bg-blue-100 text-blue-800" },
  { name: "PHP", category: "Backend", desc: "Server-side scripting for dynamic web.", icon: <FaPhp size={32} />, color: "bg-purple-100 text-purple-600" },
  { name: "MongoDB", category: "Database", desc: "NoSQL document database.", icon: <SiMongodb size={32} />, color: "bg-green-100 text-green-600" },
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
       
        <div className="text-center mb-20">
          <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase">
            Technical Stack
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-6 text-gray-900 tracking-tight">
            My <span className="text-purple-600">Expertise</span>
          </h1>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
          I use a range of technologies to build modern, high-performance web applications. From programming languages to databases, my technical skills are listed below, showcasing my ability to create efficient and scalable solutions for various projects. Whether it's frontend design or backend development, I have the expertise to bring ideas to life.
          </p>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillData.map((skill, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-purple-200 transition-all duration-500"
            >
        
              <div className={`w-16 h-16 ${skill.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300`}>
                {skill.icon}
              </div>
              
              
              <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors">
                {skill.name}
              </h3>
              <p className="text-sm font-bold opacity-60 mb-4">{skill.category}</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

       
       <div className="mt-12 max-w-4xl mx-auto p-0.5 rounded-[2rem] bg-gradient-to-r from-purple-800 via-pink-1000 to-blue-800 shadow-xl">
  <div className="p-6 md:p-10 text-center text-white bg-black/10 rounded-[2rem] backdrop-blur-sm">
    <h2 className="text-xl md:text-2xl font-bold mb-4">
      Looking for a skilled developer?
    </h2>
    <p className="text-purple-50 text-base mb-8 max-w-lg mx-auto opacity-90">
      My technical skills will help turn your ideas into reality.
    </p>
    <div className="flex flex-wrap justify-center gap-3">
        <Link href="/contact" >
      <button className="bg-white text-purple-700 px-7 py-3 rounded-xl font-bold hover:bg-gray-100 transition shadow-md text-sm">
        Get in Touch
      </button>
      </Link>
      <Link href="/projects">
        <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-7 py-3 rounded-xl font-bold hover:bg-white/20 transition text-sm">
          View Projects
        </button>
      </Link>
    </div>
  </div>
</div>
      </section>
    </main>
  );
}