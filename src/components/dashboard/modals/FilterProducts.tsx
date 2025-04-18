"use client";

import React, { useState } from "react";

interface FilterMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilter: (filters: any) => void;
}

export const FilterMenu: React.FC<FilterMenuProps> = ({ isOpen, onClose, onApplyFilter }) => {
    const [brand, setBrand] = useState("");
    const [year, setYear] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [status, setStatus] = useState("");
  
    const handleSubmit = () => {
      const filters: any = {};
  
      if (brand) {
        filters.filterKey = "brand";
        filters.filterValue = brand;
      }
      
      if (year) {
        filters.filterKey = "year";
        filters.filterValue = year;
      }
  
      if (minPrice) {
        filters.filterMin = Number(minPrice); 
      }
  
      if (maxPrice) {
        filters.filterMax = Number(maxPrice);
      }
  
      if (status) {
        filters.filterKey = "status";
        filters.filterValue = status;
      }
  
      onApplyFilter(filters);
      onClose();
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="absolute top-32 right-20 bg-white shadow-lg rounded-lg p-4 w-72 z-50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">فیلتر محصولات</h3>
          <button onClick={onClose} className="text-red-500 text-sm">
            ✖
          </button>
        </div>
  
        <div className="flex flex-col gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">نام برند</label>
            <input
              type="text"
              className="w-full border rounded px-2 py-1 text-sm"
              placeholder="مثلاً: KIA"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">سال ساخت</label>
            <input
              type="number"
              className="w-full border rounded px-2 py-1 text-sm"
              placeholder="مثلاً: 2022"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">قیمت از (تومان)</label>
            <input
              type="number"
              className="w-full border rounded px-2 py-1 text-sm"
              placeholder="مثلاً: 10000000"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">قیمت تا (تومان)</label>
            <input
              type="number"
              className="w-full border rounded px-2 py-1 text-sm"
              placeholder="مثلاً: 500000000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">وضعیت</label>
            <select
              className="w-full border rounded px-2 py-1 text-sm"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">همه</option>
              <option value="new">نو</option>
              <option value="used">کارکرده</option>
            </select>
          </div>
  
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white py-1 mt-2 rounded hover:bg-blue-700"
          >
            اعمال فیلتر
          </button>
        </div>
      </div>
    );
  };
  