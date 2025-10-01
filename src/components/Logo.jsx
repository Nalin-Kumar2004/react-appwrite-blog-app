import React from 'react'

// === Copilot: Using custom logo.png with maximum visibility sizing ===
// Large size for excellent visibility across header, footer, and forms
function Logo({width = '200px'}) {
  return (
    <img 
      src="/logo.png" 
      alt="Blog Logo" 
      style={{ 
        width: width, 
        height: '100px',
        objectFit: 'contain'
      }}
      className="object-contain"
    />
  )
}

export default Logo