import SignUpMainComponent from "@/components/application/signUpPage/SignUpMainComponent";
import React from "react";

export default function SignUpPage() {
  return (
    <div className="w-full min-h-screen bg-[url('/header/header.png')] overflow-y-auto">
      <div className="min-h-full">
        <SignUpMainComponent />
      </div>
    </div>
  );
}
