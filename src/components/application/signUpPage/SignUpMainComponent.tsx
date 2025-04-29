"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import {
  validateUsername,
  validatePassword,
  validateName,
  validateLastName,
  validatePhoneNumber,
} from "@/utils/validations/authValidation";
import { toast } from "react-toastify";
import { signUpUser } from "@/api/signupUser";

export default function SignUpMainComponent() {
  const router = useRouter();

  // name
  const [name, setName] = useState<any>("");
  const [nameError, setNameError] = useState<any>("");
  const handleNameChange = (e: any) => {
    const value = e.target.value;
    setName(value);
    setNameError(validateName(value));
  };
  // name

  // lastName
  const [lastName, setLastName] = useState<any>("");
  const [lastNameError, setLastNameError] = useState<any>("");
  const handleLastNameChange = (e: any) => {
    const value = e.target.value;
    setLastName(value);
    setLastNameError(validateLastName(value));
  };
  // lastName

  // phoneNumber
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [phoneNumberError, setPhoneNumberError] = useState<any>("");
  const handlePhoneNumberChange = (e: any) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setPhoneNumberError(validatePhoneNumber(value));
  };
  // phoneNumber

  // email
  const [email, setEmail] = useState<any>("");
  const [emailError, setEmailError] = useState<any>("");
  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateUsername(value, "user"));
  };
  // email

  // password
  const [password, setPassword] = useState<any>("");
  const [passwordError, setPasswordError] = useState<any>("");
  const handlePasswordlChange = (e: any) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value, "user"));
  };
  // password

  // repeat password
  const [repeatPassword, setRepeatPassword] = useState<any>("");
  const [repeatPasswordasswordError, setRepeatPasswordError] =
    useState<any>("");
  const handleRepeatPasswordlChange = (e: any) => {
    const value = e.target.value;
    setRepeatPassword(value);
    setRepeatPasswordError(validatePassword(value, "user"));
  };
  // repeat password

  // address
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const handleAddressChange = (e: any) => {
    const value = e.target.value;
    setAddress(value);
    if (!value.trim()) {
      setAddressError("آدرس نمی‌تواند خالی باشد");
    } else {
      setAddressError("");
    }
  };
  // address

  // handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!address.trim()) {
      setAddressError("آدرس نمی‌تواند خالی باشد");
    }

    if (
      nameError ||
      lastNameError ||
      phoneNumberError ||
      emailError ||
      passwordError ||
      !address.trim() ||
      repeatPasswordasswordError
    ) {
      toast.error("لطفا همه فیلدها را به درستی پر کنید");
      return;
    }

    if (password !== repeatPassword) {
      setRepeatPasswordError("رمز عبور و تکرار آن باید یکسان باشند");
      toast.error("رمز عبور و تکرار آن باید یکسان باشند");
      return;
    }

    try {
      const token = await signUpUser({
        name,
        lastName,
        phoneNumber: Number(phoneNumber),
        email,
        password,
        address,
      });
      toast.success("ثبت‌نام با موفقیت انجام شد!");
      console.log("Access token:", token);
      router.push("/user-signin");
    } catch (error) {
      toast.error("ثبت‌نام با خطا مواجه شد");
      console.error(error);
    }
  };
  // handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit// handle submit

  return (
    <div className="w-[500px] min-h-[700px] mx-auto my-5 flex flex-col bg-white justify-center gap-10 pt-9 shadow-black shadow-2xl rounded-2xl">
      <img src="/logo/LOGO.png" alt="logo" />
      <div className="bg-[#f3a557] flex flex-col items-center gap-4 text-[#5c5c5c] py-5 rounded-2xl">
        <Input
          label="نام"
          placeholder="لطفا نام خود را وارد نمائید"
          value={name}
          onChange={handleNameChange}
          error={nameError}
        />
        <Input
          label="نام خانوادگی"
          placeholder="نام خانوادگی خود را وارد نمائید"
          value={lastName}
          onChange={handleLastNameChange}
          error={lastNameError}
        />
        <Input
          label="شماره تماس"
          placeholder="شماره تماس خود را وارد کنید"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          error={phoneNumberError}
        />
        <Input
          label="ایمیل"
          placeholder="ایمیل خود را وارد کنید"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
        />
        <Input
          label="رمز عبور"
          placeholder="رمز عبور خود را وارد کنید"
          value={password}
          onChange={handlePasswordlChange}
          error={passwordError}
        />
        <Input
          label="تکرار رمز عبور"
          placeholder="رمز عبور را مجددا وارد کنید"
          value={repeatPassword}
          onChange={handleRepeatPasswordlChange}
          error={repeatPasswordasswordError}
        />
        <label className="flex flex-col w-full px-24">
          <span>آدرس</span>
          <textarea
            className="bg-white rounded-xl h-24 p-4"
            name="address"
            value={address}
            onChange={handleAddressChange}
          ></textarea>
          {addressError && (
            <span className="text-red-600 text-sm mt-1">{addressError}</span>
          )}
        </label>
        <div onClick={handleSubmit}>
          <Button content="ثبت نام" className="mt-3" />
        </div>
      </div>
    </div>
  );
}
