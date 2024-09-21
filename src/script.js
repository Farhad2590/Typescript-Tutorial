// "use strict";
// console.log('Hello');
// const Country = 'I Love Bangladesh more';
// console.log(Country);
// let playerName = "Mashrafee";
// let age = 56;
// // playerName = 34 [Wrong]
// age = 46;
// // Typescript solve the problem in code editor this is the special feature
// let player;
// console.log(player); //undefined
// player = "Farhad";
// player = 22; //undefined is not data type so we can re assign this eassily
// // function multiply (a, b){
// //     return a * b
// // }
// // console.log(multiply(3,5));
// // showing some error in parameter a and b because we can not specified the type of a and b
// //Function
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(3, 5));
// //Array
// let fruits = ['Apple', 'Orange', 'Banana'];
// // fruits.push(34) Given error before compailing
// fruits.push('Ananas');
// let fruit = [];
// fruit.push(34); // Given no error because it can be any type of array
// fruit.push('Banana');
// //giving multiple types of data in an array
// let mixed = ['Farhad', 34, false];
// // now i can eassily push this 3 types of data in this array but i cant push other types
// let playerDetails = {
//     name: 'Mahamudullah',
//     age: 40,
//     isPlaying: true
// };
// // playerDetails.name = 45  given error because name ois string typed
// // Explicit in declaring variable 
// let a;
// a = 58;
// a = 'Farhad';
// // but when we are telling that
// let b;
// let c;
// // b = 34 given eror because b only can recieve string type 
// // Explicit in Array
// let d = [];
// // d.push(34) given error because i only can push string in this array
// d.push('Farhad');
// let e = [];
// //now we can push string or number 2 types of data in this array
// // Explicit in Object
// let f;
// f = {
//     name: 'farhad',
//     age: 22,
//     isStudent: true
// };
// // in this object i can assign any type of data
// //but when we are spwcifically telling data types we cant assign other data types in object
// let g;
// // g = {
// //     name: 'farhad',
// //     age: 22,
// //     adult: 'true'
// // }
// // given error before compailing  because i entered adult as a string 
// g = {
//     name: 'farhad',
//     age: 22,
//     adult: true
// };
// //Matched all types given no error
