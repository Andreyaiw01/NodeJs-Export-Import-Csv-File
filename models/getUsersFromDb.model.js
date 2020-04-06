const sql = require("./db.js");

const getUsersFromDb = result => {
  sql.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }   
    //console.log("users: ", res);
    result(null, res);
  });
};

module.exports = getUsersFromDb;
