import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 max-w-7xl mx-auto bg-white">
      {/* বাম দিকে লোগো */}
      <div className="text-3xl font-bold">
        Badh<span className="text-purple-600">O</span>n.
      </div>

  
      <div className="hidden md:flex gap-8 font-medium">
        <Link href="/" className="hover:text-purple-600">
          Home
        </Link>
        <Link href="/about" className="hover:text-purple-600">
          About
        </Link>
        <Link href="/projects" className="hover:text-purple-600">
         projects
        </Link>
        <Link href="/skills" className="hover:text-purple-600">
          Skills
        </Link>
        <Link href="/contact" className="hover:text-purple-600">
          Contact
        </Link>
      </div>

    
      <div className="flex justify-end">
        <Link href="/contact" >
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2.5 rounded-full font-semibold transition-all shadow-md">
          Let's Talk
        </button>
        </Link>
      </div>
    </nav>
  );
}