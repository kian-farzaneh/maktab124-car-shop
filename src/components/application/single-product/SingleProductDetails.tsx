import { convertToPersianNumbers } from "@/utils/convertToPersianNumbers/convertToPersianNumbers";
import React, { useState } from "react";

interface IProduct {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  year: string;
  price: string;
  discountedPrice: string;
  discountPercentage: string;
  description: string;
  condition: string;
  fuelType: string;
  gearbox: string;
  seats: string;
  colors: string;
  image: string;
  gallery: string[];
  isAvailable: boolean;
  stock: string;
  views: string;
  ratings: any[];
  comments: any[];
  createdAt: string;
}

interface IProps {
  product: IProduct;
  selectedColor: string | null;
  setSelectedColor: (color: string) => void;
}

export default function SingleProductDetails({ product, selectedColor, setSelectedColor }: IProps) {

  const colors =
    typeof product.colors === "string"
      ? product.colors
        .split("،")
        .map((color) => color.trim())
      : product.colors;


  const colorMap: Record<string, string> = {
    قرمز: "red",
    آبی: "blue",
    سبز: "green",
    مشکی: "black",
    سفید: "white",
    خاکستری: "gray",
    زرد: "yellow",
    نقره‌ای: "#C0C0C0",
    طلایی: "#FFD700",
  };

  return (
    <div
      dir="rtl"
      className="p-6 bg-white rounded-2xl w-[800px] h-full space-y-4 shadow-[#ec8c2f] shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.description}</p>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <span className="font-semibold">برند:</span> {product.brand}
        </div>
        <div>
          <span className="font-semibold">مدل:</span> {product.model}
        </div>
        <div>
          <span className="font-semibold">سال ساخت:</span>{" "}
          {convertToPersianNumbers(product.year)}
        </div>
        <div>
          <span className="font-semibold">گیربکس:</span> {product.gearbox}
        </div>
        <div>
          <span className="font-semibold">نوع سوخت:</span> {product.fuelType}
        </div>
        <div>
          <span className="font-semibold">شرایط:</span> {product.condition}
        </div>
        <div>
          <span className="font-semibold">صندلی:</span>{" "}
          {convertToPersianNumbers(product.seats)}
        </div>
        <div>
          <span className="font-semibold">موجودی:</span>{" "}
          {convertToPersianNumbers(product.stock)}
        </div>
        <div className="col-span-2">
          <span className="font-semibold">رنگ‌ها:</span>

          <div className="flex gap-2 mt-2">
            {colors.map((color: string, index: number) => {
              const backgroundColor = colorMap[color] || "gray";
              return (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full cursor-pointer border-2 transition-all ${selectedColor === color
                      ? "border-black scale-110"
                      : "border-gray-300"
                    }`}
                  style={{ backgroundColor }}
                  onClick={() => setSelectedColor(color)}
                  title={color}
                />
              );
            })}
          </div>
        </div>

        <div>
          <span className="font-semibold">قیمت:</span>{" "}
          {convertToPersianNumbers(product.price)} تومان
        </div>
        <div>
          <span className="font-semibold">تخفیف:</span>{" "}
          {convertToPersianNumbers(product.discountPercentage)}٪
        </div>
        <div>
          <span className="font-semibold">تاریخ افزودن:</span>{" "}
          {new Date(product.createdAt).toLocaleDateString("fa-IR")}
        </div>
        <div>
          <span className="font-semibold">وضعیت:</span>{" "}
          {product.isAvailable ? (
            <span className="text-green-600 font-bold">موجود</span>
          ) : (
            <span className="text-red-600 font-bold">ناموجود</span>
          )}
        </div>
      </div>
    </div>
  );
}
