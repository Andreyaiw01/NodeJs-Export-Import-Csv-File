const Sequelize = require("sequelize");
const sequelize = require('./db');

const User = sequelize.define("user", {
    UserName: {
        type: Sequelize.STRING,
        allowNull: false
      },
    FirstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    LastName: {
        type: Sequelize.STRING,
        allowNull: false
    },      
    Age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = User;
