import React from "react";
import { useEffect, useState } from "react";
import Products from "../displayData/Products";
import "./shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("productData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shopContainer">
      <div className="productContainer">
        {/* <h3>Product here: {products.length} </h3> */}
        {products.map((item) => {
          return <Products key={item.id} product={item}></Products>;
        })}
      </div>
      <div className="cartContainer">
        <h4>Shop here</h4>
      </div>
    </div>
  );
};

export default Shop;
