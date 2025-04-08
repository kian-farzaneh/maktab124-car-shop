import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'
import { FiHeart, FiHome } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer p-4 flex justify-center items-center gap-8 w-full h-auto rounded-t-4xl shadow-black shadow-2xl drop-shadow-lg">
    <div className="flex flex-col justify-center items-center gap-1 hover:text-[#ec8c2f] active:text-[#ec8c2f] transition-colors duration-200">
      <FiHome strokeWidth={1} className="w-[30px] h-[30px]" />
      <p>Home</p>
    </div>
    <div className="flex flex-col justify-center items-center gap-1 hover:text-[#ec8c2f] active:text-[#ec8c2f] transition-colors duration-200">
      <CiSearch className="w-[30px] h-[30px]" />
      <p>Search</p>
    </div>
    <div className="flex flex-col justify-center items-center gap-1 hover:text-[#ec8c2f] active:text-[#ec8c2f] transition-colors duration-200">
      <FiHeart strokeWidth={1} className="w-[30px] h-[30px]" />
      <p>Favorite</p>
    </div>
    <div className="flex flex-col justify-center items-center gap-1 hover:text-[#ec8c2f] active:text-[#ec8c2f] transition-colors duration-200">
      <CgProfile className="w-[30px] h-[30px]" />
      <p>Profile</p>
    </div>
  </footer>

  )
}
