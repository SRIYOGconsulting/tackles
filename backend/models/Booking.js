import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  startDate: String,
  endDate: String,
  shifts: String,
  priority: String,
  location: String,
  requiredService: String,
  phone: String,
  budget: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
