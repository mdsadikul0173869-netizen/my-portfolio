// src/app/seo/page.tsx
export default function SEOPage() {
  const services = [
    {
      title: "Technical SEO Audit",
      desc: "Deep analysis of your website's health, speed, and indexing issues.",
      icon: "⚙️"
    },
    {
      title: "Local SEO (Cox's Bazar & Mymensingh)",
      desc: "Dominating local search results for businesses in Bangladesh.",
      icon: "📍"
    },
    {
      title: "On-Page Optimization",
      desc: "Strategic keyword placement and Rank Math optimization for higher rankings.",
      icon: "🚀"
    }
  ];

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-gray-900 mb-6">Results-Driven SEO Services</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Helping businesses rank #1 on Google with advanced technical strategies and content optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* SEO Case Study / Stats */}
        <div className="mt-20 bg-blue-600 rounded-[40px] p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose My SEO Strategy?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black mb-2">100%</div>
              <div className="text-blue-100 text-sm font-bold uppercase">White Hat</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">Rank Math</div>
              <div className="text-blue-100 text-sm font-bold uppercase">Expert</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">2025</div>
              <div className="text-blue-100 text-sm font-bold uppercase">Google Certified</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">Local</div>
              <div className="text-blue-100 text-sm font-bold uppercase">SEO Specialist</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}