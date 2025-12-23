import Airtable from "airtable";

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_TESTIMONIALS_BASE_ID);

export const testimonialsTable =
  base(process.env.AIRTABLE_TESTIMONIALS_TABLE_NAME);
