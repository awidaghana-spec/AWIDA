import Link from 'next/link';
import FadeUp from './FadeUp';

export default function Footer() {
  return (
    <footer className="bg-[#0b3820] text-gray-200 py-16 px-4 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1 */}
          <div className="space-y-4">
            <FadeUp>
              <h3 className="text-2xl font-bold text-white flex items-center">
                AWIDA
              </h3>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-sm leading-relaxed text-gray-300">
                Empowering the diaspora through education, cultural exchange, and economic cooperation between West Africa and the Caribbean.
              </p>
            </FadeUp>
          </div>
          {/* Col 2 */}
          <div className="space-y-4">
            <FadeUp delay={0.1}>
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            </FadeUp>
            <FadeUp delay={0.2}>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-[#dcb75d] transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-[#dcb75d] transition-colors">What We Do</Link></li>
                <li><Link href="#" className="hover:text-[#dcb75d] transition-colors">Our Programs</Link></li>
              </ul>
            </FadeUp>
          </div>
          {/* Col 3 */}
          <div className="space-y-4">
            <FadeUp delay={0.2}>
              <h4 className="text-lg font-semibold text-white">Resources</h4>
            </FadeUp>
            <FadeUp delay={0.3}>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-[#dcb75d] transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-[#dcb75d] transition-colors">Terms of Service</Link></li>
              </ul>
            </FadeUp>
          </div>
          {/* Col 4 */}
          <div className="space-y-4">
            <FadeUp delay={0.3}>
              <h4 className="text-lg font-semibold text-white">Connect</h4>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="space-y-2 text-sm">
                <p><a href="mailto:info@awida.org" className="hover:text-[#dcb75d] transition-colors">info@awida.org</a></p>
              </div>
            </FadeUp>
          </div>
        </div>
        <FadeUp delay={0.5}>
          <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>African West Indies Diaspora Alliance (AWIDA). Company Limited by Guarantee.</p>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
