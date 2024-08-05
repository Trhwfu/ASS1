import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import "../../css/header.css";
import LoginForm from "../../components/acc/login";

const Header = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const context = useContext(CartContext);

  if (!context) {
    return <p>Error: Cart context not found.</p>;
  }

  const { cart } = context;
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleLoginForm = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  return (
    <header className="bg-gradient-to-r from-green-600 to-gray-400 min-h-[149px] w-full text-white font-sans">
      <div className="menu content-center py-7 shadow-md">
        <div className="topmenu flex justify-between mb-5">
          <div className="search relative mt-[-10px] mr-2">
            <form action="">
              <input
                type="text"
                placeholder="Suchen Sie nach Produkten, Marken und mehr"
                className="absolute h-[43px] w-[525px] px-7 text-black rounded shadow-md border-none outline-none text-sm transition duration-300"
              />
              <button className="absolute right-5 bg-transparent text-black border-none p-1.5 rounded cursor-pointer h-[44px] transition duration-300">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div className="language relative">
            <select
              name="language-picker-select"
              id="language-picker-select"
              className="absolute bg-transparent text-white border-none outline-none transition  top-[-8px]"
            >
              <option lang="de" value="deutsch" selected>
                Vn
              </option>
              <option lang="de" value="deutsch">
                Deutsch
              </option>
              <option lang="en" value="english">
                English
              </option>
              <option lang="fr" value="francais">
                Français
              </option>
              <option lang="it" value="italiano">
                Italiano
              </option>
            </select>
          </div>
          <div className="user flex font-sans mr-20">
            <div
              className="userinfo flex w-[120px] h-full text-white cursor-pointer "
              onClick={toggleLoginForm}
            >
              <Link to={"/"}>
                <i className="fa-regular fa-user"></i>
                <span>Tài khoản</span>
              </Link>
            </div>
            <div className="cart w-[120px] h-full text-white cursor-pointer">
              <Link to={"/cart"}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Giỏ hang</span>
                {totalItems > 0 && <span className="ml-1">({totalItems})</span>}
              </Link>
            </div>
            <div className="cart w-[100px] h-full text-white cursor-pointer">
              <Link to={"/orderemail"}>
              <i className="fa-solid fa-magnifying-glass"></i>
                <span>Đơn hàng</span>
                {/* <span className=''>({cart})</span> */}
              </Link>
            </div>
          </div>
        </div>
        <div className="downmenu border-t border-white w-[1245px] mt-4">
          <ul className="down flex list-none p-0 m-0">
            <li className="onemenu relative mt-4">
              <Link
                className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10"
                to={"/"}
              >
                Ánh sáng
                <span>
                  <i className="fa-solid fa-angle-down ml-1"></i>
                </span>
              </Link>
              <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
                <li className="border-b border-gray-300">
                  <Link
                    to={"/"}
                    className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10"
                  >
                    Khái niệm ánh sáng
                  </Link>
                </li>
              </ul>
            </li>
            <li className="onemenu relative mt-4">
              <Link
                className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10"
                to={"/"}
              >
                Hộp trồng cây
                <span>
                  <i className="fa-solid fa-angle-down ml-1"></i>
                </span>
              </Link>
              <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
                <li className="border-b border-gray-300">
                  <Link
                    to={"/"}
                    className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10"
                  >
                    Bộ hoàn chỉnh
                  </Link>
                </li>
              </ul>
            </li>
            <li className="onemenu relative mt-4">
              <Link
                className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10"
                to={"/"}
              >
                Phân bón
                <span>
                  <i className="fa-solid fa-angle-down ml-1"></i>
                </span>
              </Link>
              <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
                <li className="border-b border-gray-300">
                  <Link
                    to={"/"}
                    className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10"
                  >
                    Khái niệm phân bón
                  </Link>
                </li>
              </ul>
            </li>
            <li className="onemenu relative mt-4">
              <Link
                className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10"
                to={"/"}
              >
                Đất & Chất trồng
                <span>
                  <i className="fa-solid fa-angle-down ml-1"></i>
                </span>
              </Link>
              <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
                <li className="border-b border-gray-300">
                  <Link
                    to={"/"}
                    className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10"
                  >
                    Khái niệm đất & chất trồng
                  </Link>
                </li>
              </ul>
            </li>
            <li className="onemenu relative mt-4">
              <Link
                className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10"
                to={"/"}
              >
                Chậu & Đồ chứa
                <span>
                  <i className="fa-solid fa-angle-down ml-1"></i>
                </span>
              </Link>
              <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
                <li className="border-b border-gray-300">
                  <Link
                    to={"/"}
                    className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10"
                  >
                    Chậu vuông
                  </Link>
                </li>
                <li className="border-b border-gray-300">
                  <Link
                    to={"/"}
                    className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10"
                  >
                    Chậu tròn
                  </Link>
                </li>
                <li className="border-b border-gray-300">
                  <Link
                    to={"/"}
                    className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10"
                  >
                    Đĩa đỡ
                  </Link>
                </li>
                <li className="border-b border-gray-300">
                  <Link
                    to={"/"}
                    className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10"
                  >
                    Khay trồng cây
                  </Link>
                </li>
              </ul>
            </li>
            <li className="onemenu relative mt-4">
              <Link
                className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10"
                to={"/"}
              >
                Tưới nước
                <span>
                  <i className="fa-solid fa-angle-down ml-1"></i>
                </span>
              </Link>
              <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
                <li className="border-b border-gray-300">
                  <Link
                    to={"/"}
                    className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10"
                  >
                    Khái niệm tưới nước
                  </Link>
                </li>
              </ul>
            </li>
            <li className="onemenu relative mt-4">
              <Link
                className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10"
                to={"/"}
              >
                Cây trồng & Làm vườn
                <span>
                  <i className="fa-solid fa-angle-down ml-1"></i>
                </span>
              </Link>
              <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
                <li className="border-b border-gray-300">
                  <Link
                    to={"/"}
                    className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10"
                  >
                    Khái niệm cây trồng & làm vườn
                  </Link>
                </li>
              </ul>
            </li>
            <li className="onemenu relative mt-4">
              <Link
                className="linh block p-2.5 no-underline text-white transition duration-800 hover:bg-black/10"
                to={"/"}
              >
                Thông gió & Điều hòa
                <span>
                  <i className="fa-solid fa-angle-down ml-1"></i>
                </span>
              </Link>
              <ul className="twomenu absolute top-full left-0 w-[100px] bg-white shadow-md transition duration-300 text-black text-center p-1.5 font-light text-sm hidden">
                <li className="border-b border-gray-300">
                  <Link
                    to={"/"}
                    className="block p-2.5 no-underline text-black transition duration-300 hover:bg-black/10"
                  >
                    Khái niệm thông gió & điều hòa
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {isLoginVisible && <LoginForm onClose={toggleLoginForm} />}
    </header>
  );
};

export default Header;
