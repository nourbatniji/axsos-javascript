function pizzaOven(crust, sauce, cheeses, toppings) {
    var pizza = {}
    pizza.crust = crust,
    pizza.sauce = sauce,
    pizza.cheeses = cheeses,
    pizza.toppings = toppings
    return pizza
}
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"] )
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],  ["mushrooms", "olives", "onions"])
var pizza3 = pizzaOven("gluten-free", "pesto", ["mozzarella", "parmesan"], ["tomatoes", "basil", "artichokes"]);
var pizza4 = pizzaOven("deep dish", "buffalo", ["mozzarella", "blue cheese"], ["buffalo chicken", "celery", "red onions"]);
var pizza5 = pizzaOven("cauliflower crust", "garlic butter", ["mozzarella", "goat cheese"], ["grilled chicken", "arugula", "sun-dried tomatoes"]);

console.log(pizza1);
console.log(pizza2);

var randomPizzas = [pizza1, pizza2, pizza3, pizza4, pizza5]

function randomPizza(){
    let random =randomPizzas[Math.floor(Math.random() * randomPizzas.length)] //range of random from 1 to length of the array
    console.log(random);
}
randomPizza()

