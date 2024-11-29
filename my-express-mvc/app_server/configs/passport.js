//Buat Konfigurasi Middleware Passport
// Buat folder configs di dalam folder app_server
// Buat file passport.js
// Buat configurasi authentikasi menggunakan library passport

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require("../models/user");

//middleware 
passport.use(new LocalStrategy({
    usernameField: 'email',
}, (username, password, done) => {
    User.findOne({
        email: username
    }).then((user) => {
        //jika user tidak ditemukan
        if (!user) {
            return done(null, false, {
                message: 'Incorrect username'
            })
        }
        //jika password salah
        if (!user.validPassword(password)) {
            return done(null, false, {
                message: 'Incorrect password'
            })
        }
        return done(null, user);
    }).catch((err) => {
        if (err) {
            return done(err);
        }
    })
}))