import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div >
   
          <span className="primaryText">
            CV <a href="mailto:cua.ln.61cntt@gmail.com">Lê Như Của</a>
          </span>
        </div>


      </motion.div>
    </motion.section>
  );
};

export default Footer;
