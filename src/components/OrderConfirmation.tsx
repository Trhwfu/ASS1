// src/pages/OrderConfirmation.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import { IOrder } from "../interface/Order";
import "tailwindcss/tailwind.css";

const OrderConfirmation = () => {
  const location = useLocation<{ order: IOrder }>();
  const { order } = location.state || {};

  if (!order) {
    return <p>Lỗi: Không tìm thấy thông tin đơn hàng.</p>;
  }

  return (
    <div className="p-8">
     
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Tóm tắt Đơn hàng</h3>
        <p>Tên: {order.name}</p>
        <p>Email: {order.email}</p>
        <p>Địa chỉ: {order.address}</p>
        <p>Số điện thoại: {order.phone}</p>
        <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden mt-4">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="py-2 px-4 text-left">Tên sản phẩm</th>
              <th className="py-2 px-4 text-left">Giá</th>
              <th className="py-2 px-4 text-left">Số lượng</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="py-2 px-4">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 className="text-xl font-bold mt-4">
          Tổng giá: ${order.totalPrice.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default OrderConfirmation;
