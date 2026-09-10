"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { DIRECTORS, Director } from "@/data/directors";
import FadeUp from "@/components/FadeUp";

export default function BoardOfDirectors() {
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedDirector(null);
      }
    };

    if (selectedDirector) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedDirector]);

  return (
    <section className="py-20 md:py-28 px-4 bg-[#FAFAFA] border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <FadeUp>
            <h3 className="text-awida-red font-semibold tracking-wider uppercase text-sm mb-2">
              GOVERNANCE &amp; LEADERSHIP
            </h3>
            <h2 className="font-lato text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Board of Directors
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Our governing board provides strategic oversight, institutional accountability, and expert guidance to drive ACML's mission across West Africa.
            </p>
          </FadeUp>
        </div>

        {/* DIRECTORS HORIZONTAL SCROLL (MOBILE) / GRID (DESKTOP) */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-6 pb-4 pt-1 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {DIRECTORS.map((director, index) => (
            <FadeUp
              key={director.id}
              delay={0.08 * index}
              className="flex-shrink-0 w-[190px] sm:w-[220px] md:w-auto snap-start flex flex-col h-full"
            >
              <div
                onClick={() => setSelectedDirector(director)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedDirector(director);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View biography of ${director.name}`}
                className="group cursor-pointer bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-1.5 flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-awida-red focus:ring-offset-2"
              >
                {/* Director Portrait */}
                <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    sizes="(max-width: 640px) 190px, (max-width: 768px) 220px, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle hover overlay hint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5 sm:p-3">
                    <span className="text-[11px] sm:text-xs text-white font-medium bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full">
                      Read Bio
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow justify-center">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-awida-red tracking-wider uppercase mb-0.5 sm:mb-1">
                    {director.title}
                  </span>
                  <h3 className="font-lato text-sm sm:text-base md:text-lg font-bold text-gray-900 group-hover:text-awida-red transition-colors line-clamp-1">
                    {director.name}
                  </h3>
                  <span className="text-[11px] text-gray-400 font-medium sm:hidden mt-1">
                    Read Bio
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* READ BIO MODAL */}
      <AnimatePresence>
        {selectedDirector && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedDirector(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="director-modal-name"
              className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-4 sm:p-6 md:p-7 flex items-start justify-between gap-3 sm:gap-4 border-b border-gray-100">
                <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                  <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200/80 flex-shrink-0 shadow-sm bg-gray-50">
                    <Image
                      src={selectedDirector.image}
                      alt={selectedDirector.name}
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-xs font-semibold text-awida-red tracking-wider uppercase block">
                      {selectedDirector.title}
                    </span>
                    <h3
                      id="director-modal-name"
                      className="font-lato text-lg sm:text-2xl font-bold text-gray-900 leading-tight mt-0.5 truncate"
                    >
                      {selectedDirector.name}
                    </h3>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-1.5 sm:mt-2">
                      {selectedDirector.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-medium bg-gray-100 text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Close Button (X) */}
                <button
                  type="button"
                  onClick={() => setSelectedDirector(null)}
                  aria-label="Close dialog"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors flex items-center justify-center flex-shrink-0 cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Scrollable Bio Content */}
              <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-3 sm:space-y-4 max-h-[50vh] sm:max-h-[55vh] text-gray-600 text-sm sm:text-base leading-relaxed">
                {selectedDirector.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Footer */}
              <div className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/60">
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium truncate max-w-[200px] sm:max-w-none">
                  African-Caribbean Manufacturing Ltd • Board of Directors
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedDirector(null)}
                  className="bg-gray-900 hover:bg-black text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow cursor-pointer flex-shrink-0"
                >
                  Close Bio
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
