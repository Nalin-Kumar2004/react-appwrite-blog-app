import React from 'react'

// === Copilot: Using custom logo.png with professional sizing ===
// Balanced size for professional appearance across header and forms
function Logo({width = '130px'}) {
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