'use client'
import Footer from "@/layout/dashboard-layout/Footer";
import Header from "@/layout/dashboard-layout/Header";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminAccessToken");
    if (!token) {
      router.replace('/admin-signin')
    }
  }, []);

  return (
    <div className="w-full h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="overflow-auto">{children}</main>
      <Footer />
    </div>
  );
}
