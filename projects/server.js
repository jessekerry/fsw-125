const express = require("express");
const app = express();

app.get('/favorites', (req, res) => {
    res.send(favorites = ["foods", "colors"]);
});

app.get('/favorites/foods', (req, res) => {
    res.send(favorites = ["pizza", "cake", "pasta"]);
});

app.get('/favorites/colors', (req, res) => {
    res.send(favorites = ["red", "yellow", "white"]);
});


app.listen(3000, () => {
    console.log("app is listening on port 3000")
});