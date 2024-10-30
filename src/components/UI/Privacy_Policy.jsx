import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import "../../styles/Privacy_policy.css";
import CommonSection from "./CommonSection";

const PrivacyPolicy = () => {
  return (
    <Helmet title="Privacy Policy">
        <CommonSection title="Privacy Policy" />
      <section className="privacy__policy">
        <Container>
          <Row>
            <Col lg="12">
              <div className="privacy__content">
                <h2 className="policy__title">Terms & Conditions</h2>

                <div className="policy__section">
                  <h4>Payment Policy</h4>
                  <p>The rental fee, security deposit, and any additional charges must be paid in full at the time of AC delivery or installation.</p>
                </div>

                <div className="policy__section">
                  <h4>Accepted Payment Methods</h4>
                  <p>Google Pay, PhonePe, Paytm, UPI, IMPS, Net banking, direct bank transfer, and cash are all accepted.</p>
                </div>

                <div className="policy__section">
                  <h4>Security Deposit</h4>
                  <p>A refundable security deposit of ₹2,000 is required and will be refunded at the time of product pickup.</p>
                </div>

                <div className="policy__section">
                  <h4>Refund Policy</h4>
                  <p>The rental amount is non-refundable even if the rented products are returned early (only the security deposit is refundable).</p>
                </div>

                <div className="policy__section">
                  <h4>Delivery Policy</h4>
                  <p>The customer or a representative must be present at the specified date and time to verify the item's condition upon delivery, which must be returned in the same condition.</p>
                  <p>Delivered items can only be returned if they have significant defects or are non-functional. If an order is canceled post-delivery, a cancellation fee of ₹1,000 will apply.</p>
                </div>

                <div className="policy__section">
                  <h4>Pickup Policy</h4>
                  <p>Customers must notify us at least one week in advance for the product pickup.</p>
                </div>

                <div className="policy__section">
                  <h4>Damage Policy</h4>
                  <p>The customer is liable for any damages, loss, or theft of products and will be charged at the product's market value.</p>
                </div>

                <div className="policy__section">
                  <h4>Maintenance Policy</h4>
                  <p>Product repair and maintenance are covered by our team at no additional cost, with a visit fee of ₹100/200 applicable based on distance, during the rental period.</p>
                </div>

                <div className="policy__section">
                  <h4>Relocation Policy</h4>
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

export default PrivacyPolicy;