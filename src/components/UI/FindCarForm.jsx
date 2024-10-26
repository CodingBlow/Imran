import React from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <label htmlFor="delivery-address">Delivery Address</label>
          <input
            type="text"
            id="delivery-address"
            placeholder="Enter Delivery Address"
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <label htmlFor="rental-start-date">Rental Start Date</label>
          <input type="date" id="rental-start-date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <label htmlFor="rental-end-date">Rental End Date</label>
          <input type="date" id="rental-end-date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Service</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
