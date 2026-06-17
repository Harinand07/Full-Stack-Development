//step 1 - select /catch the form

//let todoArr
//if(JSON.parse(localStorage.getItem("todoList"))==null){
//    todoArr = [];
//}else{
//    todoArr = JSON.parse(localStorage.getItem("todoList"));
//}

let todoArr = JSON.parse(localStorage.getItem("todo")) || [];
let favArr = JSON.parse(localStorage.getItem("fav")) || [];
displayTable(todoArr);
document.querySelector("form").addEventListener("submit",getDetails);

//step 2
function getDetails(e){
    e.preventDefault();
    let name = document.querySelector("#task").value;
    let priority = document.querySelector("#priority").value;
    //console.log(name,priority)

    let taskObj = {name,priority};
    todoArr.push(taskObj);
    console.log(todoArr);
    localStorage.setItem("todo",JSON.stringify(todoArr));

    // //tr
    //     <td>html</td>
    //     <td>html</td>
    //     <td>html</td>
    //     <td>html</td>
        //</tr>

        displayTable(todoArr);
}
function displayTable(arr){
    document.querySelector("tbody").innerText = "";
    arr.forEach((el)=>{
    const ro = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = el.name;

    const td2 = document.createElement("td");
    td2.innerText = el.priority;

    const td3 = document.createElement("button");
    td3.innerText = "add";
    td3.addEventListener("click",function(){
        favArr.push(el);
        localStorage.setItem("fav",JSON.stringify(favArr));

        alert("Todo added to Fav Page");
    })

    ro.append(td1,td2,td3);
    document.querySelector("tbody").append(ro);
});
}

