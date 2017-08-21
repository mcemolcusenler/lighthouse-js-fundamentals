var ingredients = ['eggs', 'milk', 'flour', 'sugar', 'baking soda', 'baking powder', 'chocolate chips', 'bananas'];

//While loop that prints out ingredients

var count = 0;

while (count < ingredients.length) {
  console.log(ingredients[count]);
  count++;
}

//For loop that prints out ingredients

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

//a for loop that prints out the contents of the array backwards

for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}