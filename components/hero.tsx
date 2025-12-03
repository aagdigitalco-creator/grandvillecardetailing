"use client"

export default function Hero() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="w-full text-white py-12 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/mobile-auto-detailing-professional-background.jpg")' }}
      ></div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center justify-center min-h-96 md:min-h-screen">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">MOBILE AUTO DETAILING</h1>
          <p className="text-lg md:text-2xl text-gray-200 text-balance mb-6">
            Professional detailing services delivered to your location
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 text-balance max-w-2xl mx-auto">
            We bring professional-grade auto detailing to your driveway with premium products and expert techniques
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-cyan-600 transition text-center"
            >
              BOOK NOW
            </a>
            <button
              onClick={scrollToBooking}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition text-center"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
