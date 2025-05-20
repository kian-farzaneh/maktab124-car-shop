"use client"; // ✅ Because we're using useState, useEffect here

import { useEffect, useState } from "react";
import { getProductsByBrand } from "@/api/getProductsByBrand";
import Logo from "@/components/base/Logo";
import ProductCard from "@/components/shared/ProductCard";

type Props = {
  brand: string;
};

type IProduct = {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  discountPercentage: string;
  discountedPrice: string;
  category: string;
  colors: string[];
  stock: string;
  condition: string;
  isAvailable: boolean;
  image: string;
  gallery: string[];
  description: string;
  fuelType: string;
  gearbox: string;
  seats: string;
  views: string;
  ratings: any[];
  comments: any[];
  createdAt: string;
};

export default function BrandClientComponent({ brand }: Props) {
  const [product, setProduct] = useState<IProduct[]>();

  const brandMap: Record<string, string> = {
    Ford: "فورد",
    Benz: "بنز",
    Bentley: "بنتلی",
    Lamborghini: "لامبورگینی",
    Hummer: "هامر",
    Audi: "آئودی",
  };

  const brandForAPI = brandMap[brand];

  useEffect(() => {
    getProductsByBrand(brandForAPI)
      .then((res) => {
        setProduct(res.data.records);
      })
      .catch((err) => {
        console.error("خطا در گرفتن دیتا:", err);
      });
  }, []);

  return (
    <>
      <header
        dir="ltr"
        className="bg-[url('/header/header.png')] bg-cover bg-center h-20 w-full pl-2 flex items-center"
      >
        <Logo />
        <h1 className="ml-[460px] text-4xl font-bold">{brandMap[brand]}</h1>
      </header>
      <div
        className="grid grid-cols-3 gap-y-12 h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide pl-10 py-5"
        dir="ltr"
      >
        {product?.map((item) => (
          <div key={item.id}>
            <ProductCard
              id={item.id}
              price={Number(item.discountedPrice)}
              model={item.model}
              brand={item.brand}
              gearbox={item.gearbox}
              fuelType={item.fuelType}
              seats={Number(item.seats)}
              image={item.image}
              name={item.name}
            />
          </div>
        ))}
      </div>
    </>
  );
}
