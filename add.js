// function add(num1, num2){
//     const sum = num1 + num2;
//     return sum;
// }

// const result1 = add(12, 13);
// const result2 = add(35, 7);
// const finalResult = add(result1, result2);
// console.log(finalResult);

function add(num1, num2){
    const multiplication = num1 * num2;
    return multiplication;
}
const result1 = add(10, 4);
const result2 = add(3, 9);
const finalResult = add(result1, result2);
// console.log(finalResult);


let bigNumber = BigInt(5);
let bigSquare = bigNumber ** 2n;

console.log(bigSquare);