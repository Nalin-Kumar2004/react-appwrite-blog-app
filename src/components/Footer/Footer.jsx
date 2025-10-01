import React from 'react'
import { Link } from 'react-router-dom'

// Minimal footer: just four centered links, compact spacing
function Footer() {
  return (
    <footer className="py-4">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-center gap-x-6 text-sm">
          <Link to="/" className="text-[var(--muted)] hover:text-[var(--accent-700)] transition-colors">Home</Link>
          <Link to="/all-posts" className="text-[var(--muted)] hover:text-[var(--accent-700)] transition-colors">All Posts</Link>
          <Link to="/contact" className="text-[var(--muted)] hover:text-[var(--accent-700)] transition-colors">Contact</Link>
          <Link to="/privacy" className="text-[var(--muted)] hover:text-[var(--accent-700)] transition-colors">Privacy</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer