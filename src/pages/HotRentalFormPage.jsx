import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const RentalFormPage = () => {
  const location = useLocation();
  const service = location.state?.service;
  const selectedVariant = location.state?.selectedVariant; // Get the selected variant from state
  const selectedDuration = location.state?.selectedDuration; // Get the selected duration from state

  const [fullName, setFullName] = useState("");
  const [whatsappNumber, setWhatsAppNumber] = useState("");
  const [alternateNumber, setAlternateNumber] = useState("");
  const [email, setEmail] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // To track submission state
  const [submitSuccess, setSubmitSuccess] = useState(false); // To track submission success
  const [submitError, setSubmitError] = useState(null); // To track submission error
  const navigate = useNavigate();
  if (!service) {
    return <p>Service not found</p>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    setIsSubmitting(true); // Set submitting state to true
    setSubmitSuccess(false); // Reset success state
    setSubmitError(null); // Reset error state
   
    // Form data including the service name
    const formData = {
      serviceName: service.name, // This sends the service name to the backend
      selectedVariant,
      selectedDuration,
      fullName,
      whatsappNumber,
      alternateNumber,
      email,
      deliveryAddress,
      message,
    };

    try {
      const response = await fetch(
        "https://print-hub-cb65e-default-rtdb.firebaseio.com/booking.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        setSubmitSuccess(true); // Set success state to true
        // Optionally reset form fields
        setFullName("");
        setWhatsAppNumber("");
        setAlternateNumber("");
        setEmail("");
        setDeliveryAddress("");
        setMessage("");
        toast.success("Booking submitted successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        navigate("/");
      } else {
        throw new Error("Submission failed: " + response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitError(
        "An error occurred while submitting the form. Please try again."
      ); // Set error state
      toast.error(
        "An error occurred while submitting the form. Please try again.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        }
      );
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

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

      {/* Display selected variant and duration */}
      <div style={{ margin: "10px 0" }}>
        <strong>Selected Variant:</strong> {selectedVariant} <br />
        <strong>Selected Duration:</strong> {selectedDuration} <br />
      </div>

      {submitSuccess && (
        <p style={{ color: "green" }}>Form submitted successfully!</p>
      )}
      {submitError && <p style={{ color: "red" }}>{submitError}</p>}

      <form onSubmit={handleSubmit}>
        <input type="hidden" value={selectedVariant} name="selectedVariant" />
        <input type="hidden" value={selectedDuration} name="selectedDuration" />

        <div style={formGroupStyle}>
          <label>Full Name*</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            required
            style={inputStyle}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div style={formGroupStyle}>
          <label>WhatsApp Number*</label>
          <input
            type="text"
            placeholder="Enter WhatsApp Number"
            required
            style={inputStyle}
            value={whatsappNumber}
            onChange={(e) => setWhatsAppNumber(e.target.value)}
          />
        </div>
        <div style={formGroupStyle}>
          <label>Alternate Number*</label>
          <input
            type="text"
            placeholder="Enter Alternate Number"
            required
            style={inputStyle}
            value={alternateNumber}
            onChange={(e) => setAlternateNumber(e.target.value)}
          />
        </div>
        <div style={formGroupStyle}>
          <label>Email*</label>
          <input
            type="email"
            placeholder="Enter Email"
            required
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={formGroupStyle}>
          <label>Delivery Address*</label>
          <input
            type="text"
            placeholder="Enter Delivery Address"
            required
            style={inputStyle}
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
          />
        </div>
        <div style={formGroupStyle}>
          <label>Message (Optional)</label>
          <textarea
            placeholder="Any additional message"
            style={textareaStyle}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" style={submitButtonStyle} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
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
