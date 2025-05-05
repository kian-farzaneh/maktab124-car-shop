"use client";
import { getOrders } from "@/api/getOrders";
import React, { useEffect, useState } from "react";
import OrderDetailsModal from "../modals/OrderDetailsModal";

interface Order {
  id: string;
  customerName: string;
  totalAmount: number;
  orderDate: string;
  status: "در حال ارسال" | "تحویل شده";
  products: { name: string; quantity: number }[];
}

export default function Orders() {
  const itemsPerPage = 5;
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await getOrders();

        const mappedOrders: Order[] = res.records.map((item: any) => ({
          id: item.id,
          customerName: `${item.userData.name} ${item.userData.lastName}`,
          totalAmount: item.totalPrice,
          orderDate: new Date(item.createdAt).toLocaleDateString("fa-IR"),
          status: item.isDelivered ? "تحویل شده" : "در حال ارسال",
          products: item.cartData.map((p: any) => ({
            name: p.name,
            quantity: p.quantity,
          })),
        }));

        setOrders(mappedOrders);
      } catch (error) {
        console.error("خطا در دریافت سفارش‌ها", error);
      }
    }

    fetchOrders();
  }, []);

  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const currentOrders = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleStatus = (id: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              status:
                order.status === "در حال ارسال" ? "تحویل شده" : "در حال ارسال",
            }
          : order
      )
    );
  };

  const showDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4">
      <table className="w-full max-w-4xl table-fixed bg-white shadow-lg rounded-2xl">
        <thead>
          <tr className="bg-gray-800 text-white text-center">
            <th className="py-3 px-2 rounded-tr-2xl">نام کاربر</th>
            <th className="py-3 px-2">مبلغ پرداخت‌شده</th>
            <th className="py-3 px-2">تاریخ سفارش</th>
            <th className="py-3 px-2">وضعیت سفارش</th>
            <th className="py-3 px-2 rounded-tl-2xl">جزئیات</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr
              key={order.id}
              className="text-center border-b h-20 border-gray-200 hover:bg-gray-100"
            >
              <td className="py-2 px-2">{order.customerName}</td>
              <td className="py-2 px-2">
                {order.totalAmount.toLocaleString("fa-IR")} $
              </td>
              <td className="py-2 px-2">{order.orderDate}</td>
              <td className="py-2 px-2">
                <button
                  onClick={() => toggleStatus(order.id)}
                  className={`px-3 py-1 rounded text-white text-sm ${
                    order.status === "در حال ارسال"
                      ? "bg-orange-500"
                      : "bg-green-600"
                  }`}
                >
                  {order.status}
                </button>
              </td>
              <td className="py-2 px-2">
                <button
                  onClick={() => showDetails(order)}
                  className="px-3 py-1 rounded bg-blue-600 text-white text-sm"
                >
                  مشاهده
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          disabled={currentPage === 1}
        >
          قبلی
        </button>
        <span className="text-sm text-gray-700">
          صفحه {currentPage} از {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          disabled={currentPage === totalPages}
        >
          بعدی
        </button>
      </div>


      <OrderDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        customerName={selectedOrder?.customerName || ""}
        orderDate={selectedOrder?.orderDate || ""}
        status={selectedOrder?.status || ""}
        totalAmount={selectedOrder?.totalAmount || 0}
        products={selectedOrder?.products || []}
      />
    </div>
  );
}
