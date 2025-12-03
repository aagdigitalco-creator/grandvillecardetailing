const reviews = [
  {
    name: "John Smith",
    rating: 5,
    text: "Amazing service! My car looks brand new. Highly recommend Granville Car Detailing!",
    vehicle: "BMW 3 Series",
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "The ceramic coating has held up perfectly. Great quality work and professional team.",
    vehicle: "Mercedes-Benz C-Class",
  },
  {
    name: "Mike Davis",
    rating: 5,
    text: "Best detailing service I've had. The attention to detail is incredible.",
    vehicle: "Ford F-150",
  },
  {
    name: "Emily Wilson",
    rating: 5,
    text: "They made my SUV look showroom ready. Excellent service from start to finish!",
    vehicle: "Audi Q5",
  },
]

export default function Reviews() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">CUSTOMER REVIEWS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">{review.text}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.vehicle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
