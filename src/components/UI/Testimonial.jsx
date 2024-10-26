import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "I rented an AC unit for a summer event, and it worked perfectly! The service was prompt and professional. Highly recommend!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="Customer 1" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Alice Smith</h6>
            <p className="section__description">Event Planner</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "The washing machine rental was a lifesaver during my house renovation. Fast delivery and easy setup!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="Customer 2" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p className="section__description">Homeowner</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "I recently rented a RO water purifier, and it’s been a game changer! Clean water at my convenience."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="Customer 3" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Sara Johnson</h6>
            <p className="section__description">Health Conscious</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "I rented construction equipment for my project, and the quality was excellent. Will definitely rent again!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="Customer 4" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Michael Lee</h6>
            <p className="section__description">Contractor</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
