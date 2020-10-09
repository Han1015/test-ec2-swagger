const express = require("express");
const bodyParser = require("body-parser");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require("cors");
const endpoints = require('./endpoints');
const swaggerDoc = require('./swaggerDoc');

// extend https://swagger.io/specification/#infoObject
var SERVER_PORT = 5002;
var app = express();
endpoints(app)
swaggerDoc(app)
// applying middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

if (!module.parent) {
  app.listen(SERVER_PORT, function () {
    console.log("Server is listening at port :  ", SERVER_PORT);
  });
}
module.exports = app;
