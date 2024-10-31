import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import driverImg from "../../assets/all-images/toyota-offer-2.png"; // Consider updating this image to reflect your services

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Service Provider" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
            Expert Repairs & Reliable Rental Services for Your Home Essentials
            </h2>
            <p className="section__description">
            Get expert repairs and reliable services in AC rentals, washing machines, RO water purifiers, and more!
            </p>

            <button 
            className="btn become__driver-btn mt-4">
              <Link
              to="/BookingForm"
              style={{
                textDecoration: "none"
              }}
              >
              Repair Now
              </Link>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
