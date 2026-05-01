import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-purple-600 font-bold text-lg uppercase tracking-widest">Contact <span className="text-black">with </span> Me</h2>
          <h1 className="text-5xl font-extrabold mt-4 text-gray-900">Let's work together.</h1>
          <p className="text-gray-600 mt-6 text-lg">
            Have a project in mind? Fill out the form or send me an email directly.
          </p>
          <div className="mt-8 space-y-4">
            <p className="text-gray-900 font-bold">Email: <span className="font-normal text-gray-600">jianrobiul7898@gmail.com</span></p>
            <p className="text-gray-900 font-bold">Phone: <span className="font-normal text-gray-600">+880 1686404446 </span></p>
            <p className="text-gray-900 font-bold">Location: <span className="font-normal text-gray-600">Gulshan,Dhaka, Bangladesh</span></p>
          </div>
        </div>

        <form className="bg-gray-50 p-10 rounded-3xl shadow-sm space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Full Name</label>
            <input type="text" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-purple-600" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Email Address</label>
            <input type="email" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-purple-600" placeholder="email@gmail.com" />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea className="w-full p-4 rounded-xl border border-gray-200 focus:outline-purple-600 h-32" placeholder="How can I help?"></textarea>
          </div>
          <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-purple-700 transition">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}