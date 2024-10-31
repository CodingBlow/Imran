import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content">
            {/* <h4 className="text-light mb-3">Rent an AC for Just $50/Da</h4> */}
            <h1 className="text-light mb-4">Stay Cool with Our AC Rentals!</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/ac">Rent Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content">
            {/* <h4 className="text-light mb-3">Washing Machine Rental at $30/Day</h4> */}
            <h1 className="text-light mb-4">Make Your LED Repair Easy!</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/inverter-rental">Rent Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content">
            {/* <h4 className="text-light mb-3">RO Water Purifier for $20/Day</h4> */}
            <h1 className="text-light mb-4">Ensure Safe Drinking Water!</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/ro-water-purifier-rental">Rent Now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider__item slider__item-04 mt0">
        <Container>
          <div className="slider__content">
            {/* <h4 className="text-light mb-3">RO Water Purifier for $20/Day</h4> */}
            <h1 className="text-light mb-4">Reliable Refrigerator Repairs – Keep It Cool!</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/refrigerator-rental">Rent Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
