export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">⚡</span>
              </div>
              <div>
                <h3 className="font-bold text-white">GRANVILLE</h3>
                <p className="text-xs text-gray-400">Car Detailing</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Professional mobile auto detailing services delivered to your location with premium products and expert
              techniques.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-cyan-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-cyan-500 transition">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">CONTACT</h4>
            <div className="space-y-2 text-sm">
              <p>📱 Available for booking</p>
              <p>🕐 Monday - Sunday</p>
              <p className="text-gray-400">Available upon request</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">© 2025 Granville Car Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
