import Navbar from "../components/Navbar";

const projects = [
  {
    id: 1,
    title: "Mr.Punctuation",
    category: "Punctuation & Grammar correction website",
    image: "/Mr.punctuation.png",
    link: "https://mr-punctuation-sxsc.vercel.app/",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    category: "Portfolio & Resume",
    image: "/portfolio.png",
    link: "https://badhon-s-portfolio.vercel.app/",
  },
  {
    id: 3,
    title: "Konkong Choya",
    category: "Online Ornaments Shop",
    image: "/project3.jpg",
    link: "kongkon-choya-web-page.vercel.app",
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
    image: "/kurbanir hut.png",
    link: "https://qurbanihat-eta.vercel.app/",
  },
  {
    id: 6,
    title: "Automated Backup and System Monitoring",
    category: "Backup & Monitoring",
    image: "/backup_monitoring.svg",
    link: "https://github.com/Badhon63/automated_backup/tree/main",
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
               <img
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>
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