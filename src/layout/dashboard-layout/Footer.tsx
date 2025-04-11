"use client";
import React from "react";
import persian from "@/localization/persian/dashboard/main-page.json";
import { useRouter } from "next/navigation";

interface IProps {}

export default function Footer({}: IProps) {
  const router = useRouter();

  return (
    <footer
      style={{ boxShadow: "  0 -4px 10px rgba(0, 0, 0, 0.3)" }}
      className="bg-white rounded-t-full h-11 flex justify-center items-center"
    >
      <div className="w-3xl flex justify-center items-center gap-16 text-[#6e6e6e]">
        <button
          onClick={() => {
            router.push("/dashboard");
          }}
          className="hover:text-[#ec8c2f] active:text-[#ec8c2f] transition-colors duration-200 cursor-pointer"
        >
          {persian.dashboard}
        </button>

        <button
          onClick={() => {
            router.push("/dashboard/products");
          }}
          className="hover:text-[#ec8c2f] active:text-[#ec8c2f] transition-colors duration-200 cursor-pointer"
        >
          {persian.products}
        </button>
        <button
          onClick={() => {
            router.push("/dashboard/inventory-price");
          }}
          className="hover:text-[#ec8c2f] active:text-[#ec8c2f] transition-colors duration-200 cursor-pointer"
        >
          {persian.inventoryAndPrices}
        </button>
        <button
          onClick={() => {
            router.push("/dashboard/orders");
          }}
          className="hover:text-[#ec8c2f] active:text-[#ec8c2f] transition-colors duration-200 cursor-pointer"
        >
          {persian.orders}
        </button>
      </div>
    </footer>
  );
}
