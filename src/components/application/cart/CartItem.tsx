import React from "react";

import { IoTrashOutline } from "react-icons/io5";

type CartItemProps = {
  item: {
    id: string;
    name: string;
    image: string;
    discountedPrice: number;
    quantity: number;
    selectedColor: string;
  };
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.25)] p-4 flex items-center gap-4">
      <img
        src={item.image}
        width={140}
        height={140}
        alt={item.name}
        className="rounded-xl object-cover"
      />
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{item.name}</h2>
        <p className="text-sm text-gray-500">رنگ: {item.selectedColor}</p>
        <p className="text-[#ec8c2f] font-bold">
          {item.discountedPrice.toLocaleString()} $
        </p>
        <div className="flex items-center mt-2 gap-2">
          <button
            onClick={() => onDecrease(item.id)}
            className="px-4 py-1 bg-gray-200 rounded-lg text-xl"
          >
            -
          </button>
          <span className="text-lg font-medium">{item.quantity}</span>
          <button
            onClick={() => onIncrease(item.id)}
            className="px-3 py-1 bg-gray-200 rounded-lg text-xl"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        <IoTrashOutline size={24} />
      </button>
    </div>
  );
}
