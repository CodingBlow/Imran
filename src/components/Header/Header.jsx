import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
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
    path: "/service-Booking",
    display: "Services",
  },
  {
    path: "/home/allproducts",
    display: "All Products",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

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
                    Smart <br /> Eagar Enterprise
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>
            {/* Smart Eagar Enterprise */}

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Badshahpur Office</h4>
                  <h6>Haryana, 122101</h6>
                </div>
              </div>
            </Col>

            {/* Badshahpur Office
Teekali-Akhlimpur Road,
City- Badshahpur,
Haryana, Pin - 122101 */}

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>All Day</h4>
                  <h6>8am - 10pm</h6>
                </div>
              </div>
            </Col>

            <Col
  lg="2"
  md="3"
  sm="0"
  className="d-flex align-items-center justify-content-end"
  style={{ 
    gap: "20px"

   }}
>
  <button 
    className="header__btn btn"
    style={{
      whiteSpace: "nowrap",
      padding: "8px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
    }}
  >
    <a 
  href="tel:+919306174774" 
  style={{
    display: "flex",
    alignItems: "center",
    gap: "5px",
    textDecoration: "none"
  }}
>
  <i className="ri-phone-line"></i> Request a call
</a>

  </button>

  <button 
    className="whatsapp_button"
    style={{
      backgroundColor:"green",
      border: "none",
      padding: "8px 15px",
      borderRadius: "5px",
      transition: "background 0.3s",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }}
    // onMouseOver={(e) => e.currentTarget.style.background = "#128C7E"}
    // onMouseOut={(e) => e.currentTarget.style.background = "#25D366"}
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
  {/* <button 
    className="Login_button"
    style={{
      backgroundColor:"Blue",
      border: "none",
      padding: "8px 15px",
      borderRadius: "5px",
      transition: "background 0.3s",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }}
    // onMouseOver={(e) => e.currentTarget.style.background = "#128C7E"}
    // onMouseOut={(e) => e.currentTarget.style.background = "#25D366"}
  >
    <a 
      href="/Login" 
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
     Login
    </a>
  </button> */}
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
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
