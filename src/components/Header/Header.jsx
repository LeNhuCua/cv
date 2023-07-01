import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import {  BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";


const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 20
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  const [activeMenuItem, setActiveMenuItem] = useState("");
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper} header-section`}
      viewport={{ once: true, amount: 0.25 }}

      // style={headerShadow}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <a href="/" className={css.name}>
          Lê Như Của
        </a>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
         
          <li
            className={activeMenuItem === "experties" ? css.activeMenuItem : ""}
            onClick={() => setActiveMenuItem("experties")}
          >
             
            <a href="#home">Trang chủ</a>
          </li>
          <li
            className={activeMenuItem === "about-me" ? css.activeMenuItem : ""}
            onClick={() => setActiveMenuItem("about-me")}
          >
            <a href="#about-me">Về bản thân tôi</a>
          </li>
          <li
            className={activeMenuItem === "service" ? css.activeMenuItem : ""}
            onClick={() => setActiveMenuItem("service")}
          >
            <a href="#service">Dịch vụ</a>
          </li>
          <li
            className={activeMenuItem === "products" ? css.activeMenuItem : ""}
            onClick={() => setActiveMenuItem("products")}
          >
            <a href="#products">Sản phẩm</a>
          </li>
        </ul>

        {/* for medium and small screens */}
        {menuOpened ? (
          <div
            className={css.menuIcon}
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <AiOutlineClose size={30} />
          </div>
        ) : (
          <div
            className={css.menuIcon}
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenu size={30} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
