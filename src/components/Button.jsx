import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "",
    textColor = "",
    className = "",
    ...props
}) {
    return (
        <button
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-150
            ${bgColor || 'bg-[var(--accent)] hover:bg-[var(--accent-600)]'}
            ${textColor || 'text-white'}
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-600)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]
            ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}