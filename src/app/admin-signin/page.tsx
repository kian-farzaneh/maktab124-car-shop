'use client'

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Signin from "@/components/shared/Signin";

export default function AdminSigninPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminAccessToken");
    if (token) {
      router.replace("/dashboard");
    }
  }, []);

  return (
    <div className="w-full h-screen bg-[url('/header/header.png')] p-2">
      <Signin validationType="admin" />
    </div>
  );
}
