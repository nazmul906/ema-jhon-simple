import React from "react";
import { useEffect, useState } from "react";
import Products from "../displayData/Products";
import Cart from "../cart/Cart";
import "./shop.css";

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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
