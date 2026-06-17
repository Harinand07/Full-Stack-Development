//function - is a reusable block of code that performs a specific task. It can take input, process it, and return an output. Functions help to organize code, make it more readable, and allow for code reuse.
//1. function definition/declaration

//a. function with no parameter
// function greet(){
//     //block of code/event
//     console.log("hello from js");
// }

// //2. function calling/invoking
// greet()
// greet()

// //b. function with parameter
// function add(x,y){
//     console.log(x+y);
// }
// add(1,3);

// //c. function with return type and no parameter
// function greet1(){
//     return "hello from js";
// }console.log(greet1());

// //d. function with return type and parameter
// function add1(x,y){
//     return x+y;
// }console.log(add1(1,3));

// console.log(add1(1,3));

//3. fn expression/statement

// let n = function(a){
//     return a+5;
// }
// console.log(n(5));

//arrow function
const add = (a)=>{
    return a+5;
}

const add = a=>a+5; //if there is only one parameter and one line of code we can omit the parentheses and the return keyword

console.log(add(5));