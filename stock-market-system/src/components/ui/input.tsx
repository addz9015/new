import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  className?: string;
}

export function Input({
  label,
  error,
  className = "",
  id,
  ...props
}: InputProps): React.JSX.Element {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="mb-4">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={inputId}
        className={`
          w-full px-3 py-2 
          border border-gray-300 
          rounded-md 
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          ${error ? "border-red-500" : ""} 
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
