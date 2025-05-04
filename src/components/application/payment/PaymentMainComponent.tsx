"use client";
import { postOrder } from "@/api/postOrder";
import Button from "@/components/base/Button";
import { convertToPersianNumbers } from "@/utils/convertToPersianNumbers/convertToPersianNumbers";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface PaymentProps {
  userData: any;
  cartData: any[];
  totalPrice: number;
}

export default function PaymentMainComponent({
  userData,
  cartData,
  totalPrice,
}: PaymentProps) {
  const [finalPrice, setFinalPrice] = useState(totalPrice);

  const router = useRouter();

  const paymentData = {
    userData,
    cartData,
    totalPrice,
  };

  const handlePayment = () => {
    setFinalPrice(0);
    postOrder(paymentData)
      .then((res) => {
        console.log(res);
        router.push("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-full h-screen bg-[url('/header/header.png')] flex justify-center items-center">
      <div className="bg-white flex flex-col justify-center items-center py-3 rounded-2xl">
        <img
          className="w-96"
          src="/payment/credit-card.png"
          alt="credit-card"
        />
        <p>
          <span>مبلغ قابل پرداخت :</span>{" "}
          <span>{convertToPersianNumbers(finalPrice)}</span> <span>$</span>
        </p>
        <div onClick={handlePayment}>
          <Button className="cursor-pointer" content="پرداخت" />
        </div>
      </div>
    </div>
  );
}
