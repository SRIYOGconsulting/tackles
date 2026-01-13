import Airtable from "airtable";
import dotenv from "dotenv";
dotenv.config();

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

export const pushContactToAirtable = async ({ fullName, email, city, message }) => {
  return await base("ContactSubmissions").create([
    {
      fields: {
        "Full Name": fullName,
        Email: email || "",
        City: city || "",
        Message: message,
      },
    },
  ]);
};
