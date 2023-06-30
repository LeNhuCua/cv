import React from "react";

const AboutMe = () => {
  return (
    <section class="about-me" id="about-me">
      <div class="container">
        <div class="row">
          <div class="section-title wow slideInLeft">
            <h1 class="title-section">
              {" "}
              <span> MỘT CHÚT VỀ BẢN THÂN TÔI</span>{" "}
            </h1>
            <p class="small">Information About Me</p>
          </div>
        </div>
        <div class="row">
          <div class="about-content wow fadeInUp" data-wow-delay="0.5s">
            <div class="img">
              <img
                src="./img/z2463379207179_b780827cdba025a5c9a5ffd3d5a821c4.jpg"
                alt="about-me"
              />
            </div>
            <div class="text">
              <h4>TÊN TÔI LÀ CAO QUỐC BÌNH</h4>
              <h6>
                I'm The <span>Fullstack Developer Javascript</span> Industry in
                <span>Đại học Công nghệ Sài Gòn ( STU ) </span> With{" "}
                <span>1 Years Of Experience.</span>
              </h6>
              <p>
                Tìm kiếm những cơ hội và thách thức trong nghề nghiệp, định
                hướng trở thành một Fullstack Developer Javascript Developer.
                Luôn cố gắng hoàn thành xuất sắc các công việc được giao, khai
                thác toàn bộ khả năng cũng như điểm mạnh của bản thân vào những
                đóng góp của bộ phận và công ty. Từ đó góp 1 phần đưa sản phẩm,
                bộ phận và công ty chất lượng hơn, phát triển hơn. Tạo tiền đề
                có cơ hội thăng tiến trở thành nhân viên chính thức của công ty.
              </p>
              <div class="info">
                <div class="list">
                  <label>Sinh nhật: </label>
                  <p>14th Jan 2001</p>
                </div>
                <div class="list">
                  <label>G-mail: </label>
                  <p>quocbinhgithub@gmail.com</p>
                </div>
                <div class="list">
                  <label>Tuổi: </label>
                  <p>22</p>
                </div>
                <div class="list">
                  <label>Số điện thoại: </label>
                  <p>03267-32670</p>
                </div>
                <div class="list">
                  <label>Tốt nghiệp: </label>
                  <p>Đại học Công nghệ Sài Gòn (STU) </p>
                </div>

                <div class="list">
                  <label>Địa chỉ: </label>
                  <p>Quận 8, thành phố Hồ Chí Minh</p>
                </div>
              </div>
              <div class="social-links">
                <a
                  href="https://www.facebook.com/profile.php?id=100079622545419"
                  target="_blank"
                >
                  <span class="fa fa-facebook fb"></span>
                </a>
                <a href="">
                  <span class="fa fa-instagram  ins" target="_blank"></span>
                </a>
                <a href="https://github.com/quocbinh-npm9081" target="_blank">
                  <span class="fab fa-github git"> </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
