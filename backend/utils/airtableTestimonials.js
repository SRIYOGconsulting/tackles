import base from "./airtableBase.js";

// ===== PUSH NEW TESTIMONIAL =====
export const pushTestimonialToAirtable = async (testimonialData) => {
  return await base("Testimonials").create([{ fields: testimonialData }]);
};

// ===== GET APPROVED TESTIMONIALS =====
export const getApprovedTestimonials = async () => {
  const records = await base("Testimonials")
    .select({
      filterByFormula: `{Status} = "Approved"`, // Airtable field must exactly match "Approved"
    })
    .all();
  return records;
};
