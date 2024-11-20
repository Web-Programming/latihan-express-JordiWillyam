const Housing = require("../models/housing");

const index = async (req,res) => {
    try{
        const housing = await Housing.find({});
        res.status(200).json(housing);
        if(!housing){
            res.status(404).json({message: "Collection is Empty"});
        }
    } catch (error){
        res.status(500).json({message: "Error retrieving users", error});
    }
}

module.exports= {index}