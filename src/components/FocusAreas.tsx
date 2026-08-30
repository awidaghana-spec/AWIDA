import React from "react";
import Image from "next/image";
import FadeUp from "./FadeUp";

export default function FocusAreas() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h3 className="font-lato text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-12 text-center tracking-tight">Our Focus Areas</h3>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Trade, Economic & Fiscal Policy */}
          <div className="md:col-span-2">
            <FadeUp delay={0.1} className="h-full">
              <div className="h-full rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-default min-h-[220px] md:min-h-[280px]">
                <Image 
                  src="/economic.png" 
                  alt="Trade, Economic & Fiscal Policy" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                  <h4 className="font-lato text-2xl md:text-3xl font-semibold text-white mb-3">Trade, Economic & Fiscal Policy</h4>
                  <p className="text-gray-200 max-w-md text-base md:text-lg leading-relaxed">Driving growth through informed economic strategies and robust fiscal dialogue.</p>
                </div>
              </div>
            </FadeUp>
          </div>
          
          {/* Card 2: Public Health */}
          <div className="md:col-span-1">
            <FadeUp delay={0.2} className="h-full">
              <div className="h-full rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-default min-h-[220px] md:min-h-[280px]">
                 <Image 
                   src="/health.png" 
                   alt="Public Health & Well-being" 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                 <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h4 className="font-lato text-2xl font-semibold text-white leading-tight mb-2">Public Health & Well-being</h4>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">Advancing equitable healthcare and strengthening community resilience.</p>
                 </div>
              </div>
            </FadeUp>
          </div>
          
          {/* Card 3: Gender Equity */}
          <div className="md:col-span-1">
            <FadeUp delay={0.1} className="h-full">
              <div className="h-full rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-default min-h-[220px] md:min-h-[280px]">
                <Image 
                  src="/equity.png" 
                  alt="Gender Equity & Empowerment" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h4 className="font-lato text-2xl font-semibold text-white leading-tight mb-2">Gender Equity & Empowerment</h4>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">Championing equal opportunities and empowering women to lead.</p>
                </div>
              </div>
            </FadeUp>
          </div>
          
          {/* Card 4: Sustainable Development */}
          <div className="md:col-span-2">
            <FadeUp delay={0.2} className="h-full">
              <div className="h-full rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-default min-h-[220px] md:min-h-[280px]">
                 <Image 
                   src="/development.jpg" 
                   alt="Sustainable Development" 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                 <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                  <h4 className="font-lato text-2xl md:text-3xl font-semibold text-white mb-3">Sustainable Development</h4>
                  <p className="text-gray-200 max-w-md text-base md:text-lg leading-relaxed">Building resilient communities that thrive across generations.</p>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </div>
  );
}
