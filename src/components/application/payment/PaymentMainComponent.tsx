"use client";
import { postOrder } from "@/api/postOrder";
import Button from "@/components/base/Button";
import { convertToPersianNumbers } from "@/utils/convertToPersianNumbers/convertToPersianNumbers";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteCartItem } from "@/api/deleteCartItem";

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

  const handlePayment = async () => {
    try {
      const res = await postOrder(paymentData);
      console.log("سفارش ثبت شد:", res);

      for (const item of cartData) {
        await deleteCartItem(item.id);
      }
      console.log("تمام آیتم‌های سبد خرید حذف شدند");

      setFinalPrice(0);
      router.push("/");
    } catch (err) {
      console.error("خطا در پرداخت:", err);
    }
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
