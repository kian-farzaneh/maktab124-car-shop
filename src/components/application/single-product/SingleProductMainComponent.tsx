"use client";
import React, { useEffect, useState } from "react";
import { getProuductById } from "@/api/getProductById";
import Logo from "@/components/base/Logo";
import SingleProductImage from "./SingleProductImage";
import SingleProductDetails from "./SingleProductDetails";
import AddToCartBtn from "./AddToCartBtn";

interface IProps {
  id: number;
}

export default function SingleProductMainComponent({ id }: IProps) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null); // 👈 اضافه کردن استیت رنگ انتخاب شده
  const [product, setProduct] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProuductById(Number(id));
      console.log(productData);
      setProduct(productData);
    };

    fetchData();
  }, []);
  const handleAddToCart = () => {
    console.log({
      ...product,
      selectedColor: selectedColor,
    });
  };
  if (!product) return null;
  return (
    <div dir="ltr" className="w-full h-full">
      <header
        dir="ltr"
        className="bg-[url('/header/header.png')] bg-cover bg-center h-20 w-full pt-3 pl-2"
      >
        <Logo />
      </header>
      <div className="flex gap-3">
        <div className="flex flex-col gap-2">
          <SingleProductImage product={product} />
          <AddToCartBtn product={product} onAddToCart={handleAddToCart} />
        </div>
        <div className="pr-5 pt-3">
          <SingleProductDetails
            product={product}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
      </div>
    </div>
  );
}
