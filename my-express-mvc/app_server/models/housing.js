const mongoose = require ('mongoose');

// Membuat koleksi schema
const housingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  availableUnits: {
    type: Number,
    required: true,
    min: 0, // Ensuring that available units can't be negative
  },
  wifi: {
    type: Boolean,
    required: true,
  },
  laundry: {
    type: Boolean,
    required: true,
  }
})

// const Mahasiswa = mongoose.model("namaModel",nama Schema)
const Housing = mongoose.model("Housing",housingSchema);
module.exports= Housing;