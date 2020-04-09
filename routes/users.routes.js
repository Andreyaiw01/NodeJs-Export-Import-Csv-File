const express = require("express");
const uploadController = require("../controllers/upload.controller");
const exportCsv = require('../controllers/exportCsv.controller');
const usersController = require('../controllers/users.controller');
router = express.Router();

router.route('/')
.post(uploadController.upload)
.get(usersController.getAll);

router.route('/download-csv')
.get(exportCsv)

module.exports = router;