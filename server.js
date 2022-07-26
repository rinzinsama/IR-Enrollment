const express = require("express"),
  serveStatic = require("serve-static"),
  history = require("connect-history-api-fallback"),
  port = process.env.PORT || 7999;

const app = express();

app.use(history());
app.use(serveStatic(__dirname + "/build"));
app.listen(port);
