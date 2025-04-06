"use client";

import React, { useState } from "react";
import persign from "@/localization/persian/signin-signup.json";
import Input from "../base/Input";
import Button from "../base/Button";
import {
  validateUsername,
  validatePassword,
} from "@/utils/validations/authValidation";

interface SigninProps {
  validationType: "admin" | "user";
}

export default function Signin({ validationType }: SigninProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameError(validateUsername(value, validationType));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  return (
    <div className="flex flex-col justify-center gap-20 pt-9 shadow-black shadow-2xl rounded-b-2xl">
      <img src="/logo/LOGO.png" alt="logo" />
      <div className="bg-[#F1B77D] flex flex-col items-center gap-4 text-[#5c5c5c] py-5 rounded-2xl">
        <Input
          label={persign.username}
          placeholder={persign.enterYourUsername}
          value={username}
          onChange={handleUsernameChange}
          error={usernameError}
        />
        <Input
          label={persign.password}
          placeholder={persign.enterYourPassword}
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
        />
        <Button content={persign.signin} className="mt-3" />
      </div>
    </div>
  );
}
