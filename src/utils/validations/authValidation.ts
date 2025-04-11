export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const englishOnlyRegex = /^[a-zA-Z]+$/;
export const onlyNumbersRegex = /^[0-9]+$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

import persign from "@/localization/persian/shared/signin-signup.json";


export const validateUsername = (
  value: string,
  type: "admin" | "user"
): string => {
  if (type === "admin") {
    return englishOnlyRegex.test(value) ? "" : persign.adminUsernameError;
  }
  return emailRegex.test(value) ? "" : persign.userUsernameError;
};


export const validatePassword = (
  value: string,
  type: "admin" | "user"
): string => {
  if (type === "admin") {
    return onlyNumbersRegex.test(value) ? "" : persign.adminPasswordError;
  }
  return passwordRegex.test(value) ? "" : persign.userPasswordError;
};
