import React from "react";
import { useNavigate } from "react-router-dom";
import packageData from "./packageData";
import "./packages.css";

function Packages() {
  const navigate = useNavigate();

  return (
    <div className="packages-page">
      <h1 className="page-title">Our Travel Packages</h1>

      <div className="packages-grid">
        {packageData.map((pkg) => (
          <div className="package-card" key={pkg.id}>
            <img src={pkg.image} alt={pkg.place} className="pkg-img" />

            <h3>{pkg.place}</h3>
            <p className="price">₹{pkg.price}</p>

            <button
              className="btn"
              onClick={() => navigate(`/packages/${pkg.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
