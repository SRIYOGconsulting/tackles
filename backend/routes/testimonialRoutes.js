import express from "express";
import multer from "multer";
import path from "path";
import Testimonial from "../models/testimonialModel.js";

const router = express.Router();

// ===== MULTER SETUP =====

// Storage settings
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/testimonials"); // folder inside /uploads
  },
  filename: function (req, file, cb) {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// ===== CREATE TESTIMONIAL WITH IMAGE UPLOAD =====

router.post("/", upload.single("photo"), async (req, res) => {
  try {
    const { name, country, place, workDone, message } = req.body;

    const photoUrl = req.file
      ? `/uploads/testimonials/${req.file.filename}`
      : "";

    const newTestimonial = await Testimonial.create({
      name,
      country,
      place,
      workDone,
      message,
      photoUrl,
    });

    res.status(201).json(newTestimonial);
  } catch (error) {
    console.log("Error saving testimonial:", error);
    res.status(400).json({ message: error.message });
  }
});

// ===== GET ALL TESTIMONIALS =====

router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
