"use client";
import React from "react";
import { CiLogout } from "react-icons/ci";
import persian from "@/localization/persian/dashboard/main-page.json";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { removeAccessToken } from "@/redux/slices/dashboard/adminAuthSlice";

interface IProps {}

export default function Header({}: IProps) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(removeAccessToken());
  };
  const pathname = usePathname();
  const getTitle = () => {
    if (pathname === "/dashboard") return persian.mainTitle;
    if (pathname === "/dashboard/products") return persian.products;
    if (pathname === "/dashboard/inventory-price")
      return persian.inventoryAndPrices;
    if (pathname === "/dashboard/orders") return persian.orders;
  };
  return (
    <header
      dir="ltr"
      className="bg-[#ec8c2f] rounded-b-full h-11 shadow-[#ec8c2f] shadow-2xl flex justify-between items-center"
    >
      <CiLogout
        onClick={handleLogout}
        className="text-white text-3xl ml-3 mb-1 transition-all duration-300 hover:text-[#ec8c2f] hover:bg-white rounded-full p-1 hover:scale-110 cursor-pointer"
      />
      <h1 className="font-bold text-2xl">{getTitle()}</h1>
      <div></div>
    </header>
  );
}
