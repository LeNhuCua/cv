import React from 'react'

const SkillsBox = () => {
  return (
    <section class="skills-box">
        <div class="container">
            <div class="row">
                <div class="text">
                    <h2 class="title-section"> <span> Kỹ năng chuyên môn</span> </h2>
                    <p style="line-height: 30px;">Bắt đầu có hứng thú với lập trình website cuối năm 2019, định hướng được con đường của mình trong tương lai. Bản thân tôi đã tìm đến các tài liệu lập trình trên Internet, học tập và cố gắng từng ngày.
                    </p>
                    <br/>
                    <a href="https://www.topcv.vn/xem-cv/BlcBUVQHWQEDUwMFVVVfBA8DAwAFVlcBXFtRAw3576" target="_blank">
                        <span>Download CV</span>
                    </a>
                </div>
                <div class="skills-effect">
                    <div style="display: flex;">

                        <div class="skills">
                            <img src="./img/skills/html-5.png" alt="HTML"/>
                            <h4 class="desc">Html</h4>
                        </div>
                        <div class="skills">
                            <img src="./img/skills/css.png" alt="CSS"/>
                            <h4 class="desc">Css</h4>
                        </div>
                        <div class="skills">
                            <img src="./img/skills/sass.png" alt="SASS"/>
                            <h4 class="desc">Scss</h4>
                        </div>
                        <div class="skills">
                            <img src="./img/skills/javascript.png" alt="JAVASCRIPT"/>
                            <h4 class="desc">Javascript (ES5/ ES6)</h4>
                        </div>
                    </div>

                    <div style="display: flex;">

                        <div class="skills">
                            <img src="./img/skills/react.png" alt="REACTJS"/>
                            <h4 class="desc">ReactJS</h4>
                        </div>
                        <div class="skills">
                            <img src="./img/skills/nodejs.png" alt="NODEJS"/>
                            <h4 class="desc">NodeJS (ExpressJS)</h4>
                        </div>
                        <div class="skills">
                            <img src="./img/skills/icons8-mongodb-480.png" alt="MongoDB"/>

                            <h4 class="desc">MongoDB</h4>
                        </div>
                        <div class="skills">
                            <img src="./img/skills/github.png" alt="GITHUB"/>
                            <h4 class="desc">GitHub</h4>
                        </div>
                    </div>
                    <div style="display: flex;">

                        <div class="skills">
                            <img src="./img/skills/adobe-photoshop.png" alt="PHOTOSHOP"/>
                            <h4 class="desc">Photoshop</h4>
                        </div>
                        <div class="skills">
                            <img src="./img/skills/experience.png" alt="XD"/>
                            <h4 class="desc">Adobe XD</h4>
                        </div>
                        <div class="skills">
                            <img src="./img/skills/kisspng-bootstrap-logo-computer-software-web-application-p-b-5abb6c2ab15640.3860806115222323627264.png" alt="BOOTSTRAP"/>
                            <h4 class="desc">Bootstrap</h4>
                        </div>
                        <div class="skills">
                            <img src="./img/skills/tailwind-css.png" alt="TAILWINDCSS"/>
                            <h4 class="desc">TailwindCss</h4>
                        </div>
                    </div>
                    <div style="display: flex;">
                        <div class="skills">
                            <img src="./img/skills/typescript.png" alt="TYPESCRIPT"/>
                            <h4 class="desc">Typescript</h4>
                        </div>
                        <div class="skills">
                            <img src="./img/skills/material.png" alt="MATERIAL"/>
                            <h4 class="desc">Material UI</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    </section>
  )
}

export default SkillsBox