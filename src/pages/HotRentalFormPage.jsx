// RentalFormPage.js
import React from "react";
import { useLocation } from "react-router-dom";

const RentalFormPage = () => {
  const location = useLocation();
  const service = location.state?.service;

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h3>Booking Details</h3>
      <img
        src={service.image}
        alt={service.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <p>{service.name}</p>

      <form>
        <div style={formGroupStyle}>
          <label>Full Name*</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label>WhatsApp Number*</label>
          <input
            type="text"
            placeholder="Enter WhatsApp Number"
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label>Alternate Number*</label>
          <input
            type="text"
            placeholder="Enter Alternate Number"
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label>Email*</label>
          <input
            type="email"
            placeholder="Enter Email"
            required
            style={inputStyle}
          />
        </div>
       
        <div style={formGroupStyle}>
          <label>Delivery Address*</label>
          <input
            type="text"
            placeholder="Enter Delivery Address"
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label>Message (Optional)</label>
          <textarea
            placeholder="Any additional message"
            style={textareaStyle}
          ></textarea>
        </div>
        <button type="submit" style={submitButtonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

// Styles for form components
const formGroupStyle = { marginBottom: "15px" };
const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};
const textareaStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  minHeight: "60px",
};
const submitButtonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px 15px",
  borderRadius: "4px",
  cursor: "pointer",
  border: "none",
  width: "100%",
};

export default RentalFormPage;
