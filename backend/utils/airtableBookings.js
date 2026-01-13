import base from "./airtableBase.js";

export const pushBookingToAirtable = async (bookingData) => {
  return await base("Bookings").create([{ fields: bookingData }]);
};

// Optional: fetch all bookings
export const getAllBookings = async () => {
  const records = await base("Bookings").select({}).all();
  return records;
};
