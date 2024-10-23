// untuk mengkoneksi mongodb server harus manambahkan folder models pada app_server 
// lalu buat file db.js dan tambahkan kode seperti dibawah ini lalu update app.js

let mongoose = require('mongoose');
// let dbURI = "mongodb://localhost:27017/pawII-si52" database di mongo db adalah di akhir / yaitu pawII-si52 adalah databasenya
let dbURI = "mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/PAWII-SI?retryWrites=true&w=majority&appName=paw2"
// let dbURI = "mongodb://localhost:27017/namadb"

mongoose.connect(dbURI,{
    useNewURLParser: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected To MongoDB")
});

mongoose.connection.on("error", (error) => {
    console.log("Connection Error :" + error)
});

mongoose.connection.on("disconected", () => {
    console.log("Disconnected From MongoDB");
});