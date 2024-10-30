import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  { path: "/about", display: "About" },
  { path: "/Privacy_Policy", display: "Privacy Policy" },
  { path: "/services", display: "Services" },
  // { path: "/blogs", display: "Blog" },
  { path: "/contact", display: "Contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i className="ri-tools-line"></i>
                  <span>
                  Smart <br /> Eagar Enterprise
                     {/* Smart Eagar Enterprise */}
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              We provide top-quality rental services, covering a wide range of essential appliances and equipment—from ACs and refrigerators to construction tools and water purifiers. Our commitment is to make reliable, high-quality rentals accessible and convenient.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
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
              <h5 className="footer__link-title">Head Office</h5>
              <p className="office__info">Badshahpur Office
               Teekali-Akhlimpur Road,
               City- Badshahpur,
               Haryana, Pin - 122101</p>
              <p className="office__info">Phone : +91-9306174774</p>
              <p className="office__info">Email : Info@smarteagar.com</p>
              <p className="office__info">Office Time : 08am - 10pm</p>
            </div>
          </Col>
           {/* Badshahpur Office
Teekali-Akhlimpur Road,
City- Badshahpur,
Haryana, Pin - 122101 */}

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe to our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Developed by 
                <a href="https://www.zuridox.com" target="_blank" rel="noopener noreferrer"> Zuridox</a>. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
