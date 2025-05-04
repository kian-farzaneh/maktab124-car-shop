import { toast } from "react-toastify";

export function checkUserAuthenticated() {
  const token = localStorage.getItem("userAccessToken");
  if (!token) {
    toast.error("لطفاً ابتدا وارد حساب کاربری خود شوید.");
    return false;
  }
  return true;
}