import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import services from "../pages/HotServices";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((item) => item.id === parseInt(id));

  const initialVariant = service ? Object.keys(service.variants)[0] : null;
  const initialDuration = service ? Object.keys(service.durations)[0] : null;

  const [selectedVariant, setSelectedVariant] = useState(initialVariant);
  const [selectedDuration, setSelectedDuration] = useState(initialDuration);

  if (!service) return <p>Service not found</p>;

  const variantPrice = service.variants[selectedVariant] || service.price;

  const handleRentNow = () => {
    navigate("/rental-form", {
      state: { service, selectedVariant, selectedDuration },
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <img
        src={service.image}
        alt={service.name}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h2>{service.name}</h2>
      <p>{service.description}</p>

      <h3>Variants:</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {Object.keys(service.variants).map((variant) => (
          <div
            key={variant}
            onClick={() => setSelectedVariant(variant)}
            style={{
              border:
                selectedVariant === variant
                  ? "2px solid #007bff"
                  : "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              cursor: "pointer",
              transition: "border-color 0.3s",
              width: "120px",
              textAlign: "center",
            }}
          >
            <p>{variant}</p>
            <p>{service.variants[variant]}</p>
          </div>
        ))}
      </div>

      <h3>Durations:</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {Object.keys(service.durations).map((duration) => (
          <div
            key={duration}
            onClick={() => setSelectedDuration(duration)}
            style={{
              border:
                selectedDuration === duration
                  ? "2px solid #007bff"
                  : "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              cursor: "pointer",
              transition: "border-color 0.3s",
              width: "120px",
              textAlign: "center",
            }}
          >
            <p>{duration}</p>
            <p>{variantPrice} for {duration}</p>
          </div>
        ))}
      </div>

      <br />

      {/* Link to KYC page */}
      <Link
        to="/kyc"
        style={{
          color: "#007bff",
          textDecoration: "none",
          display: "block",
          marginBottom: "10px",
        }}
      >
        Please review the mandatory KYC documents before renting.
      </Link>

      <button
        onClick={handleRentNow}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "4px",
          cursor: "pointer",
          border: "none",
        }}
      >
        Rent Now
      </button>
    </div>
  );
};

export default ServiceDetails;
