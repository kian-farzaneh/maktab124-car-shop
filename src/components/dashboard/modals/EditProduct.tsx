'use client';

import React, { useState } from 'react';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditModal: React.FC<IProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    model: '',
    year: '',
    price: '',
    colors: '',
    stock: '',
    condition: '',
    image: '',
    description: '',
    fuelType: '',
    gearbox: '',
    seats: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === 'image' && files && files[0]) {
      const file = files[0];
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Edit Submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-red-500 text-2xl font-bold transition"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">ویرایش محصول</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 text-right">
          <input name="name" onChange={handleChange} value={formData.name} placeholder="نام ماشین" className="border border-gray-300 p-3 rounded-lg" />
          <input name="brand" onChange={handleChange} value={formData.brand} placeholder="برند" className="border border-gray-300 p-3 rounded-lg" />
          <input name="model" onChange={handleChange} value={formData.model} placeholder="مدل" className="border border-gray-300 p-3 rounded-lg" />
          <input name="year" onChange={handleChange} value={formData.year} placeholder="سال ساخت" className="border border-gray-300 p-3 rounded-lg" />
          <input name="price" onChange={handleChange} value={formData.price} placeholder="قیمت" className="border border-gray-300 p-3 rounded-lg" />
          <input name="colors" onChange={handleChange} value={formData.colors} placeholder="رنگ‌ها" className="border border-gray-300 p-3 rounded-lg" />
          <input name="stock" onChange={handleChange} value={formData.stock} placeholder="تعداد موجود" className="border border-gray-300 p-3 rounded-lg" />
          <input name="condition" onChange={handleChange} value={formData.condition} placeholder="وضعیت فنی" className="border border-gray-300 p-3 rounded-lg" />
          <input name="fuelType" onChange={handleChange} value={formData.fuelType} placeholder="نوع سوخت" className="border border-gray-300 p-3 rounded-lg" />
          <input name="gearbox" onChange={handleChange} value={formData.gearbox} placeholder="گیربکس" className="border border-gray-300 p-3 rounded-lg" />
          <input name="seats" onChange={handleChange} value={formData.seats} placeholder="تعداد سرنشین" className="border border-gray-300 p-3 rounded-lg" />

          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-600">آپلود تصویر ماشین</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg bg-gray-50"
            />
            {formData.image && (
              <img
                src={formData.image}
                alt="preview"
                className="mt-3 w-full max-w-xs rounded-lg shadow-md border border-gray-200"
              />
            )}
          </div>

          <textarea
            name="description"
            onChange={handleChange}
            value={formData.description}
            placeholder="توضیحات"
            className="col-span-1 md:col-span-2 border border-gray-300 p-4 rounded-lg h-28 resize-none"
          />

          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            ذخیره تغییرات
          </button>
        </form>
      </div>
    </div>
  );
};
