const api = "https://jsonplaceholder.typicode.com/todos";

fetch(api)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    displayTable(data);
  })
  .catch((err) => console.log(err));

//   {
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
// }
function displayTable(arr) {
  arr.forEach((el) => {
    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = el.userId;

    const td2 = document.createElement("td");
    td2.innerText = el.title;

    const td3 = document.createElement("td");
    td3.innerText = el.completed;

    const td4 = document.createElement("td");
    td4.innerText = el.id;

    row.append(td1, td2, td3, td4);
    document.querySelector("tbody").append(row);
  });
}
