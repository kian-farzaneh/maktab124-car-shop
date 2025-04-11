import React from "react";
import persian from "@/localization/persian/dashboard/main-page.json";

interface IProps {}

export default function Footer({}: IProps) {
  return (
    <footer
      style={{ boxShadow: "  0 -4px 10px rgba(0, 0, 0, 0.3)" }}
      className="bg-white rounded-t-full h-11 flex justify-center items-center"
    >
      <div className="w-3xl flex justify-center items-center gap-16 text-[#6e6e6e]">
        <button className="hover:text-[#ec8c2f] active:text-[#ec8c2f] transition-colors duration-200 cursor-pointer">{persian.products}</button>
        <button className="hover:text-[#ec8c2f] active:text-[#ec8c2f] transition-colors duration-200 cursor-pointer">{persian.inventoryAndPrices}</button>
        <button className="hover:text-[#ec8c2f] active:text-[#ec8c2f] transition-colors duration-200 cursor-pointer">{persian.orders}</button>
      </div>
    </footer>
  );
}
