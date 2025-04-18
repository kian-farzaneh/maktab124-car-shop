"use client";

import React, { useEffect, useState } from "react";
import persian2 from "@/localization/persian/dashboard/product-page.json";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import { AddModal } from "@/components/dashboard/modals/AddProduct";
import {
  DeleteProduct,
  deleteProductInApie,
} from "@/components/dashboard/modals/DeleteProduct";
import { EditModal } from "@/components/dashboard/modals/EditProduct";
import getProducts from "@/api/getProducts";
import { CiFilter } from "react-icons/ci";
import { FilterMenu } from "@/components/dashboard/modals/FilterProducts";

export default function Product() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const fetchData = async () => {
    const result = await getProducts();
    if (result) {
      setAllProducts(result);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(allProducts);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = allProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleDelete = async () => {
    if (!selectedProductId) return;

    try {
      await deleteProductInApie(selectedProductId);
      fetchData();
    } catch (error) {
      console.error("خطا در حذف محصول:", error);
    } finally {
      setIsDeleteModalOpen(false);
      setSelectedProductId(null);
    }
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const handleCancelEdit = () => {
    setIsEditModalOpen(false);
  };

  const handleApplyFilter = async (filters: {
    filterKey?: string;
    filterValue?: string;
    filterMin?: number | string;
    filterMax?: number | string;
  }) => {
    const result = await getProducts(filters);
    if (result) {
      setAllProducts(result);
      setCurrentPage(1);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-gray-800 absolute top-20 right-32 text-white py-2 px-3 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-110"
      >
        +
      </button>
      <button
        onClick={() => setFilterMenuOpen((prev) => !prev)}
        className="bg-gray-800 absolute top-20 right-20 text-white py-3 px-3 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-110"
      >
        <CiFilter />
      </button>

      <FilterMenu
        isOpen={filterMenuOpen}
        onClose={() => setFilterMenuOpen(false)}
        onApplyFilter={handleApplyFilter}
      />

      <AddModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        refreshProducts={fetchData}
      />
      <DeleteProduct
        isOpen={isDeleteModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleDelete}
      />
      <EditModal isOpen={isEditModalOpen} onClose={handleCancelEdit} />

      <div className="w-full max-h-[600px] overflow-y-auto flex flex-col items-center gap-4">
        <table className="w-[1000px] table-fixed bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <td className="py-3 px-6 rounded-tr-2xl">
                {persian2.productImage}
              </td>
              <td className="py-3">{persian2.productName}</td>
              <td className="py-3 px-6 rounded-tl-2xl text-center">
                {persian2.action}
              </td>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6">
                  <img
                    className="w-20 rounded-sm"
                    src={product.image}
                    alt="product"
                  />
                </td>
                <td className="py-3">{product.name}</td>
                <td className="py-6 text-center flex justify-center items-center gap-4">
                  <RiDeleteBin6Fill
                    className="cursor-pointer"
                    size={23}
                    color="red"
                    onClick={() => {
                      setSelectedProductId(product.id);
                      setIsDeleteModalOpen(true);
                    }}
                  />
                  <RiEdit2Fill
                    className="cursor-pointer text-blue-600"
                    size={23}
                    onClick={() => setIsEditModalOpen(true)}
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
    </>
  );
}
