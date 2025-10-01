import React from 'react'

// === Copilot: Using custom logo.png from public folder ===
// This replaces the SVG with the user's custom logo image
function Logo({width = '100px'}) {
  return (
    <img 
      src="/logo.png" 
      alt="Blog Logo" 
      style={{ width: width, height: 'auto' }}
      className="object-contain"
    />
  )
}

export default Logo