const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require('./db.js');
const cors = require('cors');
//Models
require("./model/Note");
require("./model/User");
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false ,useUnifiedTopology: true }))

app.use(bodyParser.json())
app.use("/", require("./routes/user"));

app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, function () {
    console.log("Server is running");
});
