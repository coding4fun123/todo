const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const apiRoute = require("./routes/todo");
const PORT = process.env.PORT || 4000;
require("./db")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    const path = require('path');
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})