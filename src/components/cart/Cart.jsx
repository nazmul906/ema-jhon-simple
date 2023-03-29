import React from "react";
import "./cart.css";
const Cart = ({ cart }) => {
  // const [cart] = props.cart;
  console.log("inside cart", cart);

  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    //get product from array of obj name cart
    console.log("product inside cart", product); //eta cart array er shb property ke iterate krbe but amdr drkr value so use dot(.)
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;
  return (
    <div className="cart">
      <h4>Shop Board</h4>
      <p>Selected item:{cart.length}</p>
      <p>Total Price:${total}</p>
      <p>Total Shipping: {totalShipping}</p>
      <p>Tax:{tax.toFixed(2)}</p>
      <p>grandTotal:{grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
