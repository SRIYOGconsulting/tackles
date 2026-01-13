import express from "express";
import multer from "multer";
import path from "path";
import { pushTestimonialToAirtable, getApprovedTestimonials } from "../utils/airtableTestimonials.js";

const router = express.Router();

// ===== MULTER SETUP =====
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/testimonials");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// ===== CREATE TESTIMONIAL =====
router.post("/", upload.single("photo"), async (req, res) => {
  try {
    const { name, country, place, workDone, message } = req.body;
    const photoUrl = req.file ? `/uploads/testimonials/${req.file.filename}` : "";

    await pushTestimonialToAirtable({
      Name: name,
      Country: country,
      Place: place,
      WorkDone: workDone,
      Message: message,
      PhotoUrl: photoUrl,
      Status: "Pending",
    });

    res.status(201).json({ message: "Testimonial submitted for approval" });
  } catch (error) {
    console.error("Error saving testimonial:", error);
    res.status(400).json({ message: "Airtable save failed", error: error.message });
  }
});

// ===== GET APPROVED TESTIMONIALS =====
router.get("/approved", async (req, res) => {
  try {
    const records = await getApprovedTestimonials();
    const testimonials = records.map((record) => ({
      id: record.id,
      name: record.fields.Name,
      country: record.fields.Country,
      place: record.fields.Place,
      workDone: record.fields.WorkDone,
      message: record.fields.Message,
      photoUrl: record.fields.PhotoUrl,
    }));

    res.json(testimonials);
  } catch (error) {
    console.error("Error fetching approved testimonials:", error);
    res.status(500).json({ message: "Fetch failed", error: error.message });
  }
});

export default router;
