import React from "react";
import { useEffect, useState } from "react";
import Products from "../displayData/Products";
import "./shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Shop = () => {
  const [products, setProducts] = useState([]);

  //ei state ta child er click ke track krr
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("productData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddtoCart = (products) => {
    console.log("I am beign clicked from Shop.js", products);
    const newCart = [...cart, products];
    setCart(newCart);
  };

  return (
    <div className="shopContainer">
      <div className="productContainer">
        {/* <h3>Product here: {products.length} </h3> */}
        {products.map((item) => {
          return (
            <Products
              key={item.id}
              product={item}
              handleAddtoCart={handleAddtoCart}
            ></Products>
          );
        })}
      </div>
      <div className="cartContainer">
        <h4>Shop here</h4>
        <h4>Item:{cart.length}</h4>
      </div>
    </div>
  );
};

export default Shop;
