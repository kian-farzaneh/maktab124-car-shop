import React from "react";
import { CiLogout } from "react-icons/ci";
import persian from "@/localization/persian/dashboard/main-page.json"

interface IProps {}

export default function Header({}: IProps) {
  return (
    <header
      dir="ltr"
      className="bg-[#ec8c2f] rounded-b-full h-11 shadow-[#ec8c2f] shadow-2xl flex justify-between items-center"
    >
      <CiLogout className="text-white text-3xl ml-3 mb-1 transition-all duration-300 hover:text-[#ec8c2f] hover:bg-white rounded-full p-1 hover:scale-110 cursor-pointer" />
      <h1>{persian.mainTitle}</h1>
      <div></div>
    </header>
  );
}
