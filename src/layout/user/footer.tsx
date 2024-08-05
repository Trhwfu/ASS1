// import React from 'react'
import '../../css/fooder.css'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full bg-[#053D29] py-5 text-black font-sans text-sm shadow-lg">
      <div className="top grid grid-cols-4 gap-5 p-7">
        <div className="one">
          <div className="infn4 mb-2 text-[#F9F3EE]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="logo flex mt-2 text-white cursor-pointer space-x-5">
            <span>
              <i className="fa-brands fa-facebook text-lg transition duration-300 hover:text-[#75f1ca]"></i>
            </span>
            <span>
              <i className="fa-brands fa-x-twitter text-lg transition duration-300 hover:text-[#75f1ca]"></i>
            </span>
            <span>
              <i className="fa-brands fa-instagram text-lg transition duration-300 hover:text-[#75f1ca]"></i>
            </span>
            <span>
              <i className="fa-brands fa-youtube text-lg transition duration-300 hover:text-[#75f1ca]"></i>
            </span>
            <span>
              <i className="fa-brands fa-internet-explorer text-lg transition duration-300 hover:text-[#75f1ca]"></i>
            </span>
          </div>
        </div>
        <div className="two">
          <nav>
            <ul className="space-y-2">
              <li className="mb-1">
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  <strong className="font-semibold text-white">Về chúng tôi</strong>
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  Liên hệ với chúng tôi
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  Thông tin công ty
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="two">
          <nav>
            <ul className="space-y-2">
              <li className="mb-1">
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  <strong className="font-semibold text-white">Hỗ trợ</strong>
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  Nhà sản xuất của chúng tôi
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  Thanh toán
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  Vận chuyển
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  Hủy đơn hàng & Trả hàng
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  Báo cáo vi phạm
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="two">
          <nav>
            <ul className="space-y-2">
              <li className="mb-1">
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  <strong className="font-semibold text-white">Chính sách</strong>
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  Đảm bảo hoàn trả
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  An toàn
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  Quyền riêng tư
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-[#F9F3EE] no-underline transition duration-300 text-xs hover:text-white">
                  Sơ đồ trang
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bottom flex justify-between items-center bg-[#062F21] py-2 text-white absolute w-full">
        <div className="hood">
          <p> 2023 hood.de, Inc.</p>
        </div>
        <div className="bank">
          <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZeXtBXgwb8vy3AIKEmHSNeseGnGp6jv1D4QPN0FmXwWa5AjgZDIJHrH_9-StnnS1EbzmN20dpjriQ3I_nCehYfdgyc6i0_0_c=w1860-h387" alt="" />
        </div>
        <div className="scroll cursor-pointer">
          <p>Cuộn lên trên <span><i className="fa-solid fa-arrow-up"></i></span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
