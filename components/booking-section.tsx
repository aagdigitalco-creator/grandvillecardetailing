export default function BookingSection() {
  return (
    <section id="booking" className="w-full py-12 md:py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          BOOK YOUR APPOINTMENT
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Schedule your detailing service today
        </p>

        {/* Calendly Embed */}
        <div className="w-full h-[800px] md:h-screen rounded-lg overflow-hidden bg-white">
          <iframe
            src="https://calendly.com/elite_shine_auto_detailing/car-detailing?month=2025-10&date=2025-10-24"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Booking Calendar"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
