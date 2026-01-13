import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import bookingRoutes from "./routes/booking.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import contactRoutes from "./routes/contact.js"; // <-- new contact route

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// =====================
// Middleware
// =====================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =====================
// Serve uploaded images
// =====================
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// =====================
// Routes
// =====================
app.use("/api/bookings", bookingRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/contact", contactRoutes); // <-- contact endpoint

// =====================
// Health check
// =====================
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Tackles Backend API is running",
    timestamp: new Date().toISOString(),
  });
});

// =====================
// Root endpoint
// =====================
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Tackles Backend API",
    version: "1.0.0",
    endpoints: {
      health: "/api/health",
      bookings: "/api/bookings",
      testimonials: "/api/testimonials",
      contact: "/api/contact", // <-- added info for docs
    },
  });
});

// =====================
// 404 handler
// =====================
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: `Cannot ${req.method} ${req.url}`,
  });
});

// =====================
// Error handler
// =====================
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Something went wrong",
  });
});

// =====================
// Start server
// =====================
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`📂 Uploads served at http://localhost:${PORT}/uploads`);
  console.log(`✅ API base: http://localhost:${PORT}/api`);
});

export default app;
