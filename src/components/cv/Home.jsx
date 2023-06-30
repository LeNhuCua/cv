import React from "react";

const Home = () => {
  return (
    <section class="home" id="home">
      <div class="container">
        <div class="row full-screen">
          <div class="home-content">
            <div class="block">
              <h6>
                <span class="hello">Xin chào nhà tuyển dụng</span>, Tôi là
              </h6>
              <span class="h1"> BINH</span>
              <h3>
                <span class="effect">
                  <span
                    class="typer"
                    data-colors="#dc3538"
                    id="main"
                    data-words="DESGINER.,
                                    FREELANCER., PHOTOGRAPHER.,WED
                                    DEVELOPER."
                    data-delay="100"
                    data-deletedelay="1000"
                  >
                    freelan
                  </span>
                  <span
                    class="cursor"
                    data-cursordisplay="|"
                    data-owner="main"
                    style="transition: all
                                    0.1s ease 0s; opacity: 1;"
                  >
                    |
                  </span>
                </span>
              </h3>
              <div class="cv-btn">
                <a
                  href="https://www.topcv.vn/xem-cv/BlcBUVQHWQEDUwMFVVVfBA8DAwAFVlcBXFtRAw3576"
                  target="_blank"
                  class="btn"
                >
                  DOWNLOAD CV EN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
