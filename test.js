var parser = require('ingredients-parser');

var ingInput =process.argv[2];

var result = parser.parse(ingInput);
result.amount //=> '500'
result.unit //=> 'ml'
result.ingredient //=> "milk"


console.log(result);