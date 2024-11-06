import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const quickLinks = [
  { path: "/about", display: "About Us" },
  { path: "/service-Booking", display: "Services" },
  { path: "/contact", display: "Contact" },
];

const policies = [
  { path: "/terms", display: "Terms and Conditions" },
  { path: "/refunds", display: "Shipping Policy" },
  { path: "/Return-Pol", display: "Cancellation & Return Policy" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <style>{`
        .footer {
          background: #000d6b;
          padding-top: 50px;
          padding-bottom: 15px;
          margin-top: 5%;
        }
        .footer__logo i {
          color: #fff;
          font-weight: 400;
        }
        .footer__logo span {
          color: #fff;
          font-weight: 500;
        }
        .footer__logo-content {
          color: rgba(255, 255, 255, 0.715);
          margin-top: 15px;
          line-height: 30px;
        }
        .quick__link {
          border: none !important;
          background: transparent !important;
        }
        .quick__link a {
          color: rgba(255, 255, 255, 0.715);
          text-decoration: none;
          font-weight: 300;
          transition: 0.3s;
        }
        .quick__link a:hover {
          color: #f9a826;
        }
        .footer__link-title {
          color: #fff;
        }
        .office__info {
          color: rgba(255, 255, 255, 0.715);
          font-weight: 300;
        }
        .newsletter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          border: 1px solid #7c8a972f;
          border-radius: 50px;
          background: #020a4de9;
        }
        .newsletter input {
          background: transparent;
          color: #fff;
          border: none;
          outline: none;
        }
        .newsletter span i {
          color: #fff;
        }
        .footer__bottom {
          border-top: 1px solid #7c8a972f;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          text-align: center;
          flex-wrap: wrap;
        }

        .footer__bottom p {
          margin: 5px 0;
        }

        /* Media queries for responsiveness */
        @media only screen and (max-width: 992px) {
          .footer {
            padding-top: 40px;
            padding-bottom: 20px;
          }
          .footer__logo-content {
            font-size: 0.9rem;
          }
          .quick__link,
          .office__info {
            font-size: 0.9rem;
            line-height: 1.5rem;
          }
          .footer__link-title {
            font-size: 1.1rem;
            margin-top: 20px;
          }
          .footer__bottom p {
            font-size: 0.8rem;
          }
          .newsletter {
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            padding: 12px;
          }
          .newsletter input {
            margin-bottom: 10px;
            font-size: 0.9rem;
          }
          .newsletter span {
            display: block;
            text-align: center;
          }
        }

        @media only screen and (max-width: 768px) {
          .footer {
            padding-top: 30px;
            padding-bottom: 25px;
          }
          .footer__logo-content {
            font-size: 0.8rem;
            text-align: center;
          }
          .quick__link,
          .office__info {
            font-size: 0.8rem;
            line-height: 1.5rem;
          }
          .footer__link-title {
            font-size: 1rem;
            margin-top: 15px;
          }
          .footer__bottom {
            text-align: center;
            font-size: 0.7rem;
            padding: 15px 0;
            flex-direction: column;  /* Stack the content in mobile */
          }
          .newsletter {
            width: 100%;
            margin-top: 10px;
          }
          .newsletter input {
            font-size: 0.85rem;
          }
          .newsletter span {
            font-size: 1.2rem;
            margin-top: 10px;
          }
        }

        @media only screen and (max-width: 576px) {
          .footer__logo-content {
            font-size: 0.75rem;
            text-align: center;
          }
          .quick__link,
          .office__info {
            font-size: 0.75rem;
            line-height: 1.4rem;
          }
          .footer__link-title {
            font-size: 0.9rem;
            margin-top: 10px;
          }
          .footer__bottom {
            font-size: 0.65rem;
            padding: 12px 0;
          }
          .newsletter {
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            padding: 10px;
          }
          .newsletter input {
            font-size: 0.75rem;
          }
          .newsletter span {
            font-size: 1.1rem;
            margin-top: 8px;
          }

          /* Adjustments for copyright and Zuridox on mobile */
          .footer__bottom p {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .footer__bottom p span {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .footer__bottom p span i {
            margin-right: 5px; /* Space between the copyright icon and year */
          }

          .footer__bottom p a {
            color: #f9a826;
            text-decoration: none;
          }
        }
      `}</style>
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i className="ri-tools-line"></i>
                  <span>
                    Smart <br /> Eager Enterprise
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              We provide top-quality rental services, covering a wide range of
              essential appliances and equipment—from ACs and refrigerators to
              construction tools and water purifiers. Our commitment is to make
              reliable, high-quality rentals accessible and convenient.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Company</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Policies</h5>
              <ListGroup>
                {policies.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Head Office</h5>
              <p className="office__info">Badshahpur Office</p>
              <p className="office__info">
                Teekali-Akhlimpur Road, City- Badshahpur, Haryana, Pin - 122101
              </p>
              <p className="office__info">Phone: +91-9306174774</p>
              <p className="office__info">Email: Info@smartEager.com</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer__bottom">
  <p>
    <span>
      <i className="ri-copyright-line"></i> Copyright {year}{" "}
    </span>
    <span>
      <a
        href="https://zuridox.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zuridox  &nbsp; 
      </a>
    </span>
  </p>
  <p> All rights reserved. Smart Eager Enterprise</p>
</div>

    </footer>
  );
};

export default Footer;
