const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
  firstname: { 
    type: String, 
    required: true 
},
  lastname: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true },
});
const Register = mongoose.model('Registrasi', RegisterSchema);
module.exports = Register;