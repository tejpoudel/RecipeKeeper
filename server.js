
const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("We are good to go");
});

const PORT = process.env.PORT || 5080;

// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Establishing Handlebars as templating language
const exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Importing routes and giving access to it
const routes = require('./controllers/recipe_controller');

app.use('/', routes);

app.listen(PORT, function() {
    console.log("Server is running on " + PORT);
});








