import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import services from "../HotServices";
import AllItems from "../AllProducts/AllProductItems"; // Make sure to use PascalCase for component names

const AllProduct = () => {
  return (
    <Helmet title="All Products">
      <CommonSection title="Available Products" />
      <section>
        <Container>
          <Row>
            {services.map((item) => (
              <Col lg="4" md="6" key={item.id}> {/* Use item.id if it's unique */}
                <AllItems item={item} /> {/* Use PascalCase for the component */}
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllProduct;
