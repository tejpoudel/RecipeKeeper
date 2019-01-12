var axios = require('axios');

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

        console.log(output);
        console.log(response.data.hits[0].recipe.uri);
        console.log(response.data.hits[0].recipe.label);
        console.log(response.data.hits[0].recipe.ingredientLines);
        console.log(response.data.hits[0].recipe.dietLabels);
        console.log(response.data.hits[0].recipe.healthLabels);

   

        });
};