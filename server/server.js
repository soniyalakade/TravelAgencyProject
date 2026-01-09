const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// 🔹 CONNECT TO MONGODB
mongoose
  .connect("mongodb://localhost:27017/travelDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// 🔹 BOOKING SCHEMA
const BookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    destination: { type: String, required: true },
    date: { type: String, required: true },
    members: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    bookedAt: { type: Date, default: Date.now },
  },
  { strict: true }
);

// 🔹 MODEL
const Booking = mongoose.model("Booking", BookingSchema);

// 🔹 STATIC PACKAGES
const packages = [
  { id: 1, place: "Goa", price: 15000 },
  { id: 2, place: "Manali", price: 18000 },
];

// 🔹 GET PACKAGES
app.get("/api/packages", (req, res) => {
  res.json(packages);
});

// 🔹 SAVE BOOKING TO MONGODB
app.post("/api/book", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      destination,
      date,
      members,
      totalPrice,
    } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !destination ||
      !date ||
      members === undefined ||
      totalPrice === undefined
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = new Booking({
      name,
      email,
      phone,
      destination,
      date,
      members,
      totalPrice,
    });

    await booking.save();

    res.status(201).json({
      message: "Booking stored successfully",
      booking,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔹 START SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
