// src/app/page.js
import GradientBackground from '@/components/ui/GradientBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Service from '@/components/Service';
import Process from '@/components/Process';
import Case from '@/components/Case';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <GradientBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Hero />
        <About />
        <Service />
        <Process />
        <Case />
        <Contact />
      </div>
    </main>
  );
}