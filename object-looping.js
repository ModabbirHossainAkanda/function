// var shoppingCart ={
//     books: 3,
//     sunglass: 4,
//     keyboard: 9,
//     mouse: 2,
//     pen: 20,
//     shoes: 2,
//     bottle: 10,
//     tissue: 24,
//     mobile: 9,
//     table: 1
// }
// var keys = Object.keys(shoppingCart);
// // console.log(keys);

// var values = Object.values(shoppingCart);
// // console.log(values);
// // var keys =['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];

// for(var i=0; i < keys.length; i++){
//     console.log(keys[i])
// }
    

// var shopingItems = ['books', 'sunglass', 'shoes', 'pen', 'mouse', 'keyboard'];
// var friendsAge = [12, 45, 78, 32, 90, 37];
// var friendsAge ={
//     sohel: 13,
//     rana: 10,
//     azim: 22,
//     noman: 12,
//     jibon: 15,
//     asif: 17
// }
// var keys = Object.keys(shoppingCart);
// console.log(keys);


var shoppingCart ={
    books: 3,
    sunglass: 4,
    keyboard: 9,
    mouse: 2,
    pen: 20,
    shoes: 2,
   
   
}
const keys = Object.keys(shoppingCart);
console.log(keys);

for(var i= 0; i < keys.length; i++){
   var propertyName = keys[i];
   var propertyValue = shoppingCart[propertyName];
   console.log(propertyName);
}

for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}

