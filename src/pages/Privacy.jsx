import React from 'react'

export default function Privacy() {
  return (
    <div className="py-10">
      <div className="max-w-2xl mx-auto bg-[var(--surface)] rounded-lg p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-[var(--muted)]">
          This is a simple demo blog app. We only store what’s needed to let you log in and publish posts.
          If you have questions about your data, contact us at
          {' '}<a className="text-[var(--accent-700)] underline" href="mailto:hello@example.com">hello@example.com</a>.
        </p>
      </div>
    </div>
  )
}
