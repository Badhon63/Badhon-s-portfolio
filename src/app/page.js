import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}