import React from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import css from "./styles/App.module.scss";
import Service from "./components/service/Service";
import Products from "./components/Products/Products";

import AboutMe from "./components/AboutMe/AboutMe";
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero/>
      <AboutMe />
      <Service />
      <Products />
   



      <Footer />
    </div>
  );
};

export default App;
