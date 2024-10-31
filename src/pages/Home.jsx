import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import Service from "../components/ServicesCircle/Service";
import { Container, Row, Col } from "reactstrap";

import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";

import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import FindRental from "../components/UI/FindRental";
import HotOffers from "../components/HotOffer/HotOffer";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find Your Best Rental Service Here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindRental />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}

      {/* Choose your rental services */}
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center">
            <h6 className="section__subtitle">See our</h6>
            <h2 className="section__title">Popular Services</h2>
          </Col>

          <Service />
        </Row>
      </Container>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            <HotOffers />
          </Row>
        </Container>
      </section>

      {/* =========== become a Partner ============ */}
      <BecomeDriverSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* Google Map */}
      <GoogleMap />

      {/* =============== blog section =========== */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};

export default Home;
