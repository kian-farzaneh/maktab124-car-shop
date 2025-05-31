"use client";

import React from "react";
import {
  validateUsername,
  validatePassword,
} from "@/utils/validations/authValidation";
import Input from "../base/Input";
import Button from "../base/Button";
import persign from "@/localization/persian/shared/signin-signup.json";
import axios from "axios";
// Redux
import { useDispatch } from "react-redux";
import { setAccessToken } from "@/redux/slices/dashboard/adminAuthSlice";

// Router (App Router)
import { useRouter } from "next/navigation";

interface SigninProps {
  validationType: "admin" | "user";
}

export default function Signin({ validationType }: SigninProps) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [usernameError, setUsernameError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameError(validateUsername(value, validationType));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value, validationType));
  };

  const handleSubmit = async () => {
    if (usernameError || passwordError || !username || !password) return;

    try {
      const response = await axios.post(`/api/proxy?url=/api/users/login`, {
        email: username,
        password,
      });

      const accessToken = response.data.accessToken;

      if (validationType === "admin") {
        dispatch(setAccessToken(accessToken));
        router.push("/dashboard");
      } else {
        localStorage.setItem("userAccessToken", accessToken);
        router.push("/");
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div className="w-[500px] mx-auto mt-5 flex flex-col bg-white justify-center gap-20 pt-9 shadow-black shadow-2xl rounded-2xl">
      <img src="/logo/LOGO.png" alt="logo" />
      <div className="bg-[#f3a557] flex flex-col items-center gap-4 text-[#5c5c5c] py-5 rounded-2xl">
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
          type={"password"}
        />
        <div onClick={handleSubmit}>
          <Button content={persign.signin} className="mt-3" />
        </div>
      </div>
    </div>
  );
}
