import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, Name, Yprice, Qprice } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{Name}</h4>
          <h6 className="rent__price text-center mt-">
            ${Yprice}.00 <span>/ Yearly</span> , ${Qprice}.00{" "}
            <span>/ Quartarly</span>
          </h6>

          <button className="w-50 car__item-btn car__btn-rent">
            <Link
              to={`/cars/${Name}`}
              className="w-100 h-100 d-flex align-items-center justify-content-center text-decoration-none text-white"
            >
              Rent
            </Link>
          </button>

          <button className="w-50 car__item-btn car__btn-details">
            <Link
              to={`/cars/${Name}`}
              className="w-100 h-100 d-flex align-items-center justify-content-center text-decoration-none text-white"
            >
              Details
            </Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
