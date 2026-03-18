// src/app/page.tsx
import Link from 'next/link';
import { skills } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      
      {/* Header with Let's Talk Button */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-blue-600">SADEKUL.</div>
          <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-widest text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/apps" className="hover:text-blue-600 transition-colors">Apps</Link>
            <Link href="/seo" className="hover:text-blue-600 transition-colors">SEO</Link>
          </div>
          {/* Let's Talk Button - Already linked to #contact */}
          <Link 
            href="#contact" 
            className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Let's Talk
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] pt-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
            SEO Strategy Meets <br /> 
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
              Modern Development
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-500 mb-12 font-medium">
            B.A. Graduate & Google Ads Certified Expert. <br/> 
            Helping brands rank #1 and build high-performance Next.js apps.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* UPDATED: Hero Button now links to #contact */}
            <Link 
              href="#contact" 
              className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all shadow-2xl"
            >
              Start Your Project
            </Link>
            <Link href="/apps" className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-900 font-bold rounded-2xl hover:border-blue-600 transition-all">
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-20 text-center">Core <span className="text-blue-600">Expertise.</span></h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {/* SEO Card */}
            <div className="group bg-white p-10 rounded-4xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg">S</span> SEO
              </h3>
              <ul className="space-y-4">
                {skills.seo.map(skill => (
                  <li key={skill} className="flex items-center font-bold text-gray-500 group-hover:text-gray-900">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg> {skill}
                  </li>
                ))}
              </ul>
            </div>
            {/* Development Card */}
            <div className="group bg-white p-10 rounded-4xl shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center text-lg">D</span> Development
              </h3>
              <ul className="space-y-4">
                {skills.development.map(skill => (
                  <li key={skill} className="flex items-center font-bold text-gray-500 group-hover:text-gray-900">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg> {skill}
                  </li>
                ))}
              </ul>
            </div>
            {/* Security Card */}
            <div className="group bg-white p-10 rounded-4xl shadow-sm border border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center text-lg">S</span> Security
              </h3>
              <ul className="space-y-4">
                {skills.security.map(skill => (
                  <li key={skill} className="flex items-center font-bold text-gray-500 group-hover:text-gray-900">
                    <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg> {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact Section */}
      <section id="contact" className="py-32 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[48px] p-8 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#2563eb,transparent_40%)] opacity-30"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Start Your Project <br/> With an Expert.</h2>
                <p className="text-gray-400 text-lg mb-8 font-medium">
                  Ready to dominate your niche? Let's discuss your SEO strategy or build your next SaaS platform.
                </p>
                <div className="space-y-4">
                  <p className="text-white font-bold flex items-center gap-3"><span>📧</span> mdsadikul0173869@gmail.com</p>
                  <p className="text-white font-bold flex items-center gap-3"><span>📍</span> Mymensingh / Cox's Bazar, BD</p>
                </div>
              </div>

              {/* Contact Form */}
              <form action="https://api.web3forms.com/submit" method="POST" className="bg-white/5 backdrop-blur-xl p-8 rounded-4xl border border-white/10 shadow-2xl">
                <input type="hidden" name="access_key" value="ee08998c-2aff-424a-8ebc-a0a64aee3a21" />
                <div className="space-y-4">
                  <input type="text" name="name" placeholder="Full Name" required className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  <input type="email" name="email" placeholder="Email Address" required className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  <textarea name="message" placeholder="Project Details" rows={4} required className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"></textarea>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl transition-all active:scale-95 shadow-xl">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">© 2026 Crafted by a Professional Dev & SEO</p>
      </footer>
    </main>
  );
}