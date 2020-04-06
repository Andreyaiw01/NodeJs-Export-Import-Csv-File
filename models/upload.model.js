const fs = require("fs");
const fastcsv = require("fast-csv");
const sql = require('./db');

function CsvToMysql() {
    let stream = fs.createReadStream('./uploads/data.csv');
    let csvData = [];
    let csvStream = fastcsv
    .parse({ delimiter: ';' })
    .on("data", data => {
        csvData.push(data);
    })
    .on("end", () => {
        // remove the first line: header
        csvData.shift();
        sql.query('INSERT INTO users (UserName, FirstName, LastName, Age) VALUES ?', [csvData], (error, response) => {
            console.log(error || response);
        } );
    });

    stream.pipe(csvStream);
}

module.exports = CsvToMysql;