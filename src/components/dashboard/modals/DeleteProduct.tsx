"use client";

import React from "react";
import axios from "axios";

export async function deleteProductInApie(id: string) {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/records/products/${id}`,
    { 
      headers: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        Authorization: `Bearer ${localStorage.getItem('adminAccessToken')}`
      } 
    }
  );
  return res.data;
}

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteProduct: React.FC<IProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative text-right">
        <h2 className="text-xl font-bold text-gray-800 mb-4">حذف محصول</h2>
        <p className="text-gray-700 mb-6">
          آیا از حذف این محصول اطمینان دارید؟
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition"
          >
            انصراف
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
};
