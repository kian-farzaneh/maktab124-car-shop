export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,}$/;
export const englishOnlyRegex = /^[a-zA-Z]+$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
import persign from "@/localization/persian/signin-signup.json";

export const validateUsername = (
  value: string,
  type: "admin" | "user"
): string => {
  if (type === "admin") {
    return englishOnlyRegex.test(value) ? "" : persign.adminUsernameError;
  }
  return emailRegex.test(value) ? "" : persign.userUsernameError;
};

export const validatePassword = (value: string): string =>
  passwordRegex.test(value)
    ? ""
    : persign.passwordError;
