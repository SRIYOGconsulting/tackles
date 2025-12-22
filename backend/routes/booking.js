import express from "express";
import Booking from "../models/Booking.js";
import { pushBookingToAirtable } from "../utils/airtable.js";

const router = express.Router();

// GET all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// POST → Save booking + sync to Airtable
router.post("/", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    await pushBookingToAirtable({
      bookingId: booking._id.toString(),
      name: booking.fullName || "",
      email: booking.email || "",
      phone: booking.phone || "",
      city: booking.location || "",
      service: booking.requiredService || "",
      date: booking.startDate || "",
      shifts: booking.shifts || "",   // 👈 IMPORTANT
      description: booking.description || "",
      status: "Pending",
    });
    
    

    res.status(201).json({
      success: true,
      message: "Booking saved and synced to Airtable",
      data: booking,
    });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

export default router;
