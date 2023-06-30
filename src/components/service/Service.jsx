import React from "react";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import css from "./Service.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textVariant,
  footerVariants,
  zoomIn,
  
} from "../../utils/motion.js";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

const Service = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}

      className={`${css.wrapper} ${css.services}} section-title `}
    >
        <a className="anchor" id="service"></a>
      <div className="wrapper">
        <h1 className="primaryText yPaddings flexCenter">
          {" "}
          <span> TÔI MANG LẠI ĐƯỢC GÌ CHO DOANH NGHIỆP VÀ CÔNG TY</span>
        </h1>
      </div>

      <div class="row">
        <div class={`${css.serviceContent}  ${css.fadeInDown}`}>
          <motion.div
            variants={zoomIn(0.3, 1)}
            class="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  items-center  gap-4"
          >
            <div
              class={css.box}
          
            >
              <div class="flex justify-center">
                <img
                  className="w-60  h-60  object-cover"
                  src="./skills/mobile-app.png"
                  alt="service image"
                  draggable="false"
                />
              </div>
              <a href="#">
                <h3>Responsive Design</h3>
              </a>
              <p>
                Các ứng dụng của tôi sẽ đáp ứng mọi thiết bị và môi trường của
                người dùng theo các tiêu chí - bố cục website thể hiện đẹp, mang
                tính mỹ thuật với độ hiển thị nội dung co giãn phù hợp trên tất
                cả các màn hình thiết bị như desktop, smartphone,...
              </p>
            </div>
            <div class={css.box}>
              <div class="flex justify-center">
                <img
                  className="w-60  h-60  object-cover"
                  src="./skills/www.png"
                  alt="service image"
                  draggable="false"
                />
              </div>
              <a href="#">
                <h3>Front-End Development</h3>
              </a>
              <p>
                Tôi đảm nhận việc phát triển giao diện người dùng của một trang
                web, thông qua việc sử dụng HTML, CSS và JS(ReactJS) để người
                dùng có thể xem và tương tác với trang web đó. Cùng với kiến
                thức Back-End PHP Laravel và My SQL tôi có thể kết nối với 1
                team Back-End PHP
              </p>
            </div>

            <div class={css.box}>
              <div class="flex justify-center">
                <img
                  className="w-60  h-60  object-cover"
                  src="./skills/customer-support.png"
                  alt="service image"
                  draggable="false"
                />
              </div>
              <a href="#">
                <h3>Support</h3>
              </a>
              <p>
                Tôi là 1 người vui vẻ, luôn nghĩ theo hướng tích cực để làm
                việc, sãn sàng chia sẽ giúp đỡ mọi người góp phần xây dựng đội
                nhóm, bộ phận nơi công tác góp phần phát triển và sớm đạt được
                các mục tiêu từ ban lãnh đạo đề ra.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Service;
