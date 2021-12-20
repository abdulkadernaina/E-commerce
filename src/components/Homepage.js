import React from "react";
import ProductType from "../components/category";
import homescreen from "../images/home_screen.jpg";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <img src={homescreen} id="main_img" alt="" />
      </div>
      <h1 className="d-flex justify-content-start">Electronics</h1>
      <div className="d-flex" id="electronics">
        <ProductType name="electronics" />
      </div>
      <h1 className="d-flex justify-content-start">Mens</h1>
      <div className="d-flex" id="mens">
        <ProductType name="Mens" />
      </div>
      <h1 className="d-flex justify-content-start">Womens</h1>
      <div className="d-flex" id="women">
        <ProductType name="Women" />
      </div>
      <h1 className="d-flex justify-content-start">Kids</h1>
      <div className="d-flex" id="kids">
        <ProductType name="Kids" />
      </div>
      <h1 className="d-flex justify-content-start">Home Appliances</h1>
      <div className="d-flex" id="homeappliances">
        <ProductType name="HomeAppliances" />
      </div>
    </div>
  );
};

export default Homepage;
