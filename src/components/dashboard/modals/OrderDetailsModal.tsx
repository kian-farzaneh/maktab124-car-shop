import React from "react";

interface Product {
  name: string;
  quantity: number;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  customerName: string;
  orderDate: string;
  status: string;
  totalAmount: number;
  products: Product[];
}

export default function OrderDetailsModal({
  isOpen,
  onClose,
  customerName,
  orderDate,
  status,
  totalAmount,
  products,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50  flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-lg font-bold mb-4 text-center">جزئیات سفارش</h2>
        <p><strong>نام کاربر:</strong> {customerName}</p>
        <p><strong>تاریخ سفارش:</strong> {orderDate}</p>
        <p><strong>وضعیت:</strong> {status}</p>
        <p><strong>مبلغ:</strong> {totalAmount.toLocaleString("fa-IR")} $</p>

        <p className="mt-4 font-semibold">محصولات:</p>
        <ul className="list-disc list-inside">
          {products.map((p, index) => (
            <li key={index}>{p.name} - تعداد: {p.quantity}</li>
          ))}
        </ul>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            بستن
          </button>
        </div>
      </div>
    </div>
  );
}
