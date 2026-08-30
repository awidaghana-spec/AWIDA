import Image from 'next/image';
import Link from 'next/link';
import FadeUp from './FadeUp';

export default function Hero() {
  return (
    <section className="relative bg-white pt-28 md:pt-20 lg:pt-24 pb-8 md:pb-12 overflow-hidden">
      
      {/* Subtle Noise / Grain Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
      
      {/* Bottom Edge Fade */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content (Left) */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8 lg:-translate-y-12 p-4 sm:p-6 md:p-0">
            
            <FadeUp delay={0.1}>
              <h2 className="font-lato text-[28px] sm:text-4xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 leading-[1.2] tracking-tight">
                <span className="block whitespace-nowrap">Connecting Knowledge,</span>
                <span className="block text-awida-gold whitespace-nowrap">Empowering Economies.</span>
              </h2>
            </FadeUp>
            
            {/* Architectural Line Accent */}
            <FadeUp delay={0.3}>
              <div className="border-l-0 md:border-l-4 border-awida-green pl-0 md:pl-6">
                <p className="text-lg md:text-xl text-gray-800 md:text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Building a transatlantic knowledge bridge to empower global communities and drive sustainable change.
                </p>
              </div>
            </FadeUp>

            {/* Image Map - Mobile Only */}
            <div className="w-full relative lg:hidden pt-2 -mb-4">
              <FadeUp delay={0.2} duration={0.8} yOffset={20}>
                <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[400px] mx-auto">
                  <Image 
                    src="/continent.svg" 
                    alt="Africa Continent" 
                    fill 
                    className="object-contain"
                    priority
                  />
                </div>
              </FadeUp>
            </div>
            
            <FadeUp delay={0.5}>
              <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-0 lg:pt-4 w-full">
                <Link href="#programs" className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-awida-green text-white px-2 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium hover:bg-green-800 transition-all hover:-translate-y-0.5 whitespace-nowrap text-sm sm:text-base">
                  Learn Policy
                </Link>
                <Link href="/about" className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-gray-900 border-2 border-black px-2 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium hover:bg-gray-50 transition-all whitespace-nowrap text-sm sm:text-base">
                  Our Mission
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Image Map (Right) - Desktop Only */}
          <div className="hidden lg:block w-full lg:w-1/2 relative">
            <FadeUp delay={0.4} duration={0.8} yOffset={40}>
              <div className="relative w-full aspect-square max-w-[500px] lg:max-w-[600px] mx-auto lg:-translate-y-4 lg:translate-x-12">
                <Image 
                  src="/continent.svg" 
                  alt="Africa Continent" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
