import persign from "@/localization/persian/shared/signin-signup.json";

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const englishOnlyRegex = /^[a-zA-Z]+$/;
export const onlyNumbersRegex = /^[0-9]+$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
export const nameAndLastNameRegex = /^[a-zA-Zآ-ی]+$/;
export const phoneNumberRegex = /^\d+$/;

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

export const validateName = (value: any) => {
  return nameAndLastNameRegex.test(value) ? "" : persign.nameError;
};

export const validateLastName = (value: any) => {
  return nameAndLastNameRegex.test(value) ? "" : persign.lastNameError;
};

export const validatePhoneNumber = (value: any) => {
  return phoneNumberRegex.test(value) ? "" : persign.phoneNumberError;
};
