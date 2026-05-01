import Navbar from "../components/Navbar";
import Image from "next/image";

const projects = [
  { id: 1, title: "E-Commerce Web", category: "Web Development", image: "/project1.jpg" },
  { id: 2, title: "Personal Portfolio", category: "Next.js", image: "/project2.jpg" },
  { id: 3, title: "Business Dashboard", category: "UI/UX Design", image: "/project3.jpg" },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="max-w-7xl mx-auto px-10 py-16">
        <h2 className="text-purple-600 font-bold text-lg uppercase tracking-widest text-center">My Work</h2>
        <h1 className="text-4xl font-extrabold text-center mt-2 mb-12 text-gray-900">Recent Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition">
              <div className="relative h-64 w-full">
                <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-400">
                  Image Placeholder
                </div>
              </div>
              <div className="p-6">
                <p className="text-purple-600 text-sm font-semibold uppercase">{project.category}</p>
                <h3 className="text-xl font-bold mt-1 text-gray-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}