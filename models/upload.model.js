const fs = require("fs");
const fastcsv = require("fast-csv");
const User = require('../models/users.model');

function CsvToMysql() {
    let stream = fs.createReadStream('./uploads/data.csv');
    let csvData = [];
    let csvDataObjMas = [];
    let csvDataObj = {
        UserName: '',
        FirstName: '',
        LastName: '',
        Age: null
    };
    let csvStream = fastcsv
    .parse({ delimiter: ';' })
    .on("data", data => {
        csvData.push(data);         
    })
    .on("end", () => {
        // remove the first line: header
        csvData.shift();
        csvData.map(data => {
            csvDataObj = {
                UserName: data[0],
                FirstName: data[1],
                LastName: data[2],
                Age: data[3]
            };
            csvDataObjMas.push(csvDataObj);           
        });

        User.bulkCreate(csvDataObjMas, {returning: true}).catch(err => {
            console.log(err);
        });

    });
  
    stream.pipe(csvStream);
    
}

module.exports = CsvToMysql;