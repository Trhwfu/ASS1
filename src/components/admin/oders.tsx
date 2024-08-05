import React, { useEffect, useState } from "react";
import axios from "axios";
import { IOrder } from "../../interface/Order";
import "tailwindcss/tailwind.css";

const AdminOrders = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [error, setError] = useState("");
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3000/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Failed to fetch orders. Please try again.");
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (orderId: number) => {
    try {
      await axios.delete(`http://localhost:3000/orders/${orderId}`);
      setOrders(orders.filter(order => order.id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
      setError("Failed to delete order. Please try again.");
    }
  };

  const handleStatusChange = async (orderId: number, newStatus: string) => {
    try {
      const updatedOrder = orders.find(order => order.id === orderId);
      if (updatedOrder) {
        updatedOrder.status = newStatus;
        await axios.put(`http://localhost:3000/orders/${orderId}`, updatedOrder);
        setOrders([...orders]);
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      setError("Failed to update order status. Please try again.");
    }
  };

  const groupedOrders = orders.reduce((acc, order) => {
    if (!acc[order.email]) {
      acc[order.email] = [];
    }
    acc[order.email].push(order);
    return acc;
  }, {} as { [key: string]: IOrder[] });

  const handleDetails = (email: string) => {
    setSelectedEmail(email);
  };

  const handleCloseDetails = () => {
    setSelectedEmail(null);
    setSelectedOrder(null);
  };

  const handleViewOrderDetails = (order: IOrder) => {
    setSelectedOrder(order);
  };

  const orderStatusOptions = ["Đang xác nhận", "Đang chuẩn bị", "Đang giao hàng", "Hoàn thành"];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Quản lý đơn hàng</h2>
      {error && (
        <div className="bg-red-500 text-white p-4 rounded mb-4">
          {error}
        </div>
      )}
      {selectedOrder ? (
        <div>
          <button
            className="bg-blue-500 text-white py-1 px-2 rounded mb-4"
            onClick={handleCloseDetails}
          >
            Back
          </button>
          <h3 className="text-xl font-bold mb-4">Chi tiết Đơn hàng</h3>
          <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="py-2 px-4 text-left">Tên sản phẩm</th>
                <th className="py-2 px-4 text-left">Giá</th>
                <th className="py-2 px-4 text-left">Số lượng</th>
              </tr>
            </thead>
            <tbody>
              {selectedOrder.items.map(item => (
                <tr key={item.id} className="border-b">
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">${item.price.toFixed(2)}</td>
                  <td className="py-2 px-4">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Thông tin đơn hàng</h3>
            <p><strong>ID Đơn hàng:</strong> {selectedOrder.id}</p>
            <p><strong>Tên khách hàng:</strong> {selectedOrder.name}</p>
            <p><strong>Email:</strong> {selectedOrder.email}</p>
            <p><strong>Số điện thoại:</strong> {selectedOrder.phone}</p>
            <p><strong>Địa chỉ:</strong> {selectedOrder.address}</p>
            <p><strong>Tổng số tiền:</strong> ${selectedOrder.totalPrice.toFixed(2)}</p>
            <p><strong>Trạng thái:</strong> {selectedOrder.status}</p>
          </div>
        </div>
      ) : selectedEmail ? (
        <div>
          <button
            className="bg-blue-500 text-white py-1 px-2 rounded mb-4"
            onClick={handleCloseDetails}
          >
            Back
          </button>
          <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="py-2 px-4 text-left">ID đơn hàng</th>
                <th className="py-2 px-4 text-left">Tên khách hàng</th>
                <th className="py-2 px-4 text-left">Số điện thoại</th>
                <th className="py-2 px-4 text-left">Địa chỉ</th>
                <th className="py-2 px-4 text-left">Tổng số tiền</th>
                <th className="py-2 px-4 text-left">Trạng thái</th>
                <th className="py-2 px-4 text-left">Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {groupedOrders[selectedEmail].map(order => (
                <tr key={order.id} className="border-b">
                  <td className="py-2 px-4">{order.id}</td>
                  <td className="py-2 px-4">{order.name}</td>
                  <td className="py-2 px-4">{order.phone}</td>
                  <td className="py-2 px-4">{order.address}</td>
                  <td className="py-2 px-4">${order.totalPrice.toFixed(2)}</td>
                  <td className="py-2 px-4">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className="bg-gray-100 border rounded py-1 px-2"
                    >
                      {orderStatusOptions.map(status => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-blue-500 text-white py-1 px-2 rounded"
                      onClick={() => handleViewOrderDetails(order)}
                    >
                      Xem chi tiết
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(groupedOrders).map(email => (
              <tr key={email} className="border-b">
                <td className="py-2 px-4">{email}</td>
                <td className="py-2 px-4">
                  <button
                    className="bg-blue-500 text-white py-1 px-2 rounded"
                    onClick={() => handleDetails(email)}
                  >
                    Xem
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminOrders;
