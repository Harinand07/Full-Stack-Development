// // // ======= [ ES6 Concepts ]=======

// // // 1. Destructing in js


// // // Array

// // // let arr = [1,2,3,4];
// // // let [a,b,c,d,e] = arr;

// // // console.log(a,b,c,d,e);



// // // Object

// // // let obj = {a:1,b:2};
// // // let {c,a} = obj;

// // // console.log(c,a);








// // // 2. Type conversion

// // // convert str data type value ---> num data type

// // let str = "123";

// // // let a1 = Number(str);
// // // console.log(a1, typeof a1);

// // // let a2 = +(str);
// // // console.log(a2, typeof a2);

// // // let a3 = parseInt(str);
// // // console.log(a3, typeof a3);






// // // convert num data type value ---> str data

// // // let num = 123;

// // // let a1 = String(num);
// // // console.log(a1, typeof a1);

// // // let a2 = num.toFixed();
// // // console.log(a2, typeof a2);

// // // // concatination
// // // let bag = ""

// // // bag+=num;

// // // console.log(bag, typeof bag);





// // // 3. Falsy Values in JavaScript

// // // 0
// // // false
// // // ""
// // // null
// // // undefined
// // // NaN



// // // console.log("hii" && !"byy" || "shy" && null || !undefined);


// // // 4. Ternary Operator

// // // syn: condition?"1st block run":"2nd block run"

// // // 5>3?console.log("hello"):console.log("chalo");
// // // 1?console.log("hello"):console.log("chalo");





// // // 5. Nullish Coalescing Operator (??)

// // //synx:  a??b if a is neither null nor undefined then a is answer
// // // other b is answer

// // // let ans1 = null??"user"
// // // let ans2 = "null"??"user"
// // // let ans3 = null??undefined
// // // let ans4 = "raj"??"user"

// // // console.log(ans1,ans2,ans3,ans4);



// // // 6. String toLowerCase() and toUpperCase()

// // // let str = "HeLLo";





// // // 7. Array add and remove operation

// // // let arr = [1,2,3,4];

// // // // Add Operation

// // // // push()---> RHS add ending point



// // // // unshift()---> LHS | Starting point




// // // Remove Operation and return as well


// // // pop()---> RHS remove ending point



// // // // shift()---> LHS | Starting point





// // // 8. Array indexOf()

// // // let arr = [1,3,5,1,2,1];
// // // console.log(arr.indexOf(1));





// // // 9. Rest and Spread Operator

// // // Spread Operator -

// // // array
// //  let a1 = [1,2,3];
// //  let a2 = [4,5,6];

// //  let a3 = [...a1,...a2];
// //     console.log(a3, typeof a3);


// // // Object

// // // let o1 = {"a":1};
// // // let o2 = {"b":2};




// // // Rest operator - return an array of remaining elements
// // function add(a,...b){
// //     console.log(a);
// //     console.log(b);
// // }
// // add(1,2);
// // add(1);
// // add(1,2,3);




// // // 10. reverse(), join() and split() Method
// // let arr = ["h","e","l","l","o"];
// // let str = "1345";
// // //str[ip] -> split -> arr[op]

// // let ans = str.split("");
// // console.log(ans, typeof ans);

// // //arr[ip] join -> str[op]

// // let ans1 = arr.join("-");
// // console.log(ans1, typeof ans1);


// // // 11. Array slice() and splice()

// // //return a new array containing the extracted elements without modifying the original array
// // //slice .>copy slice(start,end-1)
// // let arr[1,2,3,4,5];
// // //slice .>copy slice()
// // //let ans = arr.slice(1,4);
// // // console.log(ans, typeof ans);

// // let ans = arr.slice(1,3);
// // console.log(ans, typeof ans);

// // //splice() -> it is used to add/remove elements from an array and returns the removed elements as a new array
// // //splice(start,deleteCount,item1,item2,...)

// // // 12. Template Literals -
// var name = "Mithu";
// console.log("My name is ",name);

// // template literals
// console.log(`My name is ${name}`);



// // // 13. Function with Default Parameter
// function hii(name="Guest"){
//     console.log(name);
// }
// hii();
// hii("Mithu");

// // // 14. Callback and Higher Order Function
// function HOF(callback){
//     console.log("HOF is running");
//     callback();
//     console.log("HOF is ending");
// }
// function greet(){
//     console.log("Hello from callback function");
// }
// HOF(greet);

// // //15. Array Higher Order Function Methods


// // let arr = [1,2,3,4,5];
// // arr.map((elem,index,arr,d)=>{
// //     console.log(elem,index,arr,d);
// // });
// // // // a) map()
// // //return a new array containing the results of applying a provided function to every element in the calling array
// // //size of ip arr = size of op arr

// // let arr = [1,2,3,4,5];
// // let ans = arr.map((elem)=>{
// //     return elem+5;
// // });
// // console.log(ans, typeof ans);
// // // // // b) filter()
// // //return a new array containing all elements of the calling array that satisfy the provided testing function
// // //size i dynamic

// // let arr = [1,2,3,4,5];
// // let ans = arr.filter((elem)=>{
// //     return elem%2==0;
// // });
// // console.log(ans, typeof ans);

// // // // c) sort()
// // let arr = [10,3,30,4,-5];
// // let ans = arr.sort((a,b)=>b-a);
// // console.log(ans, typeof ans);




//d) reduce() -> used single value a a result



let arr = [1,2,3,4,5];

let ans = arr.reduce((acc,elem)=>{
    return acc+elem;
},0);
console.log(ans, typeof ans);






// // // e) forEach()
// //return undefined and it is used to execute a provided function once for each array element
// // let arr = [1,2,3,4,5];
// // let ans = arr.forEach((elem)=>{
// //     console.log(elem+5);
// // });
// // console.log(ans, typeof ans);


// // // f) includes()

// // // 16. Problems on str pattern [Extra]