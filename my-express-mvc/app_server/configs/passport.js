// Modul yang digunakan
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; //passport-local digunakan untuk generate
const User = require("../models/user");
 
//Middleware
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
        return done(null, user); //berhasil login
    }).catch((err) => {
        if (err) {
            return done(err);
        }
    })
}))