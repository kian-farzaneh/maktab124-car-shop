"use client";

import React from "react";
import {
  validateUsername,
  validatePassword,
} from "@/utils/validations/authValidation";
import Input from "../base/Input";
import Button from "../base/Button";
import persign from "@/localization/persian/signin-signup.json";
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
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/login`,
        {
          email: username,
          password,
        },
        {
          headers: {
            api_key: `${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        }
      );

      const accessToken = response.data.accessToken;

      if (validationType === "admin") {
        dispatch(setAccessToken(accessToken));
        router.push("/admin/dashboard");
      } else {
        localStorage.setItem("userAccessToken", accessToken);
        router.push("/user/profile");
      }
    } catch (err) {
      console.error("Login failed", err);
    }
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
          type={"password"}
        />
        <div onClick={handleSubmit}>
          <Button content={persign.signin} className="mt-3" />
        </div>
      </div>
    </div>
  );
}
