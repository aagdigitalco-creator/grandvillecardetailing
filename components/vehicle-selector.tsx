"use client"

const vehicles = [
  { name: "SUV", icon: "🚙" },
  { name: "TRUCK", icon: "🚛" },
  { name: "MINI VAN", icon: "🚐" },
  { name: "LARGE SUV", icon: "🚐" },
]

export default function VehicleSelector({ selectedVehicle, onSelectVehicle }) {
  const getPriceMultiplier = (vehicle) => {
    const multipliers = {
      SUV: 1,
      TRUCK: 1.08,
      "MINI VAN": 1.04,
      "LARGE SUV": 1.17,
    }
    return multipliers[vehicle] || 1
  }

  return (
    <section className="w-full py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">SELECT YOUR VEHICLE</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {vehicles.map((vehicle) => (
            <button
              key={vehicle.name}
              onClick={() => onSelectVehicle(vehicle.name)}
              className={`p-6 rounded-lg border-2 transition cursor-pointer flex flex-col items-center justify-center ${
                selectedVehicle === vehicle.name
                  ? "bg-cyan-50 border-cyan-500 shadow-lg"
                  : "bg-white border-gray-200 hover:border-cyan-500 hover:shadow-lg"
              }`}
            >
              <div className="text-4xl md:text-5xl mb-3">{vehicle.icon}</div>
              <h3 className="font-bold text-center text-sm md:text-base text-gray-900">{vehicle.name}</h3>
              {selectedVehicle === vehicle.name && (
                <p className="text-xs text-cyan-500 font-semibold mt-2">
                  +{Math.round((getPriceMultiplier(vehicle.name) - 1) * 100)}%
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
