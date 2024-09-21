// console.log('Hello');

// const Country = 'I Love Bangladesh more';

// console.log(Country);

// let playerName = "Mashrafee"

// let age = 56
// // playerName = 34 [Wrong]
// age = 46

// // Typescript solve the problem in code editor this is the special feature

// let player;
// console.log(player); //undefined


// player = "Farhad"

// player = 22 //undefined is not data type so we can re assign this eassily


// // function multiply (a, b){
// //     return a * b
// // }

// // console.log(multiply(3,5));

// // showing some error in parameter a and b because we can not specified the type of a and b

// //Function
// function multiply(a: number, b: number) {
//     return a * b
// }
// console.log(multiply(3, 5));

// //Array

// let fruits = ['Apple', 'Orange', 'Banana']

// // fruits.push(34) Given error before compailing
// fruits.push('Ananas')

// let fruit = []

// fruit.push(34) // Given no error because it can be any type of array
// fruit.push('Banana')

// //giving multiple types of data in an array

// let mixed = ['Farhad', 34, false]

// // now i can eassily push this 3 types of data in this array but i cant push other types

// let playerDetails = {
//     name: 'Mahamudullah',
//     age: 40,
//     isPlaying: true
// }

// // playerDetails.name = 45  given error because name ois string typed

// // Explicit in declaring variable 

// let a;

// a = 58
// a = 'Farhad'

// // but when we are telling that

// let b: string;
// let c: number;

// // b = 34 given eror because b only can recieve string type 

// // Explicit in Array

// let d: string[] = [];
// // d.push(34) given error because i only can push string in this array
// d.push('Farhad')

// let e: (string | number)[] = [];

// //now we can push string or number 2 types of data in this array

// // Explicit in Object

// let f: object;

// f = {
//     name: 'farhad',
//     age: 22,
//     isStudent: true
// }
// // in this object i can assign any type of data

// //but when we are spwcifically telling data types we cant assign other data types in object

// let g: {
//     name: string,
//     age: number,
//     adult: Boolean
// }
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
// }

// //Matched all types given no error

// // function type 
// let myFUn: Function

// // myFUn = 6 I cant tell that because i mentiones Earleir that this is Function Type

// myFUn = () => {
//     console.log('hello');
// }
// const myFUun = (a: string, b: number) => {
//     console.log(`Hello I am ${a} , ${b} years old`);
// }
// myFUun('Farhad Hossen', 22)

// // myFUun(22,'Farhad Hossen') because a can only recive string not number thats why given error

// const myFunc = (a: string, b: number, c?: string) => {
//     console.log(`Hello I am ${a} , ${b} years old`);
// }
// myFunc('Farhad Hossen', 22)

// // When we need a optional parameter we have to use ? mark

// const myFun = (a: string, b: number, c: string = '10') => {
//     console.log(`Hello I am ${a} , ${b} years old`);
// }
// myFun('Farhad Hossen', 22)

// // Specifying parameter using = 
// const farhad = (a: string, b: string) => {
//     return a + b
// }
// farhad('farhad', 'Hossen')

// //When We Are No Returning Any Thing from Function Typescript Return A Void And Javascript Returning Undffined

// // const userDetails = (
// //     id: string | number,
// //     user: { name: string; age: number }
// // ) => {
// //     console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
// // }
// // const sayHello = (user: { name: string; age: number }) => {
// //     console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."}) ${user.name}`);
// // }
// // huge function we can eassily komano jabe using common using type allis

// type stringORnumber = string | number;
// type userType = { name: string; age: number }

// const userDetails = (
//     id: stringORnumber,
//     user: userType
// ) => {
//     console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
// }
// const sayHello = (user: userType) => {
//     console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."}) ${user.name}`);
// }

// let add :(x :number , y : number) => number;


// add = (a: number , b: number) => {
//     // console.log(a + b); 
//     //Type '(a: number, b: number) => void' is not assignable to type '(x: number, y: number) => number'.
//     //Type 'void' is not assignable to type 'number'.
//     return a +b;
// }

// let calculation :( a: number , b : number , c : string) => number;

// calculation = ( a: number , b : number , c : string) =>{
//     if(c == "Add"){
//         return a + b
//     }else{
//         return a-b
//     }
// }

// console.log(calculation(10,5, 'Add'));


import {Player} from './Player.js'

console.log(Player);

const mashrafi = new Player('Mashrafi',40,'Bangladesh')
const sakib = new Player('Sakib',38,'Bangladesh')
console.log(sakib.age);


const players : Player[] = []

players.push(mashrafi)
