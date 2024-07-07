import React from "react";
import Essentials from "./Essentials";
import GoogleMaps from "./GoogleMaps";
import "./HomePage.css";
import Navbar from "./Navbar";

export function HomePage() {
  return (
    <>
      <div className="Main">
        <Essentials />
        <a
          href="/components/Inventory"
          type="button"
          className="btn btn-lg InventoryBtn"
        >
          Check Out our Inventory!!!!
        </a>
        <GoogleMaps />
      </div>
    </>
  );
}

export default HomePage;
