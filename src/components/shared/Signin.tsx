"use client";

import React, { useState } from "react";
import { FaCarAlt } from "react-icons/fa";
import persign from "@/localization/persian/signin-signup.json";
import Input from "../base/Input";
import Button from "../base/Button";

export default function Signin() {
  const [usernameValue, setUsernameValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  return (
    <div className="flex flex-col justify-center gap-20 pt-9 shadow-black shadow-2xl rounded-b-2xl">
      <div className="logo flex items-center justify-center gap-1" dir="ltr">
        <FaCarAlt size={80} />
        <div className="leading-7">
          <p className="text-[30px]">kian motors</p>
          <p className="text-[15px]">you trusted vehicle kian motors</p>
        </div>
      </div>
      <div className="bg-[#F1B77D] flex flex-col items-center gap-4 text-[#5c5c5c] py-5 rounded-2xl">
        <Input
          label={persign.username}
          placeholder={persign.enterYourUsername}
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.target.value)}
        />
        <Input
          label={persign.password}
          placeholder={persign.enterYourPassword}
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <Button content={persign.signin} className="mt-3" />
      </div>
    </div>
  );
}
