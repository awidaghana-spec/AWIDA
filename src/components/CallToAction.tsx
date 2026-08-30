import Link from 'next/link';
import FadeUp from './FadeUp';

export default function CallToAction() {
  return (
    <section className="py-24 px-4 bg-white relative z-10">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="bg-[#0b3820] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          
          <div className="relative z-10">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Ready to make a difference?</h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                Discover how your unique skills and background can help strengthen economic and cultural ties across the West African diaspora.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-[#dcb75d] hover:bg-[#c9a652] text-[#0b3820] font-semibold py-3 px-8 rounded-full transition-all text-center">
                  Get Involved
                </Link>
                <Link href="/about" className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold py-3 px-8 rounded-full transition-all text-center">
                  Read Our Story
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
