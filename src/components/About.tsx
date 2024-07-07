import React from "react";
import MandS from "../assets/Owners photo.jpg";
import "./About.css";

function About() {
  return (
    <div>
      <p className="par">
        M&S Organics also known as Delmarva Mediterranean Market is a small
        family run business that has been up & running since 2010. The M & S
        stand for Mohamed and Somia the dynamic duo behind the market. M&S
        openend up the store with the primary goal of promoting healthier living
        through food & share a little bit of thei own & many other cultures to
        the community with their inventory and presence in the community. M&S
        carries a variety of goods from organics to Mediterranean goods and
        plenty more!We hope you enjoy our selection, Thank you for visiting &
        happy hunting!
      </p>
      <div className="image-container">
        <div className="caption">
          M & S on February 15,2010 at the opening ceremony of the store
        </div>
        <img src={MandS} alt="M&S" className="AboutImg" />
      </div>
    </div>
  );
}

export default About;
