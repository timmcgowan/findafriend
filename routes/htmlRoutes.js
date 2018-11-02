// DEPENDENCIES
var path = require("path");

// ROUTING
module.exports = function (app) {
  // HTML Content Requests
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // static assets
  app.get('/static/*', function (req, res) {
    var npath = req.params[0];
    // Don't let them peek at /etc/passwd
    if (npath.indexOf('..') === -1) {
      return res.sendFile(path.join(__dirname + "/../public/") + npath);
    } else {
      res.status = 404;
      return res.send('Not Found');
    }
  });

  // default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
