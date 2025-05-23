"use client";

// Correct export name (changed from dynamicConfig to dynamic)
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';


import nextDynamic from 'next/dynamic';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CartMainComponent = nextDynamic(
  () => import('@/components/application/cart/CartMainComponent'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }
);

export default function CartPage() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
    const token = typeof window !== 'undefined' ? localStorage.getItem("userAccessToken") : null;
    if (!token) {
      router.push("/");
    }
  }, [router]);

  if (!isReady) return null;

  return <CartMainComponent />;
}