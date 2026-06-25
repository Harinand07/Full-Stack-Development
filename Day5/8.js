// object data type - collection of key value pairs
// key is always string and value can be of any data type
// mutable - inbuilt functions that are used to change object value return the same object with updated value
// non-primitive data type

//create
let obj = {};
obj = {
    id:33,
    name:"mithu",
    hobbies:["dancing","singing"],
    status:false,
    address:{
        city:"gurugram",
    },
};

//read
console.log(obj,typeof (obj));

//bracket notation eg: obj["key"]
//dot notation eg: obj.key

//3. update obj 
obj['statu']=true;
obj.name = "vaibhav"


//create new key value pair in obj
obj.email="hm@gmail.com"
console.log(obj);

//4. delete
delete obj["email"];
delete obj.id;
console.log(obj);
