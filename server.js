var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
const port = process.env.PORT || 5000
app.listen(port)
console.log(`app is listening on port: ${port}`)