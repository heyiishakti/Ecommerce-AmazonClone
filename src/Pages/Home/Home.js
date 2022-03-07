import React from "react";
import "./Home.css";
import Product from "../../Components/Product/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="homeImage"
        src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
        alt=""
      />

      <div className="homeRow">
        <Product
          id="1"
          title="2021 Apple MacBook Pro (16-inch/41.05 cm, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Space Gray"
          price={187425}
          rating={5}
          image="https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_UY218_.jpg"
        />
        <Product
          id="2"
          title="Razer Blade 14 Gaming Laptop: AMD Ryzen 9 5900HX 8 Core, NVIDIA GeForce RTX 3080, 14  QHD 165Hz, 16GB RAM, 1TB SSD - CNC Aluminum - Chroma RGB - THX Spatial Audio - Vapor Chamber Cooling"
          price={346499}
          rating={5}
          image="https://m.media-amazon.com/images/I/611VQf95rxL._AC_UY218_.jpg"
        />
      </div>
      <div className="homeRow">
        <Product
          id="3"
          title="Apple iPhone 12 (128GB) - White"
          price={61000}
          rating={5}
          image="https://m.media-amazon.com/images/I/711wsjBtWeL._AC_UL320_.jpg"
        />
        <Product
          id="4"
          title="Google Pixel 4 XL (128GB, 6GB) 6.3'' 90Hz OLED, IP68 Water Resistant, Snapdragon 855, Fully Unlocked (T-Mobile, Verizon, AT&T, GoogleFi) (w/Fast Wireless Charging Pad, Black)"
          price={34950}
          rating={5}
          image="https://m.media-amazon.com/images/I/51-4eX-WmML._AC_UY218_.jpg"
        />

        <Product
          id="5"
          title="Samsung Electronics Galaxy Z Fold 3 5G Factory Unlocked Android Cell Phone US Version Smartphone Tablet 2-in-1 Foldable Dual Screen Under Display Camera 256GB Storage, Phantom Black"
          price={127500}
          rating={5}
          image="https://m.media-amazon.com/images/I/712zTX7XvxL._AC_UY218_.jpg"
        />
      </div>
      <div className="homeRow">
        <Product
          id="6"
          title="HUI YOU Professional Bitcoin Miner Supplier, Used - Very Good, Innosilicon A10 Pro ETH Miner 7G 720Mh/s Asic Miner,1300W Ethereum Mining Machine Include Compatible PSU FBA Shipping"
          price={1440000}
          rating={5}
          image="https://m.media-amazon.com/images/I/41awZb6zd9L._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
