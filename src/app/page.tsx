import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-awida-green selection:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-3">
            <div className="relative w-10 h-10 md:w-14 md:h-14">
              <Image 
                src="/nav bar logo.png" 
                alt="AWIDA Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="font-inter font-semibold text-base md:text-lg text-awida-green leading-tight">
                African West Indies<br className="hidden md:block" /> Diaspora Alliance
              </h1>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-base font-medium text-gray-600">
            <Link href="#about" className="hover:text-awida-green transition-colors">About</Link>
            <Link href="#what-we-do" className="hover:text-awida-green transition-colors">What We Do</Link>
            <Link href="#programs" className="hover:text-awida-green transition-colors">Our Programs</Link>
            <Link href="#contact" className="bg-awida-gold text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-all font-semibold shadow-sm hover:shadow-md">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative bg-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
          {/* Floating Background Dots (Inspo Style) */}
          <div className="absolute top-20 left-10 w-3 h-3 bg-awida-gold rounded-full opacity-60"></div>
          <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-awida-red rounded-full opacity-60"></div>
          <div className="absolute top-40 right-1/4 w-2 h-2 bg-awida-green rounded-full opacity-60"></div>
          <div className="absolute bottom-40 right-10 w-5 h-5 bg-blue-500 rounded-full opacity-60"></div>
          <div className="absolute top-1/2 left-[45%] w-2 h-2 bg-awida-gold rounded-full opacity-60"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
              
              {/* Text Content (Left) */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8 lg:-translate-y-24">
                <h2 className="font-inter text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 leading-[1.3] tracking-tight">
                  <span className="block mb-2 md:whitespace-nowrap">Connecting Knowledge,</span>
                  <span className="block text-awida-gold md:whitespace-nowrap">Empowering Economies.</span>
                </h2>
                
                <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  AWIDA is a transatlantic knowledge bridge connecting Africa, the Caribbean, and the West Indies. We advance economic literacy, public health awareness, and policy dialogue within emerging and developing economies.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <Link href="#programs" className="flex items-center justify-center gap-2 bg-awida-green text-white px-8 py-3.5 rounded-full font-medium hover:bg-green-800 transition-all w-full sm:w-auto shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">
                    Learn Policy
                  </Link>
                  <Link href="#about" className="flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-100 px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 hover:text-gray-900 hover:border-gray-200 transition-all w-full sm:w-auto">
                    Our Mission
                  </Link>
                </div>
              </div>

              {/* Image Map (Right) */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative w-full aspect-square max-w-[500px] lg:max-w-[600px] mx-auto lg:-translate-y-16 lg:translate-x-12">
                  <Image 
                    src="/continent.svg" 
                    alt="Africa Continent" 
                    fill 
                    className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  {/* Floating dots close to the map */}
                  <div className="absolute top-10 right-12 w-4 h-4 bg-awida-red rounded-full"></div>
                  <div className="absolute bottom-1/4 -left-4 w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="absolute top-1/2 -right-6 w-2 h-2 bg-awida-green rounded-full"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT / MISSION */}
        <section id="about" className="py-20 md:py-28 px-4 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              
              {/* Left Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-0.5 bg-[#E6B97A]"></div>
                  <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">Who We Are</span>
                </div>
                
                <h2 className="font-inter text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a3b32] leading-[1.2]">
                  A Transatlantic Knowledge Bridge
                </h2>
                
                <div className="text-gray-600 leading-relaxed text-sm md:text-base space-y-4">
                  <p>
                    African West Indies Diaspora Alliance (AWIDA) is a nonprofit educational organization registered in Ghana. We are dedicated to connecting Africa, the Caribbean, and the West Indies.
                  </p>
                  <div>
                    <strong className="text-gray-900 block mb-1">Our Vision</strong>
                    To be the leading transatlantic knowledge bridge fostering an informed, economically empowered, and gender-inclusive diaspora that drives sustainable development.
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1">Our Mission</strong>
                    To promote economic literacy and gender equity through education, public health awareness, and policy dialogue on trade, economic and fiscal policy across our focus regions.
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link href="#programs" className="inline-flex items-center justify-center bg-awida-green text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-green-800 transition-colors">
                    Learn more
                  </Link>
                </div>
              </div>

              {/* Right Image Content */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  {/* Standard img tag to allow external URL without next.config.js modifications */}
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop" 
                    alt="AWIDA Mission" 
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 hover:bg-white transition-all">
                    <svg className="w-6 h-6 text-awida-green ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section id="what-we-do" className="py-20 md:py-28 px-4 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-inter text-3xl md:text-4xl text-awida-green font-bold mb-4">What We Do</h2>
              <div className="h-1 w-20 bg-awida-gold mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-awida-green/10 text-awida-green flex items-center justify-center rounded-lg mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <h3 className="font-inter text-xl font-bold text-gray-900 mb-3">Educational Programs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Educational programs and policy forums.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-awida-gold/10 text-awida-gold flex items-center justify-center rounded-lg mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <h3 className="font-inter text-xl font-bold text-gray-900 mb-3">Leadership Conferences</h3>
                <p className="text-gray-600 leading-relaxed">
                  Seminars and expert lectures.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-awida-red/10 text-awida-red flex items-center justify-center rounded-lg mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <h3 className="font-inter text-xl font-bold text-gray-900 mb-3">Research & Publication</h3>
                <p className="text-gray-600 leading-relaxed">
                  Insights on economic and fiscal policy.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 flex items-center justify-center rounded-lg mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>
                <h3 className="font-inter text-xl font-bold text-gray-900 mb-3">Advocacy for Gender</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gender-inclusive economic policies.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-awida-gold/10 text-awida-gold flex items-center justify-center rounded-lg mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <h3 className="font-inter text-xl font-bold text-gray-900 mb-3">Capacity Building</h3>
                <p className="text-gray-600 leading-relaxed">
                  For diaspora entrepreneurs and policymakers.
                </p>
              </div>
            </div>
            
            {/* Focus Areas Section */}
            <div className="max-w-4xl mx-auto text-center border-t border-gray-200 pt-16">
              <h3 className="font-inter text-2xl font-bold text-gray-900 mb-8">Our Focus Areas</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium shadow-sm">Trade, Economic & Fiscal Policy</span>
                <span className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium shadow-sm">Public Health & Well-being</span>
                <span className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium shadow-sm">Gender Equity & Empowerment</span>
                <span className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium shadow-sm">Sustainable Development</span>
              </div>
            </div>
          </div>
        </section>

        {/* CROSS-CUTTING FOCUS */}
        <section className="py-20 md:py-28 px-4 bg-awida-green text-white text-center">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="font-inter text-3xl md:text-4xl font-bold mb-8">Cross-Cutting Focus</h2>
            <p className="text-lg text-green-50 leading-relaxed">
              Recognizing that sustainable economic growth must be inclusive, AWIDA integrates gender equality into all its programs to ensure women's full economic participation and resilient community development.
            </p>
          </div>
        </section>

        {/* OUR PROGRAMS */}
        <section id="programs" className="py-20 md:py-28 px-4 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h2 className="font-inter text-3xl md:text-4xl text-awida-green font-bold mb-6">Our Programs</h2>
            <div className="inline-block px-6 py-3 bg-gray-100 text-gray-600 rounded-full font-medium text-sm border border-gray-200 shadow-sm">
              Coming Soon
            </div>
            <p className="mt-6 text-gray-600">
              Details on our upcoming educational programming, lectures, and seminars will be published here.
            </p>
          </div>
        </section>

        {/* GOVERNANCE & ACCOUNTABILITY */}
        <section className="py-20 md:py-28 px-4 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-inter text-3xl md:text-4xl text-awida-green font-bold mb-6">Governance & Accountability</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  AWIDA maintains transparent records of all funded activities and reports on program outcomes.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-inter font-bold text-xl text-gray-900 mb-6 border-b pb-4">Leadership & Board</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-bold text-gray-900">[Placeholder Name]</div>
                      <div className="text-sm text-gray-500">[Placeholder Title]</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-bold text-gray-900">[Placeholder Name]</div>
                      <div className="text-sm text-gray-500">[Placeholder Title]</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-bold text-gray-900">[Placeholder Name]</div>
                      <div className="text-sm text-gray-500">[Placeholder Title]</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 md:py-28 px-4 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h2 className="font-inter text-3xl md:text-4xl text-awida-green font-bold mb-12">Contact Us</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 mx-auto bg-gray-50 text-awida-green flex items-center justify-center rounded-full mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Address</h4>
                <p className="text-gray-600">[Placeholder Street Address]<br/>[City, Region], Ghana</p>
              </div>
              
              <div>
                <div className="w-12 h-12 mx-auto bg-gray-50 text-awida-green flex items-center justify-center rounded-full mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Phone</h4>
                <p className="text-gray-600">[+233 XX XXX XXXX]<br/>[+233 XX XXX XXXX]</p>
              </div>

              <div>
                <div className="w-12 h-12 mx-auto bg-gray-50 text-awida-green flex items-center justify-center rounded-full mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                <a href="mailto:[placeholder@awida.org]" className="text-awida-green hover:underline">
                  [placeholder@awida.org]
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 text-sm text-center">
        <div className="container mx-auto px-4 md:px-6">
          <p className="font-semibold text-white mb-2">African West Indies Diaspora Alliance (AWIDA)</p>
          <p className="mb-6">Company Limited by Guarantee. Reg. No. CG028840425</p>
          <div className="h-px w-24 bg-gray-800 mx-auto mb-6"></div>
          <p>&copy; {new Date().getFullYear()} AWIDA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
