// crypto merupakan modul bawaan dari Node.js yang digunakan untuk menghasilkan hash, password , enkripsi dan dekripsi data
// jsonwebtoken merupakan modul yang digunakan untuk menghasilkan token , menandatangani token dan memverifikasi token, JSON Web Tokens (JWT) digunakan autentikasi stateless, sering dalam API REST
// session merupakan server side rendering (disimpan diserver)
// jwt merupakan client side rendering (disimpan disisi client)


// Buat file user.js di dalam folder app_server > models
// Import module crypto dan jsonwebtoken
// Import module mongoose
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    name: { // untuk menyimpan nama user
        type: String,
        required: true,
    },
    hash: String, // untuk menyimpan password terenkripsi  

    salt: String // untuk menyimpan salt yang digunakan untuk mengenkripsi password
});

//Buat fungsi setPassword untuk mengencrypt plain text password
userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
}

//Buat fungsi validPassword untuk memavaliasi password plain text dengan password yang terenkripsi
userSchema.methods.validPassword = function (password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
    return this.hash === hash;
}

// Buat file .env dan simpan Kunci Rahasia anda pada file .env JWT_SECRET=kuncirahasia
// Buat fungsi generateJwt untuk membuat token yang akan digunakan oleh FrontEnd
userSchema.methods.generateJwt = function () {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7); // 7 hari

    // jangan masukkan data rahasia
    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000),
    }, process.env.JWT_SECRET);
}

const User = mongoose.model("User",userSchema);
module.exports= User;
