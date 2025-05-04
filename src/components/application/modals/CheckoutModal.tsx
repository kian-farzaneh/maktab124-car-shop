// components/application/cart/CheckoutModal.tsx
"use client";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setCheckoutData } from "@/redux/slices/application/checkoutSlice";
import { useRouter } from "next/navigation";

interface Props {
  user: any;
  cart: any[];
  onClose: () => void;
  onConfirm: (data: any) => void;
}

export default function CheckoutModal({
  user,
  cart,
  onClose,
  onConfirm,
}: Props) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    address: user?.address || "",
    postalCode: "",
    job: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const totalPrice = cart.reduce(
      (total, item) => total + item.discountedPrice * item.quantity,
      0
    );
    dispatch(
      setCheckoutData({
        userData: formData,
        cartData: cart,
        totalPrice,
      })
    );
    onConfirm({
      userData: formData,
      cartData: cart,
      totalPrice,
    });
    onClose();
    router.push("/payment");
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-51 flex justify-center items-center overflow-auto">
      <div className="bg-white rounded-2xl p-6 w-[95%] max-w-xl relative max-h-[90vh] overflow-y-auto scrollbar-hide">
        <button onClick={onClose} className="absolute top-2 left-2 text-2xl">
          <IoClose />
        </button>

        <div className="grid grid-cols-1 gap-4">
          {[
            { name: "name", label: "نام" },
            { name: "lastName", label: "نام خانوادگی" },
            { name: "email", label: "ایمیل" },
            { name: "phoneNumber", label: "شماره تماس" },
            { name: "address", label: "آدرس" },
            { name: "postalCode", label: "کد پستی" },
            { name: "job", label: "شغل" },
          ].map(({ name, label }) => (
            <div key={name} className="flex flex-col text-right">
              <label htmlFor={name} className="mb-1 text-gray-700 font-medium">
                {label}
              </label>
              <input
                id={name}
                type="text"
                name={name}
                placeholder={label}
                value={(formData as any)[name]}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="cursor-pointer mt-6 w-full py-3 bg-[#ec8c2f] text-white font-bold rounded-full hover:bg-[#e07e1f] transition"
        >
          نهایی کردن خرید
        </button>
      </div>
    </div>
  );
}
