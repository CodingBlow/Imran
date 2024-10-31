import React from "react";

const GoogleMap = () => {
  return (
    <div style={{ width: "100%", height: "90vh", padding: 0, margin: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "10px", textAlign: "center" }}>Map</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14038.820372352899!2d77.045018295945!3d28.397973938396646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22f05651db7b%3A0x5a9d6df4e8da1b90!2sBadshahpur%2C%20Sector%2066%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1730353939691!5m2!1sen!2sin"
        width="90%"
        height="450px"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="google-map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
