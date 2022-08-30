const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const apiRoute = require("./routes/todo");
const PORT = process.env.PORT || 4000;
require("./db")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/todo/", apiRoute)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})