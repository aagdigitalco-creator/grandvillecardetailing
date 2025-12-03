export default function WhatToExpect() {
  return (
    <section id="about" className="w-full py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">WHAT TO EXPECT</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Professional Service</h3>
            <p className="text-gray-600 mb-4">
              Our team arrives fully equipped with professional-grade products and equipment. We treat every vehicle
              with the utmost care and attention to detail.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-xl">✓</span>
                <span className="text-gray-700">On-time arrival guaranteed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-xl">✓</span>
                <span className="text-gray-700">Professional-grade products only</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-xl">✓</span>
                <span className="text-gray-700">Satisfaction guaranteed</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Quality Guaranteed</h3>
            <p className="text-gray-600 mb-4">
              With years of experience in the detailing industry, we know exactly what it takes to make your vehicle
              look showroom-ready.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-xl">✓</span>
                <span className="text-gray-700">Expert technicians</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-xl">✓</span>
                <span className="text-gray-700">Premium products & equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-xl">✓</span>
                <span className="text-gray-700">Competitive pricing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-8 md:p-12 rounded-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Granville Car Detailing?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2">🚗 Mobile Service</h4>
              <p className="text-cyan-50">
                We come to you - no need to drop off your vehicle. Service at home or work.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">⭐ Expert Team</h4>
              <p className="text-cyan-50">Certified detailers with years of experience and passion for perfection.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">💎 Premium Products</h4>
              <p className="text-cyan-50">Only the best products to ensure lasting results and protection.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">✨ Satisfaction Guaranteed</h4>
              <p className="text-cyan-50">We stand behind our work with a satisfaction guarantee on all services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
