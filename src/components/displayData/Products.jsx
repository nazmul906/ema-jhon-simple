import React from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Products = (props) => {
  console.log("inside product", props);
  const { id, category, name, img, price, seller, ratings } = props.product;
  const handleAddtoCart = props.handleAddtoCart;
  // onno ekta componet e clicked krle pataite hoile eikhne avabe arrow func likhe hbena
  //  ekhetre  arrow func ta parent e declare kore thake props hisebe pataite hbe
  //   const handleClick = (id) => {
  //     console.log("clicked", id);
  //   };

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
      <button
        className="btnCart"
        onClick={() => handleAddtoCart(props.product)}
      >
        {/* jeheteo ei click krle product ta onno componet e jabe  */}
        <FontAwesomeIcon icon={faShoppingCart} />
        Add to cart
      </button>
    </div>
  );
};

export default Products;
