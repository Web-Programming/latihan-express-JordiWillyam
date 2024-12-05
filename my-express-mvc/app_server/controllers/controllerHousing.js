const Housing = require("../models/housing");

//untuk menghandle request get all mahasiswa
//List data mahasiswa
const Index = async (req, res) => {
    try{
        const housing = await Housing.find({});
        res.status(200).json(housing);
        if(!housing){
            res.status(404).json({ message: "Collection is Empty"});
        }
    }catch (erorr) {
        res.status(500).json({ message: "Error retrieving users", erorr});
    }
    
};

const IndexById = async (req, res) => {
  try {
      const id = parseInt(req.params.id); // Ambil ID dari parameter URL
      const housingData = await Housing.findOne({ id: id }); // Cari data berdasarkan ID
      if (housingData) {
          res.json(housingData); // Kembalikan data jika ditemukan
      } else {
          res.status(404).json({ message: 'Data not found' });
      }
  } catch (error) {
      res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};
module.exports={Index, IndexById};