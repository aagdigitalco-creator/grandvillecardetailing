"use client"

const services = [
  {
    id: 1,
    name: "EXTERIOR WASH",
    duration: "1 HR",
    description: "Complete exterior wash with premium soaps and protection products",
    basePrice: 139,
    image: "/car-being-washed-exterior-professional-auto-detail.jpg",
    features: ["Hand wash", "Wheel cleaning", "Tire shine", "Protection spray"],
  },
  {
    id: 2,
    name: "INTERIOR CLEANING",
    duration: "1 - 2 HRS",
    description: "Deep interior cleaning including vacuuming, sanitizing, and detailing",
    basePrice: 149,
    image: "/professional-interior-car-detailing-vacuuming-seat.jpg",
    features: ["Vacuum & brush", "Interior wipe down", "Odor elimination", "Sanitize surfaces"],
  },
  {
    id: 3,
    name: "FULL DETAIL PACKAGE",
    duration: "2 - 3 HRS",
    description: "Complete exterior and interior detailing for a showroom finish",
    basePrice: 199,
    image: "/car-polishing-detailing-professional-finish.jpg",
    features: ["Exterior wash", "Interior clean", "Tire shine", "Final inspection"],
  },
]

export default function Services({ selectedVehicle, onLearnMore }) {
  const getPriceMultiplier = (vehicle) => {
    const multipliers = {
      SUV: 1,
      TRUCK: 1.08,
      "MINI VAN": 1.04,
      "LARGE SUV": 1.17,
    }
    return multipliers[vehicle] || 1
  }

  const getPrice = (basePrice) => {
    const multiplier = getPriceMultiplier(selectedVehicle)
    return Math.round(basePrice * multiplier)
  }

  return (
    <section id="services" className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">OUR PACKAGES</h2>
          <p className="text-center text-gray-700 font-semibold mt-3 mb-2">30% OFF FOR LIMITED TIME</p>
          <p className="text-center text-cyan-500 font-medium text-sm">
            Pricing for: <span className="text-gray-900">{selectedVehicle}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-cyan-500 transition flex flex-col"
            >
              {/* Service Image */}
              <div className="w-full h-48 bg-gray-100 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                  <p className="text-sm text-cyan-500 font-semibold">{service.duration}</p>
                </div>

                <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>

                <ul className="text-sm text-gray-700 mb-6 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-3xl font-bold text-cyan-500 mb-4">${getPrice(service.basePrice)}</p>
                  <div className="flex gap-3">
                    <a
                      href="#booking"
                      className="flex-1 bg-cyan-500 text-white py-2 rounded font-semibold hover:bg-cyan-600 transition text-center text-sm"
                    >
                      BOOK
                    </a>
                    <button
                      onClick={() => onLearnMore({ ...service, currentPrice: getPrice(service.basePrice) })}
                      className="flex-1 border-2 border-cyan-500 text-cyan-500 py-2 rounded font-semibold hover:bg-cyan-50 transition text-sm"
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
