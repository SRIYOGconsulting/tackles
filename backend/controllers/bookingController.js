await pushBookingToAirtable({
  bookingId: booking._id.toString(),
  name: booking.name,
  email: booking.email,
  phone: booking.phone,
  city: booking.city,
  service: booking.service,
  date: booking.date,
  time: booking.time,
  description: booking.description || "",
  photoUrl: booking.photoUrl || "",
  status: "Pending",
  provider: "",
});
