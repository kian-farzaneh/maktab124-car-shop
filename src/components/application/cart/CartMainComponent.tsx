"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/components/base/Logo";
import CartItem from "@/components/application/cart/CartItem";
import { IoBagCheckOutline } from "react-icons/io5";
import { getUserDetails} from "@/api/getUserDetails";
import { getCartByEmail } from "@/api/getCartByEmail";
import { deleteCartItem2 } from "@/api/deleteCartItem2";
import CheckoutModal from "@/components/application/modals/CheckoutModal";
import { getUser } from "@/api/getUser";

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

export default function CartMainComponent() {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch user email first
        const email = await getUser();
        if (!email) {
          throw new Error("User not authenticated");
        }

        // Fetch user details and cart in parallel
        const [userData, cartData] = await Promise.all([
          getUserDetails(),
          getCartByEmail(email)
        ]);

        setUser(userData);
        setCart(cartData);
      } catch (error) {
        console.error("Error loading cart data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const handleIncrease = (id: string) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: string) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = async (id: string) => {
    try {
      const result = await deleteCartItem2(id);
      if (result.success) {
        setCart(prev => prev.filter(item => item.id !== id));
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const handleCheckout = (data: any) => {
    console.log("Checkout completed:", data);
    // Add your checkout logic here
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#f9f9f9] overflow-y-auto scrollbar-hide">
      {/* Checkout Modal */}
      {showModal && (
        <CheckoutModal
          user={user}
          cart={cart}
          onClose={() => setShowModal(false)}
          onConfirm={handleCheckout}
        />
      )}

      {/* Header */}
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

      {/* Main Content */}
      <div className="p-5 bg-[#f9f9f9] min-h-screen pb-[180px] overflow-y-auto scrollbar-hide">
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">سبد خرید شما خالی است</p>
          </div>
        ) : (
          <div className="grid gap-4 max-w-4xl mx-auto">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}

        {/* Checkout Footer */}
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