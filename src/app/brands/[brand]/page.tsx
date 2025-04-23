"use client";

import React, { useEffect, useState } from "react";
import { getProductsByBrand } from "@/api/getProductsByBrand";

type Props = {
  params: {
    brand: string;
  };
};

export default function BrandPage({ params }: Props) {
  const [product, setProduct] = useState();

  const brandMap: Record<string, string> = {
    Ford: "فورد",
    Benz: "بنز",
    Bentley: "بنتلی",
    Lamborghini: "لامبورگینی",
    Hummer: "هامر",
    Audi: "آئودی",
  };

  const brandForAPI = brandMap[params.brand];

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
    <div className="p-4">
      <h1 className="text-2xl font-bold">ماشین شماره: {params.brand}</h1>
    </div>
  );
}
