import FadeUp from '@/components/FadeUp';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* PAGE HEADER */}
      <section className="bg-awida-green text-white py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <FadeUp>
            <h1 className="font-lato text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              We'd love to hear from you. Reach out with any questions, partnership inquiries, or to learn more about our mission.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-20 md:py-24 px-4">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="w-full lg:w-1/3 space-y-10">
              <FadeUp>
                <h2 className="font-lato text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Whether you're looking to get involved or just want to say hello, our team is ready to answer all your questions.
                </p>
              </FadeUp>
              
              <FadeUp delay={0.1}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-50 text-awida-green rounded-full flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
                      <p className="text-gray-600">info@awida.org</p>
                    </div>
                  </div>
                  

                </div>
              </FadeUp>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <FadeUp delay={0.2} className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                      <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-awida-green/50 focus:border-awida-green transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                      <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-awida-green/50 focus:border-awida-green transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-awida-green/50 focus:border-awida-green transition-all" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-awida-green/50 focus:border-awida-green transition-all" placeholder="How can we help you?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-awida-green/50 focus:border-awida-green transition-all resize-none" placeholder="Write your message here..."></textarea>
                  </div>
                  
                  <button type="button" className="w-full bg-awida-green hover:bg-green-800 text-white font-semibold py-4 rounded-xl transition-all">
                    Send Message
                  </button>
                </form>
              </FadeUp>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
