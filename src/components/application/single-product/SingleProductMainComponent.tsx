"use client";
import React, { useEffect, useState } from "react";
import { getProuductById } from "@/api/getProductById";
import Logo from "@/components/base/Logo";
import SingleProductImage from "./SingleProductImage";
import SingleProductDetails from "./SingleProductDetails";
import AddToCartBtn from "./AddToCartBtn";
import { getUser } from "@/api/getUser";
import { addProductToCart } from "@/api/addProductToCart";
import { toast } from "react-toastify";

interface IProps {
  id: number;
}

export default function SingleProductMainComponent({ id }: IProps) {
  const [product, setProduct] = useState<any>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [user, setUser] = useState<any>("");
  const [quantity, setQuantity] = useState<any>(1);

  useEffect(() => {
    getUser()
      .then((res) => setUser(res))
      .catch((err) => console.error(err));
    const fetchData = async () => {
      const productData = await getProuductById(Number(id));
      console.log(productData);
      setProduct(productData);
    };

    fetchData();
  }, []);

  const handleAddToCart = async() => {
    const { id, name, isAvailable, image, discountedPrice } = product;
    try{
      await addProductToCart(user,selectedColor,quantity,id,name,isAvailable,image,discountedPrice);
      toast.success("محصول با موفقیت به سبد خرید اضافه شد.");
    }
    catch(err){console.log(err)}
    
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
