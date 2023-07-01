import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
const Hero = () => {
  return (
    <section id="home" className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="home"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="text-2xl"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Xin chào nhà tuyển dụng, Tôi là
            <br />
            <span className="primaryText inline-block mt-4"> Lê Như Của</span>
          </motion.span>

          <span className="secondaryText">Frontend Developer</span>

          <div className={css.socialLinks}>
            <a href="https://www.facebook.com/cua.le.7374480/" target="_blank">
              <span className={` ${css.fb}`}>
                {" "}
                <BiLogoFacebookCircle className={`${css.fb} ${css.size}`} />
              </span>
            </a>

            <a href="https://github.com/LeNhuCua/" target="_blank">
              <span className={` ${css.git}`}>
                {" "}
                <AiFillGithub className={`${css.git} ${css.size}`} />
              </span>
            </a>
          </div>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./anhnencv.jpg"
            alt=""
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
