"use client";

export const dynamic = "force-dynamic";

import { getCartByEmail } from "@/api/getCartByEmail";
import { getUser } from "@/api/getUser";
import CartMainComponent from "@/components/application/cart/CartMainComponent";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CartPage() {
  const router = useRouter();
  const [cartData, setCartData] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    if (typeof window !== "undefined") {
      const token = localStorage.getItem("userAccessToken");
      if (!token) {
        router.push("/");
        return;
      }
      const fetchUserAndCart = async () => {
        try {
          const email = await getUser();

          if (email) {
            const cart = await getCartByEmail(email);
            setCartData(cart);
            console.log("Cart Data:", cart);
          }
        } catch (err) {
          console.error("Error fetching user/cart:", err);
        }
      };

      fetchUserAndCart();
    }
  }, [router]);

  if (!hasMounted) return null;

  return (
    <>
      <CartMainComponent cartData={cartData} />
    </>
  );
}
