// let a = 5;
// let b = a++;
// let c = --b;
// let d = ++a;

// console.log(a++,++b,--c,--d,a,b,c,d); 
// // 7 5 3 6 8 5 3 6



// let arr = [1,2,3];
// let arr1 = arr;

// arr1.push(10);
// arr.pop();
// //reference data type -> when we assign a variable to another variable it will not create a new copy of the value but it will point to the same memory location where the value is stored. so when we change the value of one variable it will change the value of another variable as well because both variables are pointing to the same memory location.
// console.log(arr,arr1);

// let str = "hello";
// let str1 = str;
// str1 = "world";
// console.log(str,str1);
//value data type -> when we assign a variable to another variable it will create a new copy of the value and store it in a different memory location. so when we change the value of one variable it will not change the value of another variable because both variables are pointing to different memory locations.


let arr = [1,2,3];
let arr1 = arr;

arr1.push(10);
arr.unshift(30);

arr1 = [2,3,4];
arr.pop()
arr.push(20);

console.log(arr,arr1);