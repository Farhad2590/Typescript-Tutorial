"use strict";
console.log('Hello');
const Country = 'I Love Bangladesh more';
console.log(Country);
let playerName = "Mashrafee";
let age = 56;
// playerName = 34 [Wrong]
age = 46;
// Typescript solve the problem in code editor this is the special feature
let player;
console.log(player); //undefined
player = "Farhad";
player = 22; //undefined is not data type so we can re assign this eassily
// function multiply (a, b){
//     return a * b
// }
// console.log(multiply(3,5));
// showing some error in parameter a and b because we can not specified the type of a and b
//Function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 5));
//Array
let fruits = ['Apple', 'Orange', 'Banana'];
// fruits.push(34) Given error before compailing
fruits.push('Ananas');
let fruit = [];
fruit.push(34); // Given no error because it can be any type of array
fruit.push('Banana');
