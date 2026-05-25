import Navbar from "../components/Navbar";
const projects = [
  {
    id: 1,
    title: "Mr.Punctuation",
    category: "Punctuation & Grammar correction website",
    image: "/Mr.Punctuation.png",
    link: "https://mr-punctuation-sxsc.vercel.app/",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    category: "Portfolio & Resume",
    image: "public/project2.jpg",
    link: "https://your-portfolio-link.vercel.app",
  },
  {
    id: 3,
    title: "Konkong Choya",
    category: "Online Ornaments Shop",
    image: "/project3.jpg",
    link: "https://your-konkong-link.vercel.app",
  },
  {
    id: 4,
    title: "Doctor's Appointment",
    category: "React Native",
    image: "/project4.jpg",
    link: "https://github.com/Badhon63/doctors-appointment",
  },
  {
    id: 5,
    title: "Kurbanir Hut",
    category: "Online Animal Store",
    image: "/kurbanir-hut.png",
    link: "https://qurbanihat-eta.vercel.app/",
  },
  {
    id: 6,
    title: "Automated Backup and System Monitoring",
    category: "Backup & Monitoring",
    image: "/project6.jpg",
    link: "https://github.com/Badhon63/backup-monitoring",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="max-w-7xl mx-auto px-10 py-16">
        <h2 className="text-purple-600 font-bold text-lg uppercase tracking-widest text-center">
          My Work
        </h2>
        <h1 className="text-4xl font-extrabold text-center mt-2 mb-12 text-gray-900">
          Recent Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition cursor-pointer block"
            >
              <div className="relative h-64 w-full">
                <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-400">
                  Image Placeholder
                </div>
              </div>
              <div className="p-6">
                <p className="text-purple-600 text-sm font-semibold uppercase">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold mt-1 text-gray-900">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}