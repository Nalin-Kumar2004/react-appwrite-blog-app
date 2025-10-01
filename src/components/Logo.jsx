import React from 'react'

// === Copilot: Using custom logo.png with better visibility sizing ===
// Increased size for better visibility across header, footer, and forms
function Logo({width = '120px'}) {
  return (
    <img 
      src="/logo.png" 
      alt="Blog Logo" 
      style={{ 
        width: width, 
        height: '60px',
        objectFit: 'contain'
      }}
      className="object-contain"
    />
  )
}

export default Logo