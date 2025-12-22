import Airtable from "airtable";
import dotenv from "dotenv";

dotenv.config();

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

export const pushBookingToAirtable = async (bookingData) => {
  try {
    await base(process.env.AIRTABLE_TABLE_NAME).create([
      {
        fields: bookingData,
      },
    ]);

    console.log("Booking synced to Airtable");
  } catch (error) {
    console.error("Airtable sync error:", error);
  }
};
