const express = require("express");
router = express.Router();
const uploadController = require("../controllers/upload.controller");
const findAllUsers = require('../controllers/findAllUsers.controller');
const exportCsv = require('../controllers/exportCsv.controller');

router.route('/')
.post(uploadController.upload)
.get(findAllUsers)

router.route('/download-csv')
.get(exportCsv)

module.exports = router;