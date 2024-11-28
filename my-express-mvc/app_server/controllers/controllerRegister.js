// controllers/controllerRegister.js

const Register = require('../models/register');

const insert = (req, res, next) => {
    const rgs = new Register({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    });
  
    rgs
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};
module.exports = {insert}