import Signin from "@/components/shared/Signin";
import React from "react";

export default function AdminSignin() {
  return <div className="w-full h-screen bg-[#EC8C2F] p-2">
    <Signin validationType="admin"/>
  </div>;
}
