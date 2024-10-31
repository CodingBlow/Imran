import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import { useNavigate } from "react-router-dom";

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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    category: "",
    service: "",
    details: ""
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "category") setFormData({ ...formData, service: "" });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://print-hub-cb65e-default-rtdb.firebaseio.com/Rent.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          category: "",
          service: "",
          details: ""
        });
        navigate("/");
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      setSubmissionStatus("error");
    }
  };

  return (
    <Form onSubmit={submitHandler} style={{ maxWidth: "500px", margin: "auto", padding: "20px", borderRadius: "8px", boxShadow: "0px 0px 15px rgba(0,0,0,0.1)" }}>
      <FormGroup style={{ marginBottom: "15px" }}>
        <Label for="firstName" style={{ fontSize: "14px", fontWeight: "bold" }}>First Name</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          style={{ borderRadius: "5px", padding: "10px" }}
        />
      </FormGroup>
      <FormGroup style={{ marginBottom: "15px" }}>
        <Label for="lastName" style={{ fontSize: "14px", fontWeight: "bold" }}>Last Name</Label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          style={{ borderRadius: "5px", padding: "10px" }}
        />
      </FormGroup>
      <FormGroup style={{ marginBottom: "15px" }}>
        <Label for="email" style={{ fontSize: "14px", fontWeight: "bold" }}>Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          required
          style={{ borderRadius: "5px", padding: "10px" }}
        />
      </FormGroup>
      <FormGroup style={{ marginBottom: "15px" }}>
        <Label for="phone" style={{ fontSize: "14px", fontWeight: "bold" }}>Phone Number</Label>
        <Input
          type="number"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleInputChange}
          required
          style={{ borderRadius: "5px", padding: "10px" }}
        />
      </FormGroup>
      <FormGroup style={{ marginBottom: "15px" }}>
        <Label for="address" style={{ fontSize: "14px", fontWeight: "bold" }}>Address</Label>
        <Input
          type="text"
          name="address"
          id="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleInputChange}
          required
          style={{ borderRadius: "5px", padding: "10px" }}
        />
      </FormGroup>
      {/* <FormGroup style={{ marginBottom: "15px" }}>
        <Label for="categorySelection" style={{ fontSize: "14px", fontWeight: "bold" }}>Select Category</Label>
        <Input
          type="select"
          name="category"
          id="categorySelection"
          value={formData.category}
          onChange={handleInputChange}
          required
          style={{ borderRadius: "5px", padding: "10px" }}
        >
          <option value="">Select a Category</option>
          {servicesList.map((item, index) => (
            <option key={index} value={item.category}>{item.category}</option>
          ))}
        </Input>
      </FormGroup> */}
      {formData.category && (
        <FormGroup style={{ marginBottom: "15px" }}>
          <Label for="serviceSelection" style={{ fontSize: "14px", fontWeight: "bold" }}>Select Service</Label>
          <Input
            type="select"
            name="service"
            id="serviceSelection"
            value={formData.service}
            onChange={handleInputChange}
            required={!!formData.category} // Only required if a category is selected
            style={{ borderRadius: "5px", padding: "10px" }}
          >
            <option value="">Select a Service</option>
            {servicesList
              .find((item) => item.category === formData.category)
              ?.services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
          </Input>
        </FormGroup>
      )}
      <FormGroup style={{ marginBottom: "15px" }}>
        <Label for="details" style={{ fontSize: "14px", fontWeight: "bold" }}>Additional Details</Label>
        <Input
          type="textarea"
          name="details"
          id="details"
          rows="5"
          placeholder="Write any additional details here"
          value={formData.details}
          onChange={handleInputChange}
          style={{ borderRadius: "5px", padding: "10px" }}
        />
      </FormGroup>
      <Button type="submit" color="primary" style={{ width: "100%", padding: "10px", borderRadius: "5px" }}>Submit</Button>
      
      {submissionStatus === "success" && <Alert color="success" style={{ marginTop: "15px" }}>Booking submitted successfully!</Alert>}
      {submissionStatus === "error" && <Alert color="danger" style={{ marginTop: "15px" }}>Error submitting the booking. Please try again.</Alert>}
    </Form>
  );
};

export default BookingForm;
