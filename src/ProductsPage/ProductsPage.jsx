import React from "react";
import "./ProductsPage.css";
import productsData from "../assets/productsData";
import Sidebar from "../assets/sidebar";
import SearchBar from "../assets/searchBar";
import mainCourses from "../img/main courses image.png";
import sideDishes from "../img/side dishes icon.png";
import drinks from "../img/drinks icon.png";
import other from "../img/other dishes icon.png";
import cogIcon from "../img/cog icon.png";
import eyeIcon from "../img/eye icon.png";

function ProductsPage() {
  return (
    <div className="main-frame">
      <Sidebar />
      <div className="products-page-container">
        <div className="top-bar">
          <SearchBar />
        </div>
        <div className="products-nav">
          <div className="products-categories">
            <h4>
              <img src={mainCourses} style={{ marginRight: "8px" }} />
              Main courses
            </h4>
            <h4>
              <img src={sideDishes} style={{ marginRight: "8px" }} />
              Side dishes
            </h4>
            <h4>
              <img src={drinks} style={{ marginRight: "8px" }} />
              Drinks
            </h4>
            <h4>
              <img src={other} style={{ marginRight: "8px" }} />
              Other
            </h4>
          </div>
        </div>
        <div className="products-first-row">
          <div className="products-containers">
            <div className="products-container-image">Image</div>
            <div className="products-container-text">
              <h3>Cobb Salad</h3>
              <div className="products-container-weight">
                <p className="p-gray">410g</p>
              </div>
              <div className="products-container-description">
                <p className="p-small">
                  Romaine lettuce, chicken, bacon, hard-boiled eggs, tomatoes,
                  blue cheese.
                </p>
              </div>
              <div className="products-container-bottom">
                <p>8,99 €</p>
                <div className="products-container-buttons">
                  <button className="button-black-bordered">
                    <img src={eyeIcon} />
                  </button>
                  <button
                    className="button-black-bordered"
                    style={{ marginLeft: "8px" }}
                  >
                    <img src={cogIcon} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="products-containers">Caesar Salad</div>
          <div className="products-containers">Chicken Salad</div>
          <div className="products-containers">Greek Salad</div>
        </div>
        <div className="products-first-row">
          <div className="products-containers">Tuna Salad</div>
          <div className="products-containers">Pasta Salad</div>
          <div className="products-containers">Waldorf Salad</div>
          <div className="products-containers">Potato Salad</div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
