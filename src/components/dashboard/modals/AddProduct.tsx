"use client";

import React, { useEffect, useState } from "react";
import addProduct from "@/api/postProduct";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  refreshProducts: () => void;
}

interface FormDataType {
  name: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  discountPercentage: string;
  discountedPrice: string;
  category: string;
  colors: string[];
  stock: string;
  condition: string;
  isAvailable: boolean;
  image: string;
  gallery: string[];
  description: string;
  fuelType: string;
  gearbox: string;
  seats: string;
  views: string;
  ratings: any[];
  comments: any[];
}

export const AddModal: React.FC<IProps> = ({
  isOpen,
  onClose,
  refreshProducts,
}) => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    brand: "",
    model: "",
    year: "",
    price: "",
    discountPercentage: "",
    discountedPrice: "",
    category: "",
    colors: [] as string[],
    stock: "",
    condition: "",
    isAvailable: false,
    image: "",
    gallery: [] as string[],
    description: "",
    fuelType: "",
    gearbox: "",
    seats: "",
    views: "",
    ratings: [],
    comments: [],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, checked } = e.target as HTMLInputElement;

    if (name === "image" && value) {
      setFormData({ ...formData, image: value });
    } else if (name === "gallery") {
      const galleryLinks = value
        .split("\n")
        .map((link) => link.trim())
        .slice(0, 4);
      setFormData({ ...formData, gallery: galleryLinks });
    } else if (name === "isAvailable") {
      setFormData({ ...formData, isAvailable: checked });
    } else if (name === "colors") {
      const selectedColors = value.split(",").map((color) => color.trim());
      setFormData({ ...formData, colors: selectedColors });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        colors: formData.colors.join(", "),
      };
      const res = await addProduct(dataToSend);
      console.log("محصول با موفقیت ثبت شد:", res);
      refreshProducts();
      onClose();
    } catch (error) {
      console.error("خطا در ثبت محصول:", error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        brand: "",
        model: "",
        year: "",
        price: "",
        discountPercentage: "",
        discountedPrice: "",
        category: "",
        colors: [] as string[],
        stock: "",
        condition: "",
        isAvailable: false,
        image: "",
        gallery: [] as string[],
        description: "",
        fuelType: "",
        gearbox: "",
        seats: "",
        views: "",
        ratings: [],
        comments: [],
      });
    }
  }, [isOpen]);
  if (!isOpen) {
    return null;
  }
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
          افزودن محصول جدید
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
            value={formData.colors.join(", ")}
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

          <div className="flex items-center gap-2 col-span-2">
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

          <div className="col-span-2">
            <label className="block mb-1 text-sm font-medium text-gray-600">
              گالری تصاویر (تا ۴ لینک تصویر، هر لینک در یک خط)
            </label>
            <textarea
              name="gallery"
              onChange={handleChange}
              value={formData.gallery.join("\n")}
              placeholder="هر لینک را در یک خط وارد کنید"
              className="w-full border p-2 rounded-lg bg-gray-50 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
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
            className="col-span-2 border p-4 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#EC8C2F] border-[#cacaca]"
          />

          <button
            type="submit"
            className="col-span-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
          >
            ذخیره محصول
          </button>
        </form>
      </div>
    </div>
  );
};
