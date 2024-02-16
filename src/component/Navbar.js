import React from 'react'
import {BiSearch} from "react-icons/bi"
import { FaQuestionCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="text-white">
      <div className="flex w-full justify-between px-44  bg-[#f6f6f6] py-3">
        <img
          className="h-5"
          src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/k_travels2.png"
          alt=""
        />

        <img
          className="h-5"
          src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/kongafood.png"
          alt=""
        />

        <img
          className="h-5"
          src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/konga_pay.png"
          alt=""
        />

        <img
          className="h-5"
          src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/new_konga_drinks.png"
          alt=""
        />

        <img
          className="h-5"
          src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/konga_health.png"
          alt=""
        />

        <img
          className="h-5"
          src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/k_express2.png"
          alt=""
        />

        <img
          className="h-5"
          src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/new_konga_groceries.png"
          alt=""
        />
      </div>
      <div className="flex bg-[#ed017f] items-center px-10">
        <a href="">
          {" "}
          <img
            className="h-9"
            src="https://www.konga.com/_next/static/images/62f8a0d88e07573b4d46735aa24f3f04.png"
            alt=""
          />
        </a>

        <div className="flex ml-5">
          <a
            href=""
            className="px-5 py-2 pr-14 hover:bg-white hover:text-[#ed017f] transition-all text-sm"
          >
            Store <br /> Locator
          </a>
          <a
            href=""
            className="px-5 py-2 pr-14 hover:text-[#ed017f] hover:bg-white transition-all text-sm"
          >
            Sell on <br /> Konga
          </a>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for products, brands and categories..."
              className="w-[30rem] text-black h-5 text-xs pl-3 py-4 outline-none rounded-l-sm"
            />
            <a
              href=""
              className="h-8  bg-[#fba100] flex items-center p-3 rounded-r-sm"
            >
              <BiSearch />
            </a>
            <a
              href=""
              className="px-5 py-2 h-full items-center gap-1 hover:text-[#ed017f] flex hover:bg-white transition-all text-sm"
            >
              <FaQuestionCircle />
              <p>Help</p>
              <FaAngleDown />
            </a>
            <a
              href=""
              className="px-5 py-2 pr-14 hover:text-[#ed017f] hover:bg-white transition-all text-sm"
            >
              Login/ <br /> Signup
            </a>
            <div className="bg-[#2d9e6d] rounded-md flex justify-between px-5 items-center h-10 w-32">
              <div className="flex gap-1 items-center">
                <RiShoppingCartLine className="font-extrabold text-xl" />
                <p className="text-xs">
                  My <br /> cart
                </p>
              </div>
              <input
                type="text"
                name=""
                id=""
                readOnly
                className="w-5 rounded-sm outline-none pl-1 text-black"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#94004f]">
        <ul className='flex justify-center w-full'>
          <a href="">
            <li className="py-3 px-7 text-sm hover:bg-white hover:text-[#ed017f]">All Categories</li>
          </a>
          <a href="">
            <li className="py-3 px-7 text-sm hover:bg-white hover:text-[#ed017f]"> Computers and Accessories </li>
          </a>
          <a href="">
            <li className="py-3 px-7 text-sm hover:bg-white hover:text-[#ed017f]">Phones and Tablets</li>
          </a>
          <a href="">
            <li className="py-3 px-7 text-sm hover:bg-white hover:text-[#ed017f]">Electronics </li>
          </a>
          <a href="">
            <li className="py-3 px-7 text-sm hover:bg-white hover:text-[#ed017f]"> Konga Fashion</li>
          </a>
          <a href="">
            <li className="py-3 px-7 text-sm hover:bg-white hover:text-[#ed017f]"> Home and Kitchen</li>
          </a>
          <a href="">
            <li className="py-3 px-7 text-sm hover:bg-white hover:text-[#ed017f]"> Baby, Kids and Toys</li>
          </a>
          <a href="">
            <li className="py-3 px-7 text-sm hover:bg-white hover:text-[#ed017f]"> Other Categories</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar