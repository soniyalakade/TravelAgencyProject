import React from "react";
import { useParams, Link } from "react-router-dom";
import packageData from "./packageData";

function PackageDetails() {
  const { id } = useParams();
  const pkg = packageData.find(p => p.id === Number(id));

  if (!pkg) {
    return <h2 style={{ textAlign: "center" }}>Package not found</h2>;
  }

  return (
    <div className="package-details">
      <h1>{pkg.place}</h1>
      <p className="duration">{pkg.duration}</p>

      <img src={pkg.image} alt={pkg.place} className="package-image" />

      <div className="details-grid">
        <div className="left-panel">
          <div className="price">₹{pkg.price}</div>

          <h3>Available Dates</h3>
          <ul className="dates">
            {pkg.dates.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>

          <Link to="/book"
            state={{
              destination: pkg.place,
              price: pkg.price,
              dates: pkg.dates,
            }}
>
  <button className="btn book-btn">Book Now</button>
</Link>

        </div>

        <div className="right-panel">
          <h3>Itinerary</h3>
          <div className="itinerary">
            {pkg.itinerary.map((day, i) => (
              <div key={i} className="day">
                <strong>{day.day}:</strong> {day.plan}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageDetails;
