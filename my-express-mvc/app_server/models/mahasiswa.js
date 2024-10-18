const mongoose = require ('mongoose');

// Membuat koleksi schema
const mahasiswaSchema = new mongoose.Schema({
    nama: {type: String,},
    npm: {type: String,require: true,unique: true,},
    email: {type: String,require:true,unique: true,},
    tanggal_lahir:{type: Date,},
    aktif:{type: Boolean,}
})

const Mahasiswa = mongoose.model("Mahasiswa",mahasiswaSchema);
module.exports= Mahasiswa;
