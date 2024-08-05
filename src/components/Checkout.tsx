import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import axios from "axios";
import { formcheckout } from "../interface/User";
import { IOrder } from "../interface/Order";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Checkout = () => {
  const context = useContext(CartContext);
  const navigate = useNavigate();

  if (!context) {
    return <p>Lỗi: Không tìm thấy ngữ cảnh giỏ hàng.</p>;
  }

  const { cart, removeFromCart } = context;
  const [formData, setFormData] = useState<formcheckout>({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const totalPrice = cart.reduce(
    (total, item) => total + (item.salePrice ?? item.price) * item.quantity,
    0
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Kiểm tra nếu có sản phẩm nào có giá bằng 0
    const hasZeroPriceItem = cart.some(item => (item.salePrice ?? item.price) === 0);
    if (hasZeroPriceItem) {
      alert("Một số sản phẩm trong giỏ hàng có giá bằng 0. Vui lòng kiểm tra lại giỏ hàng.");
      return;
    }

    const order: IOrder = {
      ...formData,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.salePrice ?? item.price,
        quantity: item.quantity,
      })),
      totalPrice,
    };

    try {
      await axios.post("http://localhost:3000/orders", order);
      setSuccessMessage("Thanh toán thành công!");
      cart.forEach((item) => removeFromCart(item, item.quantity));
      setTimeout(() => {
        navigate("/order", { state: { order } });
      }, 2000);
    } catch (error) {
      console.error("Lỗi khi lưu đơn hàng:", error);
      alert("Lưu đơn hàng không thành công. Vui lòng thử lại.");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Thanh toán</h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Tóm tắt Giỏ hàng</h3>
        {cart.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="py-2 px-4 text-left">Tên sản phẩm</th>
                <th className="py-2 px-4 text-left">Giá</th>
                <th className="py-2 px-4 text-left">Số lượng</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">
                    ${((item.salePrice ?? item.price) * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-2 px-4">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <h3 className="text-xl font-bold mt-4">
          Tổng giá: ${totalPrice.toFixed(2)}
        </h3>
      </div>
      {successMessage && (
        <div className="bg-green-500 text-white p-4 rounded mb-4">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
        <h3 className="text-xl font-bold mb-4">Thông tin Giao hàng</h3>
        <label className="block mb-2">
          Tên:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Địa chỉ:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-4">
          Số điện thoại:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Hoàn tất Mua hàng
        </button>
      </form>
    </div>
  );
};

export default Checkout;
