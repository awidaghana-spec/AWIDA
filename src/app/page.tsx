import Image from 'next/image';
import Link from 'next/link';
import FocusAreas from '@/components/FocusAreas';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import CallToAction from '@/components/CallToAction';
import Hero from '@/components/Hero';
import FadeUp from '@/components/FadeUp';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* INTRODUCTION STATEMENT */}
      <section className="relative w-full aspect-auto md:aspect-[1672/941] min-h-[500px] flex items-center justify-center px-4 py-20 overflow-hidden bg-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/cH-fade.png')" }}
        ></div>

        {/* Seamless Edge Fades */}
        <div className="absolute top-0 left-0 w-full h-12 md:h-16 bg-gradient-to-b from-white to-transparent z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-12 md:h-16 bg-gradient-to-t from-white to-transparent z-0 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
          <FadeUp delay={0.1}>
            <h2 className="font-lato text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 [text-shadow:_0_2px_10px_rgb(0_0_0_/_0.6)]">
              A transatlantic knowledge bridge connecting Africa, the Caribbean, and the West Indies.
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-xl md:text-2xl text-white/95 leading-snug font-light max-w-3xl mx-auto [text-shadow:_0_2px_6px_rgb(0_0_0_/_0.6)]">
              We advance economic literacy, public health awareness, and policy dialogue within emerging and developing economies.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* WHAT WE DO */}
      <WhatWeDoSection />
      
      {/* Focus Areas Section Experiment */}
      <section className="w-full bg-white">
        <FocusAreas />
      </section>

      {/* OUR PROGRAMS */}
      <section id="programs" className="py-20 md:py-28 px-4 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <FadeUp>
            <h2 className="font-lato text-3xl md:text-4xl text-awida-green font-bold mb-6">Our Programs</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="inline-block px-6 py-3 bg-gray-100 text-gray-600 rounded-full font-medium text-sm border border-gray-200">
              Coming Soon
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-6 text-gray-600">
              Details on our upcoming educational programming, lectures, and seminars will be published here.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <CallToAction />
    </>
  );
}
