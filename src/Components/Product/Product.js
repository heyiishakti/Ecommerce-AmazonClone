import React from "react";
import "./Product.css";
import { useStateValue } from "../../Context/StateProvider";

function Product({ id, title, image, price }) {
  const [{ }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
      },
    });
  };
  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        {/* <div className="productRating">
        {Array(rating)
          .fill()
          .map((_) => {
            <p>⭐</p>;
          })}
      </div> */}
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;

