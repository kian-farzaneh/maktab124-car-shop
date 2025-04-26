import React from "react";
import persian from "@/localization/persian/application/single-product.json";
import Button from "@/components/base/Button";
import Logo from "@/components/base/Logo";
import { convertToPersianNumbers } from "@/utils/convertToPersianNumbers/convertToPersianNumbers";

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
  onAddToCart: () => void;
}

export default function AddToCartBtn({ product, onAddToCart }: IProps) {
  return (
    <div className="bg-white border border-[#ec8c2f] rounded-3xl h-44 shadow-lg p-5 w-[533px] ml-3 space-y-6 transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Logo />
        <div className="flex flex-col text-right">
          <p className="text-xl font-bold text-green-700">
            {convertToPersianNumbers(product.discountedPrice)}{" "}
            <span className="text-sm font-normal text-gray-700">{persian.dollar}</span>
          </p>
          <p className="text-sm text-gray-600">: مبلغ قابل پرداخت</p>
        </div>
      </div>
      <Button
        content={persian.addToCart}
        onClick={onAddToCart}
        className="w-full bg-[#ec8c2f] hover:bg-[#d17b25] text-white font-bold py-2 px-4 rounded-xl text-lg transition-all duration-200"
      />
    </div>
  );
}
