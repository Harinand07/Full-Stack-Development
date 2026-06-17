//array data structure
// array is a collection of different data types stored in a contiguous memory location
//dynamic size/length
//contiginous memory location
//indexing starts from 0
//mutable ->inbuilt fn that is ued to change arr value

var arr = [1,true,"hello"];
console.log(arr);

arr.push(5);
console.log(arr);

//create
var arr = [];
arr = [1,2,3];

//read
console.log(arr,typeof (arr));

//read specific index value
console.log(arr[0]);

//update
arr.push(10);

console.log(arr);

//delete
//RHs - pop() - removes the last element of the array and returns it
arr.pop();
console.log(arr);


//LH
//LHs shift() - removes the first element of the array and returns it
arr.shift();
console.log(arr);

arr.unshift(5);
console.log(arr);