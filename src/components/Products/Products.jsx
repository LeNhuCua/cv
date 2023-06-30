import React from "react";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import css from "./Products.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textVariant,
  footerVariants,
  zoomIn,
} from "../../utils/motion.js";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillEye, AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Tippy from "@tippyjs/react";
import { ProductList } from "../../utils/data";
const Products = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${css.products}} section-title bg-[rgb(232,236,244)] `}
    >
      <a className="anchor" id="products"></a>
      <div className="wrapper">
        <h1 className="primaryText yPaddings flexCenter">
          {" "}
          <span> MỘT VÀI SẢN PHẨM</span>
        </h1>
      </div>

      <div class="row">
        <div class={`${css.serviceContent}  ${css.fadeInDown}`}>
          <motion.div
          variants={fadeIn("up", "tween", .5, .6)}
            class={`grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  items-center  gap-4 ${css.portfolioGallery}  fadeInUp`}
          >
            {ProductList.map((product, index) => (
              <div class={css.item}>
                <img
                  src={product.image}
                  alt="portfolio "
                />
                <div class={css.overlay}>
                  <Tippy content="Liên kết">
                    <a
                      href={product.link}
                      target="_blank "
                      rel="noopener noreferrer "
                    >
                      <AiOutlineLink />
                    </a>
                  </Tippy>
                  <Tippy content="Demo">
                    <a
                      href={product.demo}
                      target="_blank "
                      rel="noopener noreferrer "
                    >
                      <AiFillEye />
                    </a>
                  </Tippy>
                </div>
                <div class={css.portfolioText}>

                  <h4 className="text-white text-lg font-bold">{product.name}</h4>
                  <h5 className="text-white text-sm ">
                  {product.info}
                  </h5>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Products;
