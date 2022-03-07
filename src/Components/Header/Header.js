import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../Context/StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="headerLogo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon-logo"
        />
      </Link>
      <div className="searchBar">
        <input type="text" className="headerSearchBar" />
        <SearchIcon className="headerSearchIcon" />
      </div>

      <div className="headerNav">
        <Link to="/login" className="headerNavLinks">
          <div className="headerNavLinksOption">
            <span className="headerNavLinksOptionLineOne">Hello Shakti</span>
            <span className="headerNavLinksOptionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="headerNavLinks">
          <div className="headerNavLinksOption">
            <span className="headerNavLinksOptionLineOne">Return</span>
            <span className="headerNavLinksOptionLineTwo">& Order</span>
          </div>
        </Link>

        <Link to="/" className="headerNavLinks">
          <div className="headerNavLinksOption">
            <span className="headerNavLinksOptionLineOne">Your</span>
            <span className="headerNavLinksOptionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="headerNavLinks">
          <div className="headerOptionBasket">
            <ShoppingBasketIcon />
            <span className="headerNavLinksOptionLineTwo  headerBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;



