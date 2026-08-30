import Image from 'next/image';
import Link from 'next/link';
import FadeUp from '@/components/FadeUp';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* PAGE HEADER */}
      <section className="text-white md:py-24 px-4 relative overflow-hidden flex flex-col justify-center items-center aspect-video md:aspect-auto md:min-h-[30vh]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/connected hands.png"
            alt="AWIDA Global Community"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <FadeUp>
            <h1 className="font-lato text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Who We Are</h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Discover the mission, vision, and people behind the African West Indies Diaspora Alliance (AWIDA).
            </p>
          </FadeUp>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative">
              <FadeUp className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-white flex items-center justify-center">
                  <img 
                    src="/logo.png" 
                    alt="AWIDA Mission" 
                    className="w-full h-full object-contain scale-[1.15]"
                  />
                </div>
              </FadeUp>
              {/* Decorative elements */}
              <FadeUp delay={0.3} className="absolute -bottom-6 -right-6 w-24 h-24 bg-awida-gold rounded-full -z-10"><div /></FadeUp>
              <FadeUp delay={0.2} className="absolute -top-6 -left-6 w-32 h-32 bg-awida-green opacity-10 rounded-full -z-10"><div /></FadeUp>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <FadeUp delay={0.1}>
                <p className="text-gray-600 leading-relaxed text-lg">
                  African West Indies Diaspora Alliance (AWIDA) is a nonprofit educational organization registered in Ghana. We are dedicated to connecting Africa, the Caribbean, and the West Indies through shared knowledge, culture, and economic advancement.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-gray-600 leading-relaxed text-lg">
                  As a transatlantic knowledge bridge, our vision is to foster an informed, economically empowered, and gender-inclusive diaspora that drives sustainable development. We carry out this mission by promoting economic literacy and gender equity through education, public health awareness, and policy dialogue on trade, economic, and fiscal policy across our focus regions.
                </p>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* CROSS-CUTTING FOCUS (Moved from Home Page) */}
      <section className="py-20 md:py-28 px-4 bg-awida-green text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeUp>
            <h2 className="font-lato text-3xl md:text-4xl font-bold mb-8">Cross-Cutting Focus</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl text-green-50 leading-relaxed">
              Recognizing that sustainable economic growth must be inclusive, AWIDA integrates gender equality into all its programs to ensure women's full economic participation and resilient community development.
            </p>
          </FadeUp>
        </div>
      </section>


      {/* CTA SECTION */}
      <section className="py-20 md:py-24 px-4 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <FadeUp>
            <h2 className="font-lato text-3xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're interested in our educational programs, upcoming conferences, or looking to partner with us, we'd love to hear from you.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="bg-awida-gold text-white px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-all shadow-md w-full sm:w-auto">
                Contact Us
              </Link>
              <Link href="/#programs" className="bg-white text-awida-green border-2 border-awida-green px-8 py-3.5 rounded-full font-semibold hover:bg-green-50 transition-all w-full sm:w-auto">
                View Programs
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
