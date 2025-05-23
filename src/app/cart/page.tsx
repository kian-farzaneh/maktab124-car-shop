"use client"; 

export const dynamic = 'force-dynamic';

import { getCartByEmail } from "@/api/getCartByEmail";
import { getUser } from "@/api/getUser";
import CartMainComponent from "@/components/application/cart/CartMainComponent";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CartPage() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false); 

  useEffect(() => {
    setIsReady(true);
    
    const token = typeof window !== 'undefined' 
      ? localStorage.getItem("userAccessToken")
      : null;
      
    if (!token) {
      router.push("/");
      return;
    }
  }, [router]);

  if (!isReady) return null;

  return <ClientCartPage />;
}

function ClientCartPage() {
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = await getUser();
        if (email) {
          const cart = await getCartByEmail(email);
          setCartData(cart);
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, []);

  return <CartMainComponent cartData={cartData} />;
}