var shoppingCart ={
    books: 7,
    sunglass: 4,
    keyboard: 3,
    mouse: 1,
    pen: 20
}
// when you know the specific property name , use dot notation to get the property value
var penCount = shoppingCart.pen;
// console.log(penCount);
// console.log(shoppingCart);
// normal object property use
// console.log(shoppingCart.pen);

var propertyName = 'books';
var propertyValues = shoppingCart[propertyName];
// console.log(propertyName, propertyValues);


var properties = Object.keys(shoppingCart);
// console.log(properties);
var propertyValues = Object.values(shoppingCart);
// console.log(propertyValues);

// set property values with 3 ways

shoppingCart.mouse = 15;
console.log(shoppingCart);

shoppingCart['mouse'] = 29;
console.log(shoppingCart);

shoppingCart[propertyName] = 89;
console.log(shoppingCart);