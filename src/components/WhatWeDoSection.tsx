import React from 'react';
import FadeUp from './FadeUp';

const programs = [
  {
    id: 1,
    title: "Educational Programs",
    category: "KNOWLEDGE & POLICY",
    description: "Engage in educational programs and policy forums designed to elevate understanding.",
    bgColor: "bg-[#276CE3]", // Blue
    textColor: "text-white"
  },
  {
    id: 2,
    title: "Leadership Conferences",
    category: "EXPERT INSIGHTS",
    description: "Participate in seminars and expert lectures that bring together thought leaders and change-makers.",
    bgColor: "bg-[#B92625]", // Red
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Research & Publication",
    category: "ECONOMIC STRATEGY",
    description: "Access our insights on economic and fiscal policy to guide sustainable development.",
    bgColor: "bg-[#E6C312]", // Gold
    textColor: "text-[#1A1A1A]"
  },
  {
    id: 4,
    title: "Advocacy for Gender Equity",
    category: "INCLUSIVE POLICIES",
    description: "Promoting gender-inclusive economic policies to ensure full economic participation.",
    bgColor: "bg-[#E0E2E3]", // Gray
    textColor: "text-[#1A1A1A]"
  },
  {
    id: 5,
    title: "Capacity Building",
    category: "EMPOWERMENT",
    description: "Equipping diaspora entrepreneurs and policymakers with the necessary tools to succeed.",
    bgColor: "bg-awida-green", // Dark Green
    textColor: "text-white"
  }
];

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="bg-white w-full">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 max-w-5xl text-center">
        <FadeUp>
          <h2 className="font-lato text-3xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">What We Do</h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">This alliance is for everyone shaping the future of the transatlantic diaspora. Whether you're building your first path or scaling your impact, there's something designed for you.</p>
        </FadeUp>
      </div>
      <div className="flex flex-col w-full border-t border-gray-200">
        {programs.map((program, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={program.id} className={`flex flex-col md:flex-row w-full min-h-[350px] ${isEven ? '' : 'md:flex-row-reverse'}`}>
              <div className={`w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 ${program.bgColor} ${program.textColor}`}>
                <FadeUp delay={0.1}>
                  <h3 className="font-lato text-3xl md:text-5xl font-semibold leading-[1.2] tracking-tight">{program.title}</h3>
                </FadeUp>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 bg-white border-b border-gray-200">
                <FadeUp delay={0.2}>
                  <span className="block text-sm font-bold text-gray-400 tracking-widest uppercase mb-4">{program.category}</span>
                </FadeUp>
                <FadeUp delay={0.3}>
                  <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed">{program.description}</p>
                </FadeUp>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
