const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 6200
const connect = require("./config/db");
const router = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const profileRoutes = require("./routes/profileRoutes");
const bodyParser = require("body-parser");
var cors = require('cors')

app.use(cors())
app.options('*', cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

connect();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Home page")
});

app.use("/", router);
app.use("/", postRoutes);
app.use("/", profileRoutes);

app.listen(PORT, () =>{
    console.log(`Successfully running on port no. ${PORT}`);
})