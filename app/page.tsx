'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import VehicleSelector from '@/components/vehicle-selector'
import Services from '@/components/services'
import WhatToExpect from '@/components/what-to-expect'
import Reviews from '@/components/reviews'
import BookingSection from '@/components/booking-section'
import Footer from '@/components/footer'
import ServiceModal from '@/components/service-modal'

export default function Home() {
  const [selectedVehicle, setSelectedVehicle] = useState('CAR')
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleServiceModal = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  return (
    <main className="w-full">
      <Header />
      <Hero />
      <VehicleSelector selectedVehicle={selectedVehicle} onSelectVehicle={setSelectedVehicle} />
      <Services selectedVehicle={selectedVehicle} onLearnMore={handleServiceModal} />
      <WhatToExpect />
      <Reviews />
      <BookingSection />
      <Footer />
      
      {isModalOpen && (
        <ServiceModal 
          service={selectedService} 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedVehicle={selectedVehicle}
        />
      )}
    </main>
  )
}
