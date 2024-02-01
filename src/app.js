"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var auth_1 = require("./routes/auth");
var profiles_1 = require("./routes/profiles");
var premium_1 = require("./routes/premium");
var settings_1 = require("./routes/settings");
var app = (0, express_1.default)();
var PORT = 3000;
app.use(body_parser_1.default.json());
// Routes
app.use('/api/auth', auth_1.default);
app.use('/api/profiles', profiles_1.default);
app.use('/api/premium', premium_1.default);
app.use('/api/settings', settings_1.default);
app.get('/', function (req, res) {
    res.send('Dating App Running!');
});
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
