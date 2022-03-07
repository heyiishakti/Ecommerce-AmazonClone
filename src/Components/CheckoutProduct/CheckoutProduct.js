import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../Context/StateProvider";

function CheckoutProduct({ id, title, image, price }) {
  const [{ }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="CheckoutProduct">
      <img className="checkoutProductImage" src={image} alt=""></img>
      <div className="checkoutProductInfo">
        <p className="checkoutProductTitle">{title}</p>
        <div className="checkoutProductPrice">
          <small>₹</small>
          <strong>{price}</strong>
        </div>
        <button onClick={removeFromBasket}>Remove From Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
