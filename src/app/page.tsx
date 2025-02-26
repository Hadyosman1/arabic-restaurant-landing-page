import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="min-h-svh overflow-hidden">
      <Hero />
      <Features />
      <About />
    </main>
  );
}
