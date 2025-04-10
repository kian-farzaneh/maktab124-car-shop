import React from "react";

interface Iprops {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: "text" | "password" | "email" | "number";
}

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
}: Iprops) {
  return (
    <div className="flex flex-col gap-1 w-80">
      <label htmlFor="username">{label}</label>
      <input
        className={`bg-white p-3 rounded-xl border ${
          error ? "border-red-500" : "border-transparent"
        }`}
        type={type}
        name="username"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}
