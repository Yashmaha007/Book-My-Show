const mongoose = require("mongoose");//import mongoose

//schema for booking
const bookingSchema = new mongoose.Schema({
  movie: {
    type: String,
    required: true,
  },
  slot: {
    type: String,
    required: true,
  },
  seats: {
    type: Array,
    required: true,
  },
});

const booking = mongoose.model("booking", bookingSchema);

module.exports = booking;
