const Apply = require("../models/apply");

const insert = (req, res, next) => {
    const apply = new Apply({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email
    });
  
    apply
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
                success: false,
                message: "Bad request",
                data : e
            };
            res.status(400).json(responseMessage);
        });
};
const Index = async (req, res) => {
    try{
        const apply = await Apply.find({});
        res.status(200).json(apply);
        if(!housing){
            res.status(404).json({ message: "Collection is Empty"});
        }
    }catch (erorr) {
        res.status(500).json({ message: "Error retrieving users", erorr});
    }
    
};
module.exports= {insert, Index}