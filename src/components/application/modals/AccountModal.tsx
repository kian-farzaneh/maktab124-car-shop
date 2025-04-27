"use client";

import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccountModal({ isOpen, onClose }: AccountModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute top-14 right-0 bg-white rounded-3xl shadow-2xl p-6 w-72 z-50"
    >
      <button
        onClick={onClose}
        className="absolute top-3 left-3 text-gray-500 hover:text-red-500 transition"
      >
        <IoClose size={20} />
      </button>

      <h2 className="text-lg font-bold text-center text-[#ec8c2f] mb-4">
        ورود به حساب
      </h2>

      <div className="flex flex-col gap-3">
        <button className="bg-[#ec8c2f] text-white py-2 rounded-xl hover:bg-[#d47a23] transition">
          ورود کاربر
        </button>
        <button className="border border-[#ec8c2f] text-[#ec8c2f] py-2 rounded-xl hover:bg-[#ec8c2f] hover:text-white transition">
          ورود ادمین
        </button>
      </div>
    </motion.div>
  );
}
