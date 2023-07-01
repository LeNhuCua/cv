import React from "react";
import { aboutLanguage } from "../../utils/data";
import css from "./AboutMe.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.js";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

const AboutMe = () => {
  return (
    <section className={`${css.wrapper} section-title `}>
      <a className="anchor" id="about-me"></a>
      <div className="wrapper">
        <h1 className="primaryText yPaddings flexCenter">
          {" "}
          <span> MỘT CHÚT VỀ BẢN THÂN TÔI</span>
        </h1>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        {/* left side */}
        <div className={css.leftSide}>
          {aboutLanguage.map((exp, i) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={css.exp}
                key={i}
              >
                <div className="flexCenter ">
                  {/* <exp.icon size={25} color="white" /> */}
                  <img src={exp.img} alt="" srcSet="" />
                </div>
                <div>
                  <span className="secondaryText">{exp.projects}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* right */}
        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="primaryText">Tên tôi là Lê Như Của </span>
          <span className={`secondaryText ${css.text}`}>
            Mục tiêu của tôi là Fullstack Developer Javascript
          </span>
          <p className="secondaryText">
            Tìm kiếm những cơ hội và thách thức trong nghề nghiệp, định hướng
            trở thành một Fullstack Developer Javascript Developer. Luôn cố gắng
            hoàn thành xuất sắc các công việc được giao, khai thác toàn bộ khả
            năng cũng như điểm mạnh của bản thân vào những đóng góp của bộ phận
            và công ty. Từ đó góp 1 phần đưa sản phẩm, bộ phận và công ty chất
            lượng hơn, phát triển hơn. Tạo tiền đề có cơ hội thăng tiến trở
            thành nhân viên chính thức của công ty.
          </p>
          <div className={css.info}>
            <div className={css.list}>
              <label>Sinh nhật: </label>
              <p>08/05/2001</p>
            </div>
            <div className={css.list}>
              <label>G-mail: </label>
              <a href="mailto:cua.ln.61cntt@gmail.com">cua.ln.61cntt@gmail.com</a>
            </div>
            <div className={css.list}>
              <label>Tuổi: </label>
              <p>23</p>
            </div>
            <div className={css.list}>
              <label>Số điện thoại: </label>
              <p>0776223708</p>
            </div>
            <div className={css.list}>
              <label>Tốt nghiệp: </label>
              <p>Đại học Nha Trang (NTU) </p>
            </div>

            <div className={css.list}>
              <label>Địa chỉ: </label>
              <p>Nha Trang - Khánh Hoà</p>
            </div>
          </div>
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
