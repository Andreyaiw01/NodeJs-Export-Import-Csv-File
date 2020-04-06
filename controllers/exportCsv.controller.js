const getUsersFromDb = require('../models/getUsersFromDb.model');
const fastcsv = require("fast-csv");
const fs = require("fs");

const exportCsv = (req, res) => {    
  
  getUsersFromDb( async (err, data) => {
    if(data) {
      const ws = fs.createWriteStream("./exportCsv/mysql_to_csv.csv");        
      await fastcsv
      .write(data, { headers: true })
      .on("finish", () => {
        console.log("Write to mysql_to_csv successfully!");
      })
      .pipe(ws);
      res.download('./exportCsv/mysql_to_csv.csv');
      res.status(200).send(data);      
    } else {
      res.status(500).send('Smth bad' + err);
    }
  });

}

module.exports = exportCsv;
