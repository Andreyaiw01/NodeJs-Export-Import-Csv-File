const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes/index');
const app = express();
const sequelize = require('./models/db')

const host = '127.0.0.1';
const port = 3000;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

// set port, listen for requests
//app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));

// синхронизация с бд, после успшной синхронизации запускаем сервер
sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log(`Server listens http://${host}:${port}`);
    });
}).catch(err => console.log(err));