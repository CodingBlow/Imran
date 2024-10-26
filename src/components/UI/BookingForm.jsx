import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const servicesList = [
  { category: "AC", services: ["AC On Rent", "Service & Repair", "Install & Uninstall", "A.C PCB Repair", "Gas refilling"] },
  { category: "Room Oil Heater", services: ["Oil Heater On Rent", "Service & Repair"] },
  { category: "Electrician & Plumber", services: ["Electrician Service & Repair", "Plumber Servicing"] },
  { category: "Inverter", services: ["Inverter Repair & Service", "Inverter Installation"] },
  { category: "Construction Equipment", services: ["Concrete hammer m/c (Small)", "Concrete hammer m/c (Big)"] },
  { category: "Refrigerator", services: ["Refrigerator On Rent", "Service & Repair", "Install & Uninstall", "Gas refilling"] },
  { category: "Geyser", services: ["Geyser On Rent", "Service & Repair"] },
  { category: "RO Water Purifier", services: ["RO On Rent", "RO Servicing", "RO Repair"] },
  { category: "Washing Machine", services: ["On Rent", "Service & Repair"] },
  { category: "LED/Television", services: ["LED On Rent", "Install & Uninstall"] }
];

const BookingForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted", { selectedCategory, selectedService });
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedService(""); // Reset the service when category changes
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" required />
      </FormGroup>

      <FormGroup className="booking__form mb-4">
        <input type="text" placeholder="Address" required />
      </FormGroup>

      <FormGroup className="booking__form mb-4">
        <Label for="categorySelection">Select Category</Label>
        <Input
          type="select"
          name="category"
          id="categorySelection"
          onChange={handleCategoryChange}
          required
        >
          <option value="">Select a Category</option>
          {servicesList.map((item, index) => (
            <option key={index} value={item.category}>{item.category}</option>
          ))}
        </Input>
      </FormGroup>

      {selectedCategory && (
        <FormGroup className="booking__form mb-4">
          <Label for="serviceSelection">Select Service</Label>
          <Input
            type="select"
            name="service"
            id="serviceSelection"
            onChange={(e) => setSelectedService(e.target.value)}
            required
          >
            <option value="">Select a Service</option>
            {servicesList
              .find((item) => item.category === selectedCategory)
              .services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
          </Input>
        </FormGroup>
      )}

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write any additional details here"
        ></textarea>
      </FormGroup>

      <Button type="submit" className="btn btn-primary">Submit</Button>
    </Form>
  );
};

export default BookingForm;
