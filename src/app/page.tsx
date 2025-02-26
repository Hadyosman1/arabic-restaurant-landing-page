import About from "@/components/home/About";
import Booking from "@/components/home/Booking";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Kora from "@/components/home/Kora";

export default function Home() {
  return (
    <main className="min-h-svh overflow-hidden">
      <Hero />
      <Features />
      <About />
      <FeaturedProducts />
      <Kora />
      <Booking />
    </main>
  );
}
