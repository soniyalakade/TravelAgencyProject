import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./booking.css";

function Booking() {
  const { state } = useLocation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    members: 1,
    date: "",
  });

  if (!state) return <h2>Invalid Booking</h2>;

  const pricePerPerson = Number(state.price);
  const destination = state.destination || state.place;
  const totalPrice = pricePerPerson * form.members;

  if (!pricePerPerson) {
  return <h2>Invalid price data</h2>;
}

  const handleChange = (e) => {
  const { name, value } = e.target;

  setForm({
      ...form,
      [name]: name === "members" ? Number(value) : value,
    });
  };


const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      destination,
      date: form.date,
      members: Number(form.members),
      totalPrice: Number(totalPrice),
    };

    console.log("BOOKING DATA BEING SENT 👉", bookingData);

    const res = await fetch("http://localhost:5000/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();
    console.log("SERVER RESPONSE 👉", data);

    alert("Booking Successful");
  };

  return (
    <div className="booking-container">
      <h2>Confirm Your Trip</h2>

      <div className="summary">
        <p><strong>Destination:</strong> {destination}</p>
        <p><strong>Price per Person:</strong> ₹{pricePerPerson}</p>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <input name="name" value={form.name} placeholder="Full Name" required onChange={handleChange} />
        <input name="email" value={form.email} placeholder="Email" required onChange={handleChange} />
        <input name="phone" value={form.phone} placeholder="Phone Number" required onChange={handleChange} />

        <select name="date" value={form.date} required onChange={handleChange}>
          <option value="">Select Travel Date</option>
          {state.dates && state.dates.map((d, i) => (
            <option key={i} value={d}>{d}</option>
          ))}
        </select>

        <input type="number" name="members" min="1" value={form.members} onChange={handleChange} />

        <h3>Total Price: ₹{totalPrice}</h3>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;
