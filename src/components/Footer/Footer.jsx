import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

// === Copilot: Three-column, balanced footer layout ===
// - Logo left, links center, copyright right
// - Responsive: stacks on mobile, columns on desktop
// - Comments for clarity
function Footer() {
  return (
    <footer className="py-8 bg-orange-50 border-t border-orange-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Copilot: Three columns for desktop, stacked for mobile */}
        <div className="flex flex-col md:flex-row w-full items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-center md:justify-start mb-4 md:mb-0">
            <Logo width="200px" />
          </div>
          {/* Center: Navigation links */}
          <div className="flex-1 flex justify-center space-x-6 mb-4 md:mb-0">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition">Home</Link>
            <Link to="/all-posts" className="text-gray-600 hover:text-blue-600 font-medium transition">All Posts</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition">Contact</Link>
            <Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600 font-medium transition">Privacy Policy</Link>
          </div>
          {/* Right: Copyright */}
          <div className="flex-1 flex justify-center md:justify-end text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer