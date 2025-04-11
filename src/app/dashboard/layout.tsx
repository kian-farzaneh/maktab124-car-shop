import Footer from "@/layout/dashboard-layout/Footer";
import Header from "@/layout/dashboard-layout/Header";
import React from "react";

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="overflow-auto">{children}</main>
      <Footer />
    </div>
  );
}
