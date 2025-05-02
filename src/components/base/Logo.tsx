import React from 'react'

interface LogoProps {
  className?: string;
}

export default function Logo({className}:LogoProps) {
  return (
    <span className={`flex justify-center items-center py-2 rounded-3xl bg-white w-36 ${className}`}>
        <img src="/logo/LOGO.png" alt="logo" className="w-30" />
    </span>
  )
}
