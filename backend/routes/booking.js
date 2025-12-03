import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  const bookings = await Booking.find();
  res.status(200).json({ success: true, bookings });
});

// POST → Save data
router.post("/", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    res.status(201).json({
      success: true,
      message: "Booking saved successfully",
      data: booking,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
