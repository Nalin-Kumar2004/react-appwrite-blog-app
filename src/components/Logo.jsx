import React from 'react'

// === Copilot: Replace text with SVG logo for branding ===
// You can swap the SVG below with your own logo if desired
function Logo({width = '100px'}) {
  return (
    <svg width={width} height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="30" height="30" rx="8" fill="#2563eb"/>
      <text x="50" y="28" fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="bold" fontSize="22" fill="#2563eb">Blog</text>
    </svg>
  )
}

export default Logo