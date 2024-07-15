import React from "react";
import Essentials from "./Essentials";
import GoogleMaps from "./GoogleMaps";
import "./HomePage.css";
import Navbar from "./Navbar";

export function HomePage() {
  return (
    <>
      <div className="Main">
        <div className="subheader bg-success text-white py-2">
          <h4>Welcome to M&S Organics - Delmarva Mediterranean Market!</h4>
        </div>
        <Essentials />
        <div className="space" />
        <GoogleMaps />
      </div>
    </>
  );
}

export default HomePage;
