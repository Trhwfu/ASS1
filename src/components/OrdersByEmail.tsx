// src/pages/OrdersByEmail.tsx
import React, { useState } from "react";
import axios from "axios";
import { IOrder } from "../interface/Order";
import "tailwindcss/tailwind.css";

const OrdersByEmail = () => {
  const [email, setEmail] = useState("");
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/orders?email=${email}`);
      setOrders(response.data);
      setError("");
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Failed to fetch orders. Please try again.");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">tìm kiếm email đặt hành của bạn</h2>
      <input
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Search
      </button>
      {error && (
        <div className="bg-red-500 text-white p-4 rounded mb-4">
          {error}
        </div>
      )}
      <div className="mt-8">
        {orders.length === 0 ? (
          <p>Không tìm thấy email đặt hành của bạn</p>
        ) : (
          <div>
            <h3 className="text-xl font-bold mb-4">Orders</h3>
            <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="py-2 px-4 text-left">Mã đơn hành</th>
                  <th className="py-2 px-4 text-left">tên</th>
                  <th className="py-2 px-4 text-left">Tổng tiền</th>
                  <th className="py-2 px-4 text-left">Trạnh thái</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="py-2 px-4">{order.id}</td>
                    <td className="py-2 px-4">{order.name}</td>
                    <td className="py-2 px-4">${order.totalPrice.toFixed(2)}</td>
                    <td className="py-2 px-4">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersByEmail;
