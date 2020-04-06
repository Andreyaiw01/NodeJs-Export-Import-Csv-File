const csvToMysql = require('../models/upload.model');
const storageConfig = require('../config/upload.config');
const multer = require('multer');
    
exports.upload = async (req, res) => {    
    var load = multer({ storage: storageConfig }).single("file");
    await load(req, res, (err) => {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
    csvToMysql();
    res.send('File in database');      
}

