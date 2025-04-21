"use client";
import React, { useEffect, useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import persian from "@/localization/persian/dashboard/inventoryAndPrice-page.json";
import getProducts from "@/api/getProducts";
import { convertToPersianNumbers } from "@/utils/convertToPersianNumbers/convertToPersianNumbers";
import { EditModal } from "./modals/EditProduct";
import { useDispatch } from "react-redux";
import { setSelectedProductForEdit } from "@/redux/slices/dashboard/selectedProductForEdit";

interface Product {
  name: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  discountPercentage: string;
  discountedPrice: string;
  category: string;
  colors: string;
  stock: string;
  condition: string;
  image: string;
  gallery: string[];
  description: string;
  fuelType: string;
  gearbox: string;
  seats: string;
  isAvailable: boolean;
}

export default function InventoryAndPrice() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const result = await getProducts();
    if (result) {
      setAllProducts(result);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = allProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          fetchData();
        }}
      />
      <table className="w-[1000px] table-fixed bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-800 text-white">
            <td className="py-3 px-6 rounded-tr-2xl">{persian.productName}</td>
            <td className="py-3 px-6">{persian.price}</td>
            <td className="py-3">{persian.inventory}</td>
            <td className="py-3 rounded-tl-2xl text-center">{persian.edit}</td>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{product.name}</td>
              <td className="py-3 px-6">
                {convertToPersianNumbers(product.discountedPrice)}
              </td>
              <td className="py-3 px-6">
                {convertToPersianNumbers(product.stock)}
              </td>
              <td className="py-6 text-center flex justify-center items-center gap-4">
                <RiEdit2Fill
                  className="cursor-pointer text-blue-600"
                  size={23}
                  onClick={() => {
                    dispatch(setSelectedProductForEdit(product))
                    setIsEditModalOpen(true);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 cursor-pointer"
          disabled={currentPage === 1}
        >
          قبلی
        </button>
        <span className="px-2 text-sm text-gray-700">
          صفحه {currentPage} از {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 cursor-pointer"
          disabled={currentPage === totalPages}
        >
          بعدی
        </button>
      </div>
    </div>
  );
}
