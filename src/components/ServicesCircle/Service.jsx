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
        "https://images.pexels.com/photos/5591460/pexels-photo-5591460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/refrigerator-rental",
    },
    {
      name: "Geyser",
      image:
        "https://images.pexels.com/photos/5591460/pexels-photo-5591460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/Geyser",
    },
    {
      name: "Inverter",
      image:
        "https://images.pexels.com/photos/5591460/pexels-photo-5591460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/inverter-rental",
    },
    {
      name: "Construction Equipment",
      image:
        "https://images.pexels.com/photos/5591460/pexels-photo-5591460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
          gap: "30px",
          maxWidth: "1200px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
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
                fontSize: "1rem",
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
            div[style*="width: 200px"] {
              width: 250px;
              height: 250px;
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
