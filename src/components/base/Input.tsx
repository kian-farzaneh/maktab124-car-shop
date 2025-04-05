import React from "react";

interface Iprops {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, placeholder, value, onChange }: Iprops) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor="username">{label}</label>
        <input
          className="bg-white w-80 p-3 rounded-xl"
          type="text"
          name="username"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}
