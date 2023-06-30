import React from "react";

const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="row">
          <div class="brand-name">
            <a href="#" class="logo">
              CAO QUOC BINH
            </a>
          </div>
          <div class="menu">
            <i class="fa fa-bars"> </i>
          </div>
          <div class="navbar">
            <ul>
              <li>
                <a href="#home" class="active">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#about-me">Về bản thân tôi</a>
              </li>
              <li>
                <a href="#service">Dịch vụ</a>
              </li>
              <li>
                <a href="#resume">Tóm tắt</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
