import React from "react";
import WM from "../../assets/all-images/WashingM.jpg";
import AC from "../../assets/all-images/AC.jpg";
import RO from "../../assets/all-images/RO.jpg";

const Services = () => {
  const services = [
    {
      name: "AC",
      image: AC,
      link: "/ac",
    },
    {
      name: "Washing Machine",
      image: WM,
      link: "/washing_machine",
    },
    {
      name: "RO Water Purifier",
      image: RO,
      link: "/ro-water-purifier-rental",
    },
    {
      name: "Refrigerator",
      image:
        "https://c.shld.net/rpx/i/s/i/spin/image/spin_prod_606429101?wid=800&hei=800&op_sharpen=1",
      link: "/refrigerator-rental",
    },
    {
      name: "Geyser",
      image:
        "https://5.imimg.com/data5/HU/DJ/FB/SELLER-5577939/geyser-ms-35-50l-jpg.jpg",
      link: "/Geyser",
    },
    {
      name: "Inverter",
      image:
        "https://rukminim1.flixcart.com/image/1664/1664/inverter/p/y/c/900-va-ups-eb-microtek-original-imae47yfjy8zzhg7.jpeg?q=90",
      link: "/inverter-rental",
    },
    {
      name: "Construction Equipment",
      image:
        "https://i5.walmartimages.com/asr/1662c8bf-fa28-4550-8d42-e135c305336d.ea59a6c0893ca02e5db79402e16f7e75.jpeg",
      link: "/construction-equipment-rental",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px", // Reduced gap for a tighter layout
          maxWidth: "1200px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              width: "180px", // Reduced size of circle
              height: "180px", // Reduced size of circle
              borderRadius: "50%",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => (window.location.href = service.link)}
          >
            <img
              src={service.image}
              alt={service.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.8)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "#fff",
                textAlign: "center",
                fontSize: "0.9rem", // Reduced font size for better proportion
                fontWeight: "bold",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "5px 10px",
                borderRadius: "10px",
                width: "90%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {service.name.split(" ").map((word, idx) => (
                <span key={idx} style={{ display: "block" }}>
                  {word}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          @media (min-width: 768px) {
            div[style*="width: 180px"] {
              width: 220px; // Slightly increase size on medium screens
              height: 220px;
            }
          }

          @media (min-width: 992px) {
            div[style*="display: flex; flex-wrap: wrap;"] {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Services;
