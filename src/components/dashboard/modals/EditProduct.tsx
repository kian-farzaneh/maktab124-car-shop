"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditModal: React.FC<IProps> = ({ isOpen, onClose }) => {
  const product = useSelector(
    (state: any) => state.edit.selectedProductForEdit
  );
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    model: "",
    year: "",
    price: "",
    discountPercentage: "",
    discountedPrice: "",
    category: "",
    colors: "",
    stock: "",
    condition: "",
    image: "",
    gallery: [] as string[],
    description: "",
    fuelType: "",
    gearbox: "",
    seats: "",
    isAvailable: false,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        brand: product.brand || "",
        model: product.model || "",
        year: product.year || "",
        price: product.price || "",
        discountPercentage: product.discountPercentage || "",
        discountedPrice: product.discountedPrice || "",
        category: product.category || "",
        colors: product.colors || "",
        stock: product.stock || "",
        condition: product.condition || "",
        image: product.image || "",
        gallery: product.gallery || [],
        description: product.description || "",
        fuelType: product.fuelType || "",
        gearbox: product.gearbox || "",
        seats: product.seats || "",
        isAvailable: product.isAvailable || false,
      });
    }
  }, [product]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (name === "image" && files && files[0]) {
      const file = files[0];
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    } else if (name === "gallery") {
      const lines = value.split("\n");
      setFormData({ ...formData, gallery: lines });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Edit Submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-8 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-red-500 text-2xl font-bold transition"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          ویرایش محصول
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 text-right"
        >
          <input
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="نام ماشین"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
          />
          <input
            name="brand"
            onChange={handleChange}
            value={formData.brand}
            placeholder="برند"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
          />
          <input
            name="model"
            onChange={handleChange}
            value={formData.model}
            placeholder="مدل"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
          />
          <input
            name="year"
            onChange={handleChange}
            value={formData.year}
            placeholder="سال ساخت"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
          />
          <input
            name="price"
            onChange={handleChange}
            value={formData.price}
            placeholder="قیمت"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
          />
          <input
            name="discountPercentage"
            onChange={handleChange}
            value={formData.discountPercentage}
            placeholder="درصد تخفیف"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
          />
          <input
            name="discountedPrice"
            onChange={handleChange}
            value={formData.discountedPrice}
            placeholder="قیمت با تخفیف"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
          />
          <input
            name="category"
            onChange={handleChange}
            value={formData.category}
            placeholder="دسته‌بندی"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
          />
          <input
            name="colors"
            onChange={handleChange}
            value={formData.colors}
            placeholder="رنگ‌ها (مثلاً: قرمز، مشکی)"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
          />
          <input
            name="stock"
            onChange={handleChange}
            value={formData.stock}
            placeholder="تعداد موجود"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
          />
          <input
            name="condition"
            onChange={handleChange}
            value={formData.condition}
            placeholder="وضعیت فنی"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
          />
          <input
            name="fuelType"
            onChange={handleChange}
            value={formData.fuelType}
            placeholder="نوع سوخت"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
          />
          <input
            name="gearbox"
            onChange={handleChange}
            value={formData.gearbox}
            placeholder="گیربکس"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
          />
          <input
            name="seats"
            onChange={handleChange}
            value={formData.seats}
            placeholder="تعداد سرنشین"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
          />

          <div className="flex items-center gap-2 col-span-1 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              در دسترس است؟
            </label>
            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-1 text-sm font-medium text-gray-600">
              تصویر اصلی (لینک تصویر اینترنتی)
            </label>
            <input
              type="text"
              name="image"
              onChange={handleChange}
              value={formData.image}
              placeholder="لینک تصویر را وارد کنید"
              className="w-full border p-2 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
            />
            {formData.image && (
              <img
                src={formData.image}
                alt="preview"
                className="mt-3 w-full max-w-xs rounded-lg shadow-md"
              />
            )}
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block mb-1 text-sm font-medium text-gray-600">
              گالری تصاویر (تا ۴ لینک تصویر، هر لینک در یک خط)
            </label>
            <textarea
              name="gallery"
              onChange={handleChange}
              value={formData.gallery.join("\n")}
              placeholder="هر لینک را در یک خط وارد کنید"
              className="w-full border border-gray-300 p-2 rounded-lg bg-gray-50 h-24 resize-none"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`gallery-${idx}`}
                  className="w-24 h-24 object-cover rounded-md shadow-md"
                />
              ))}
            </div>
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
