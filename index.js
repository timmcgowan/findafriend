// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express config
// =============================================================
var app = express();
//var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listener - Removed to support lambda/api gateway
//app.listen(PORT, function() {
//    console.log("App listening on PORT: " + PORT);
//  });
module.exports = app;