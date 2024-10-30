import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const singleCarItem = carData.find((item) => item.Name === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.Name}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.Name}</h2>

                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${singleCarItem.Qprice}.00 Quartly , ${singleCarItem.Yprice}.00 Yearly
                  </h6>

                  <span className="d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">{singleCarItem.description}</p>

                <button 
                  style={{
                    background: "#000d6b",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "20px"
                  }}
                  onClick={() => navigate("/BookingForm")}
                >
                  Book Now
                </button>
              </div>
            </Col>

            <Col lg="12" className="mt-5">
              <div className="terms__conditions" style={{ marginTop: "50px" }}>
                <h4 className="mb-4">Terms & Conditions</h4>
                <div style={{ background: "#f8f9fa", padding: "20px", borderRadius: "10px" }}>
                  <h5>Payment Policy:</h5>
                  <p>The Rent, Security deposit and other charges (if any) has to be paid in full (one time) at the time of delivery or installation of AC.</p>
                  {/* <p>Mode of Payment: Google Pay, Phonepe, Paytm, UPI, IMPS, Net banking, Instant Bank transfer and Cash.</p> */}

                  <h5 className="mt-4">Security Deposit:</h5>
                  <p>A refundable security deposit of ₹2,000 is required and will be refunded at the time of product pickup.</p>

                  <h5 className="mt-4">Refund Policy:</h5>
                  <p>The rental amount is non-refundable even if the rented products are returned early (only the security deposit is refundable).</p>

                  <h5 className="mt-4">Delivery Policy:</h5>
                  <p>The customer or a representative must be present at the specified date and time to verify the item’s condition upon delivery, which must be returned in the same condition.</p>
                  <p>Delivered items can only be returned if they have significant defects or are non-functional. If an order is canceled post-delivery, a cancellation fee of ₹1,000 will apply.</p>

                  <h5 className="mt-4">Pick-Up Policy:</h5>
                  <p>Customers must notify us at least one week in advance for the product pickup.</p>

                  <h5 className="mt-4">Damage Policy:</h5>
                  <p>The customer is liable for any damages, loss, or theft of products and will be charged at the product’s market value.</p>

                  <h5 className="mt-4">Maintenance Policy:</h5>
                  <p>Product repair and maintenance are covered by our team at no additional cost, with a visit fee of ₹100/200 applicable based on distance, during the rental period.</p>

                  <h5 className="mt-4">Relocation Policy: </h5>
                  <p>Relocating the rented item to another location is prohibited. The item must remain at the original delivery and installation site. If the customer relocates the item independently, they will assume responsibility for all maintenance, and the security deposit will be forfeited.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;