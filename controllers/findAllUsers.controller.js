const getUsersFromDb = require("../models/getUsersFromDb.model.js");

const findAllUsers = (req, res) => {
    getUsersFromDb((err, data) => {
        if (err)
        res.status(500).send("Some error occurred while retrieving users.");
        else res.send(data);
    });
};

module.exports = findAllUsers;