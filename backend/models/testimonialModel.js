import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    place: { type: String, required: true },
    workDone: { type: String, required: true },
    message: { type: String, required: true },
    photoUrl: { type: String },
  },
  { timestamps: true }
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;
