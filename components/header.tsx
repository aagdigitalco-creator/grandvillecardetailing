"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import CountdownTimer from "./countdown-timer"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <div className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white py-4 px-4 text-center border-b-4 border-cyan-700">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs md:text-sm font-semibold opacity-90 mb-2">EXCLUSIVE LIMITED TIME OFFER</p>
          <p className="text-2xl md:text-4xl font-black mb-2">
            OFFER ENDS IN <CountdownTimer />
          </p>
          <p className="text-sm md:text-base font-semibold">All Prices Have Discount Applied Already</p>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-gray-900">GRANVILLE</h1>
              <p className="text-xs text-gray-600">Car Detailing</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-900 font-medium hover:text-cyan-500 transition">
              HOME
            </a>
            <a href="#services" className="text-gray-900 font-medium hover:text-cyan-500 transition">
              SERVICES
            </a>
            <a href="#about" className="text-gray-900 font-medium hover:text-cyan-500 transition">
              ABOUT
            </a>
            <a href="#contact" className="text-gray-900 font-medium hover:text-cyan-500 transition">
              CONTACT
            </a>
          </nav>

          {/* Book Now Button (Desktop) */}
          <a
            href="#booking"
            className="hidden md:inline-block bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition"
          >
            BOOK NOW
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-900 p-2" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
            <nav className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-gray-900 font-medium hover:text-cyan-500 transition"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </a>
              <a
                href="#services"
                className="text-gray-900 font-medium hover:text-cyan-500 transition"
                onClick={() => setIsOpen(false)}
              >
                SERVICES
              </a>
              <a
                href="#about"
                className="text-gray-900 font-medium hover:text-cyan-500 transition"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </a>
              <a
                href="#contact"
                className="text-gray-900 font-medium hover:text-cyan-500 transition"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </a>
              <a
                href="#booking"
                className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition text-center"
                onClick={() => setIsOpen(false)}
              >
                BOOK NOW
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
