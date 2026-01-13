import express from "express";
import { pushContactToAirtable } from "../utils/airtableContacts.js";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  const { fullName, email, city, message } = req.body;

  if (!fullName || !message) {
    return res.status(400).json({ message: "Full Name and Message are required." });
  }

  try {
    const created = await pushContactToAirtable({ fullName, email, city, message });
    res.status(201).json({ success: true, data: created[0].fields });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Failed to save contact submission.", error: error.message });
  }
});

export default router;
