"use client"
import React from "react";
import PaymentMainComponent from "@/components/application/payment/PaymentMainComponent";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function PaymentPage() {
    const { userData, cartData, totalPrice } = useSelector(
        (state: RootState) => state.checkout
    );
    console.log("پرداخت نهایی:", { userData, cartData, totalPrice });
  return (
    <>
      <PaymentMainComponent />
    </>
  );
}
