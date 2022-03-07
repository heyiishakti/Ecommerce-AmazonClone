import React from "react";
import { useStateValue } from "../../Context/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "../../Components/CheckoutProduct/CheckoutProduct";
// import CurrencyFormat from "react-currency-format";
import Subtotal from "../../Components/Subtotal/Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          className="checkoutAd"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empty</h2>
            <p>
              You have no items in your basked. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkoutTitle">Your Shopping Cart</h2>
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              // rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkoutRight">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
