"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
// app.use("/", (req: express.Request, res: express.Response) => res.send("Hello World!"))
var path = require('path');
// sendFile will go here
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });
app.use("/", function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.listen(3000, function () { return console.log("Listening"); });
//# sourceMappingURL=index.js.map