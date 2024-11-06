import React, { useState, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/",
    display: "Rental Services",
  },
  {
    path: "/BookingForm",
    display: "Service maintenance",
  },
  {
    path: "/home/allproducts",
    display: "All Products",
  },
];

const Header = () => {
  const [searchQuery, setSearchQuery] = useState(""); // state to store search query
  const menuRef = useRef(null);
  const navigate = useNavigate(); // To navigate after search

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  // Handle the search action
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submit
    // Here, you can implement logic for handling the search query
    // For now, we will just navigate to a route with search query as a URL parameter
    if (searchQuery) {
      navigate(`/home/allproducts?search=${searchQuery}`); // Navigates to all products with search query
    }
  };

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +91-9306174774
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-tools-line"></i>
                    <span>
                      Smart <br /> Eager Enterprise
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Badshahpur Office</h4>
                  <h6>Haryana, 122101</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              {/* Empty Column for layout */}
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="d-flex align-items-center justify-content-end"
              style={{
                gap: "20px",
              }}
            >
              {/* Button for Request a Call */}
              <button
                className="header__btn btn"
                style={{
                  whiteSpace: "nowrap",
                  padding: "8px 15px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                <a
                  href="tel:+919306174774"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    textDecoration: "none",
                  }}
                >
                  <i className="ri-phone-line"></i> Request a call
                </a>
              </button>

              {/* Button for WhatsApp */}
              <button
                className="whatsapp_button"
                style={{
                  backgroundColor: "green",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  transition: "background 0.3s",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                <a
                  href="https://wa.me/919306186668"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0px",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <i className="ri-whatsapp-line"></i> WhatsApp
                </a>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery} // bind input value to searchQuery
                    onChange={(e) => setSearchQuery(e.target.value)} // update searchQuery on input change
                  />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
