// Asynchronous Programming(Welcome to Advance concept of Js)

// 0. Asynchronous progg. vs synchronous progg.
// 0.5 interpreted Progg language
//1. Dynamically Type Programming Language

// var x  = 10;
// console.log(x, typeof x);

// x = true;
// console.log(x, typeof x);

// x = "hello";
// console.log(x, typeof x);



//2. Hoisting - 
// var -> undefined
// regular fn will also allot M/E

// console.log(name); // un
// console.log(age); // un

// var name = "chintu";
// let age = 10;

// console.log(name); // c
// console.log(age); // 10

// byy() // un
// hii() // err
// function hii(){
//     console.log(1);
    
// }
// // byy() // un
// // hii() // err
// const byy = ()=>{
//     console.log("2");
    
// }
// byy() // 
// hii() //





//3. Lexical Scope in JS - visibility

// hello()
// function hello(){
//     console.log(name); // un
//     console.log("age"); // err hoisting

//     if(101){
//         var name = "ram";
//         let age = 10;
//           console.log(name); // rm
//           console.log(age); // 10
//     }
//     console.log(name); // ram
//     console.log(age); // err scope
    
// }



//4.  Execution Context

console.log("start");
console.log(one());

function three(){
    return "hello from fn 3"
}

function one(){
    console.log(name);
    var name = "chintu";
    three()
    console.log(name); 
}
console.log("mid");
two();


function two(){
    console.log("error");
    let age = 10;
    console.log(age);
    console.log(three())  
}

console.log("End");


// 5. Timer 


console.log("start");
setTimeout(()=>{
    console.log("hello");
},5000)

setInterval(()=>{
    console.log("bye");
},3000)

console.log("end");



//6. Event Loop
// start
// mid
// end
//1
// undefined
// ram
// hello form 3 fn
// 3
// hello from fn 2
// 2

console.log("start");
setTimeout(()=>{
    console.log(two());
},5000)

function one(){
    return 1;
    three();
    console.log("hello from fn 1");
}
console.log("mid");

function two(){
    console.log(name);
    var name = "ram";
    console.log(name);
    console.log(three());
    console.log("hello from fn 2");
    return 2;  
}

setInterval(()=>{
    three()
},10000)

function three(){
    console.log("hello from fn 3");
    return 3;
}

setTimeout(()=>{
    console.log(one());
},0)

console.log("end");
















// 7. Closures ---> 
















// 8. Curring