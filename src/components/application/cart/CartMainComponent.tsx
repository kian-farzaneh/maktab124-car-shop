"use client";
import React, { useEffect, useState } from "react";
import {} from "react";
import Logo from "@/components/base/Logo";
import CartItem from "@/components/application/cart/CartItem";
import { IoBagCheckOutline } from "react-icons/io5";
import { getUserDetails } from "@/api/getUserDetails";
import { useRouter } from "next/navigation";
import CheckoutModal from "@/components/application/modals/CheckoutModal";
import { deleteCartItem2 } from "@/api/deleteCartItem2";

interface CartItemType {
  id: string;
  productId: string;
  name: string;
  image: string;
  selectedColor: string;
  quantity: number;
  discountedPrice: number;
  isAvailable: boolean;
  createdAt: string;
  user: string;
}

interface Props {
  cartData: CartItemType[] | null;
}

export default function CartMainComponent({ cartData }: Props) {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (cartData) {
      setCart(cartData);
    }
  }, [cartData]);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserDetails();
      console.log("User Details:", userData);
      setUser(userData);
    };

    fetchUser();
  }, []);

  const increase = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const remove = async (id: string) => {
    try {
      const result = await deleteCartItem2(id);
      if (result.success) {
        console.log("Item deleted successfully:", id); 
        // اینجا لیست cart رو به‌روزرسانی می‌کنیم
        setCart((prev) => prev.filter((item) => item.id !== id)); 
      } else {
        console.error("Failed to delete item:", result.message); 
      }
    } catch (error) {
      console.error("Error deleting item:", error); 
    }
  };
  

  const totalPrice = cart.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  const handleConfirmCheckout = (data: any) => {
    console.log("Final Checkout Data:", data);
  };

  return (
    <div className="bg-[#f9f9f9] overflow-y-auto scrollbar-hide">
      {showModal && (
        <CheckoutModal
          user={user}
          cart={cart}
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirmCheckout}
        />
      )}
      <header
        dir="ltr"
        className="rounded-b-full bg-[url('/header/header.png')] bg-cover bg-center h-20 w-full pt-3 pl-2 bg-white/80 flex justify-center items-center"
      >
        <div className="flex justify-between items-center w-full max-w-7xl pb-2">
          <Logo />
          <h2 className="text-black mr-28 font-bold text-4xl">سبد خرید</h2>
          <p></p>
        </div>
      </header>

      <div className="p-5 bg-[#f9f9f9] min-h-screen pb-[180px] overflow-y-auto scrollbar-hide">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">سبد خرید شما خالی است.</p>
        ) : (
          <div className="grid gap-4 max-w-4xl mx-auto">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={increase}
                onDecrease={decrease}
                onRemove={remove}
              />
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="rounded-t-full fixed bottom-0 left-0 w-full backdrop-blur-md bg-white/80 border-t border-gray-200 shadow-[0_-4px_30px_rgba(0,0,0,0.35)] p-5 z-50">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-semibold text-gray-700">
                  مبلغ قابل پرداخت:
                </span>
                <span className="text-2xl font-bold text-[#ec8c2f] drop-shadow">
                  <span className="text-base mx-1">$</span>
                  {totalPrice.toLocaleString()}
                </span>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="flex items-center justify-center gap-2 px-10 py-3 bg-gradient-to-l from-[#ec8c2f] to-[#e07e1f] text-white text-lg sm:text-xl font-bold rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.6)] hover:scale-[1.03] transition-all duration-300 ease-in-out"
              >
                <IoBagCheckOutline size={30} />
                ادامه پرداخت
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
