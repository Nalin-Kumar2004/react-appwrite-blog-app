import React from 'react'

export default function Contact() {
  return (
    <div className="py-10">
      <div className="max-w-2xl mx-auto bg-[var(--surface)] rounded-lg p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-4">Contact</h1>
        <p className="text-[var(--muted)] mb-4">
          Have feedback or found an issue? I’d love to hear from you.
        </p>
        <ul className="space-y-2">
          <li>
            Email: <a className="text-[var(--accent-700)] underline" href="mailto:hello@example.com">hello@example.com</a>
          </li>
          <li>
            GitHub: <a className="text-[var(--accent-700)] underline" href="https://github.com/" target="_blank" rel="noreferrer">github.com</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
