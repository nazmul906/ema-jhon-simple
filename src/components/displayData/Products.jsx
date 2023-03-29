import React from "react";
import "./product.css";

const Products = (props) => {
  console.log("inside product", props.product);
  const { id, category, name, img, price, seller, ratings } = props.product;
  return (
    <div className="product">
      {/* remeber eta ke grid kra jabe na .er parent er css file e git krte hbe
    parent k seta inspect kre ber kro */}

      <img src={img}></img>
      <div className="productInfo">
        <h6 className="productName"> {name}</h6>
        <p className="price">Price: {price}</p>
        <p>manufacture:{seller}</p>
        <p>rating:{ratings}</p>
      </div>
      <button className="btnCart">Add to cart</button>
    </div>
  );
};

export default Products;
