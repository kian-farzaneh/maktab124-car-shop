import React from "react";
import Signin from "@/components/shared/Signin";
export default function AdminSigninPage() {
  return (
    <div className="w-full h-screen bg-[#EC8C2F] p-2">
        <Signin validationType="admin" />
    </div>
  );
}
