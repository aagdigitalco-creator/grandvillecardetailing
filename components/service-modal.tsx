'use client'

import { X } from 'lucide-react'

export default function ServiceModal({ service, isOpen, onClose, selectedVehicle }) {
  if (!isOpen || !service) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-cyan-500 text-white p-6 flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold">{service.name}</h2>
            <p className="text-cyan-100 mt-1">{service.duration}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:bg-cyan-600 p-2 rounded transition"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included</h3>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-cyan-500 text-xl">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-600">Vehicle Type:</p>
              <p className="font-semibold text-gray-900">{selectedVehicle}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Price:</p>
              <p className="text-3xl font-bold text-cyan-500">${service.currentPrice}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <a 
              href="#booking" 
              className="flex-1 bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition text-center"
            >
              BOOK NOW
            </a>
            <button 
              onClick={onClose}
              className="flex-1 border-2 border-gray-300 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
