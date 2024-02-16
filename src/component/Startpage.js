import React from 'react'
import Swiper from 'swiper';
  import "swiper/css";
  import "swiper/css/navigation";
import "swiper/css/pagination";
  


const Startpage = () => {
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
  
  return (
    <div className="md:block hidden">
      <div className="grid bhbh">
        <div className="bbb">
          <img
            className="rounded-xl h-[98%]"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1670836363/contentservice/finalday.jpg_HyG9lO4Oi.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-xl h-[95%]"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1670894512/contentservice/pow.gif_HJw2XLBOj.gif"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-xl h-[95%]"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1669305707/contentservice/AccessBox.jpg_rJxOSf6Lo.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-xl h-[95%]"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1669859570/contentservice/IntelBox.jpg_ry9eKFrvs.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            className="rounded-xl h-[95%]"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1669859570/contentservice/Special.jpg_r19eFFSvi.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex gap-5 hjhjh px-8">
        <a className="flex justify-center items-center rounded-lg " href="">
          <img
            className="mx-9 my-3 h-7"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1664909988/contentservice/blog.jpg_r1YjM-9Mi.jpg"
            alt=""
          />
        </a>
        <a
          className="flex justify-center items-centershadow-gray shadow-xl"
          href=""
        >
          <img
            className="mx-9 my-3 h-7"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1664909985/contentservice/bills.jpg_rJtsf-cfo.jpg"
            alt=""
          />
        </a>
        <a
          className="flex justify-center items-centershadow-gray shadow-xl"
          href=""
        >
          <img
            className="mx-9 my-3 h-7"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1664909986/contentservice/delivery.jpg_SymFjfW5fj.jpg"
            alt=""
          />
        </a>
        <a
          className="flex justify-center items-centershadow-gray shadow-xl"
          href=""
        >
          <img
            className="mx-9 my-3 h-7"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1664909986/contentservice/store.jpg_rJYifZqGi.jpg"
            alt=""
          />
        </a>
        <a
          className="flex justify-center items-centershadow-gray shadow-xl"
          href=""
        >
          <img
            className="mx-9 my-3 h-7"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1664909990/contentservice/Brand.jpg_B1qiGW5Gj.jpg"
            alt=""
          />
        </a>
        <a
          className="flex justify-center items-centershadow-gray shadow-xl"
          href=""
        >
          <img
            className="mx-9 my-3 h-7"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1664909992/contentservice/Brand%20copy.jpg_HJqizbcfj.jpg"
            alt=""
          />
        </a>
      </div>

      <div class="cont">
        <div class="box3">
          <h2 className="text-4xl font-bold">Today's Deal</h2>
          <p>See All Item</p>
        </div>

        <div class="box4">
          <div class="nm1">
            <div class="bimg">
              <img
                src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/N/195510_1668614261.jpg"
                alt=""
              />
            </div>
            <div class="p-text">
              <p>Sanyo Smart Tv - 43"</p>
              <h4>₦119,999</h4>
              <p class="p-bt">You save ₦10,001</p>
            </div>
          </div>

          <div class="nm1">
            <div class="bimg">
              <img
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/S/118566_1643375668.jpg"
                alt=""
              />
            </div>
            <div class="p-text">
              <p>Philips Daily Blender Collection...</p>
              <h4>₦28,870</h4>
            </div>
          </div>

          <div class="nm1">
            <div class="bimg">
              <img
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/T/118566_1648649901.jpg"
                alt=""
              />
            </div>
            <div class="p-text">
              <p>HP Pavilion 14 X360 - 14" - Inte...</p>
              <h4>₦360,000</h4>
            </div>
          </div>

          <div class="nm1">
            <div class="bimg">
              <img
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/Y/118566_1602590809.jpg"
                alt=""
              />
            </div>
            <div class="p-text">
              <p>Tecno Camon 19 Pro - Mondrian - ...</p>
              <h4>₦194,990</h4>
              <p class="p-bt">You save ₦5,010</p>
            </div>
          </div>

          <div class="nm1">
            <div class="bimg5">
              <img
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/F/1_1521563544.jpg"
                alt=""
              />
            </div>
            <div class="p-text">
              <p>Samsung Galaxy S22 Ultra - 6.8" ...</p>
              <h4>₦869,999</h4>
              <p class="p-bt">You save ₦153,001</p>
            </div>
          </div>

          <div class="nm1">
            <div class="bimg">
              <img
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/H/118566_1622201319.jpg"
                alt=""
              />
            </div>
            <div class="p-text">
              <p>Zinox 21.5" Avid Aio Pro - Intel...</p>
              <h4>₦164,300</h4>
              <p class="p-bt">You save ₦6,460</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Startpage