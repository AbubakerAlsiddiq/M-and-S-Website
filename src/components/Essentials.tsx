import React from "react";
import "./Essentials.css";
import PitaBread from "../assets/PitaBread.jpeg";
import OliveOil from "../assets/OliveOil.jpeg";
import FetaCheese from "../assets/FetaCheese.jpeg";
import Dates from "../assets/dates.jpeg";
import Hummus from "../assets/Hummus.jpg";
import Deli from "./Deli";

function Essentials() {
  return (
    <>
      <div className="Essentials-Container">
        <h1>M&S Essentials</h1>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active c-item">
              <div className="carousel-caption d-none d-md-block">
                <h5>Pita Bread</h5>
                <p>
                  A taste of tradition: Our pita bread is a classic
                  Mediterranean staple, made with simple & natural ingredients
                </p>
              </div>
              <img
                src={PitaBread}
                className="d-block w-100 c-img"
                alt="PitaBread"
              />
            </div>
            <div className="carousel-item c-item">
              <img
                src={OliveOil}
                className="d-block w-100 c-img"
                alt="OliveOil"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Olive Oils from all around the Meditteranean!</h5>
                <p>
                  The essence of the Mediterranean: Our olive oil is a
                  reflection of the region's rich heritage
                </p>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img
                src={FetaCheese}
                className="d-block w-100 c-img"
                alt="FetaCheese"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Feta Cheese</h5>
                <p>
                  A Mediterranean staple: Enjoy the rich flavor and velvety
                  texture of our premium feta cheese, made with love and care
                  from the finest ingredients
                </p>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img
                src={Dates}
                className="d-block w-100 c-img"
                alt="FetaCheese"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Dates</h5>
                <p>
                  Nature's candy from the Mediterranean: Enjoy the succulent
                  taste and numerous health benefits of our premium dates,
                  straight from the Mediterranean
                </p>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img
                src={Hummus}
                className="d-block w-100 c-img"
                alt="FetaCheese"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Hummus</h5>
                <p>
                  A taste of the Middle East: Our authentic hummus recipe brings
                  a flavorful and creamy delight to your table
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Essentials;
