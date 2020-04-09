const Sequelize = require("sequelize");

const sequelize = new Sequelize("artjoker", "root", "", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false
  }
});

module.exports = sequelize;





