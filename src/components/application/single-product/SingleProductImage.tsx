import React from "react";

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
}

export default function SingleProductImage({ product }: IProps) {
  return (
    <div className="bg-[url('/header/header.png')] rounded-2xl p-4 mt-3 ml-3">
      <div>
        <img
          className="w-[500px] h-[250px] rounded-2xl"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="flex justify-center gap-4 mt-3">
        <img
          className="w-[112px] h-[65px] rounded-lg"
          src={product.gallery[0]}
          alt={product.name}
        />
        <img
          className="w-[112px] h-[65px] rounded-lg"
          src={product.gallery[1]}
          alt={product.name}
        />
        <img
          className="w-[112px] h-[65px] rounded-lg"
          src={product.gallery[2]}
          alt={product.name}
        />
        <img
          className="w-[112px] h-[65px] rounded-lg"
          src={product.gallery[3]}
          alt={product.name}
        />
      </div>
    </div>
  );
}
