import React from 'react'

// === Copilot: Using custom logo.png with consistent sizing ===
// Fixed dimensions for uniform appearance across header, footer, and forms
function Logo({width = '80px'}) {
  return (
    <img 
      src="/logo.png" 
      alt="Blog Logo" 
      style={{ 
        width: width, 
        height: '40px',
        objectFit: 'contain'
      }}
      className="object-contain"
    />
  )
}

export default Logo