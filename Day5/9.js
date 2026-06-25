//loop in js
let obj = {
    name:"mithu",
    age: 22,
    status:true,
}

//for... in loop - used to iterate over the keys of an object
for(let key in obj){
    console.log(key,typeof key);
    console.log(obj[key]);
    //console.log(obj.key); //undefined - dot notation does not work with for... in loop why? because dot notation is used to access the value of a key in an object and it does not work with variables. In for... in loop, key is a variable that holds the current key of the object and it cannot be accessed using dot notation.
}