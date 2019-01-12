 const parser = require('ingredients-parser');
 const express = require('express');
 const axios = require('axios');

 const app = express();

 // Set up PORT of the app
 const PORT = process.env.PORT || 8080;

 // Sets up the express app to handle data parsing
 app.use(express.urlencoded({
     extended: true
 }));
 app.use(express.json());

 // Establishing mysql connection
 const mysql = require('mysql');

 const db = mysql.createConnection({
     host: "localhost",
     port: 3306,
     user: "root",
     password: "Moderndance123",
     database: "recipes_db"
 });

 var space = "\n";
 var header = "====== Extraordinary Liri has found this based on your query ...======";
 var footer = "================= Thank you for using Liri by W.B ====================";

 const queryURL = "https://api.edamam.com/search?q=salmon&app_id=e3c21f1d&app_key=3e40f04f482e04daac9d6917ba78643f&from=0&to=3&calories=591-722";
 const displayRecipes = () => {
     axios
         .get(queryURL)
         .then((response) => {
             console.log(response.data.hits[0].recipe);
             const data = response.data.hits[0].recipe;

             output = space + header + space + space
             space + "Name           :" + data.label +
                 space + "source         :" + data.uri +
                 space + "Ingredients    :" + data.ingredients;

             console.log(data);
             console.log(response.data.hits[0].recipe.uri);
             console.log(response.data.hits[0].recipe.label);
             console.log(response.data.hits[0].recipe.ingredientLines);
             console.log(response.data.hits[0].recipe.dietLabels);
             console.log(response.data.hits[0].recipe.healthLabels);

             const ingredientParser = () => {

                 let ingInput = response.data.hits[0].recipe.ingredientLines;

                 ingInput.forEach(function (value) {
                     console.log(value);
                     let result = parser.parse(value);
                     result.amount;
                     result.unit;
                     result.ingredient;

                     console.log(result);
                 });


             }
             ingredientParser();
         });
 };

 displayRecipes();



 db.connect((err) => {
     if (err) throw err;

     console.log("MySQL connected as id " + db.threadId);
 });

 // Start our server 
 app.listen(PORT, () => {
     console.log("Server listening on: http://localhost:" + PORT)
 })