const mongoose = require("mongoose");

const applySchema = new mongoose.Schema({
    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    email:{
        type: String,
        unique: true,  // Email harus unik dalam database
        trim: true,    // Hapus spasi di awal/akhir string
        validate: {
            validator: function (v) {
                // Validasi menggunakan regex untuk format email
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid email!`,
        },
    }
});

const Apply = mongoose.model('Apply', applySchema);
module.exports = Apply;
