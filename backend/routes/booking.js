import express from "express";
import { pushBookingToAirtable, getAllBookings } from "../utils/airtableBookings.js";

const router = express.Router();

// GET all bookings
router.get("/", async (req, res) => {
  try {
    const records = await getAllBookings();
    const bookings = records.map((r) => ({
      id: r.id,
      ...r.fields,
    }));

    res.status(200).json({ success: true, bookings });
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST → Save booking to Airtable
router.post("/", async (req, res) => {
  try {
    const bookingData = {
      name: req.body.fullName || "",
      email: req.body.email || "",
      phone: req.body.phone || "",
      city: req.body.location || "",
      service: req.body.requiredService || "",
      date: req.body.startDate || "",
      shifts: req.body.shifts || "",
      description: req.body.description || "",
      status: "Pending",
    };

    const record = await pushBookingToAirtable(bookingData);

    res.status(201).json({
      success: true,
      message: "Booking saved to Airtable",
      data: record,
    });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
