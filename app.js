//with prompt************************
// let todoValue= document.getElementById('todoValue')
// let addBtn= document.getElementById('addBtn')
// let list= document.getElementById('list')
// function addPost(){
//     if (todoValue.value!=="") {
//         list.innerHTML+=`
//         <li>${todoValue.value}
//         <button onclick="editTodo()">Edit </button>
//         <button onclick="removePost()">Remove</button>
//        </li>`
//        todoValue.value=""}
//         else{
//         alert('Write Something')
//     }
// }
// function removePost(){
//     event.target.parentNode.remove();
// }
// function editTodo(){
//     let target = event.target
//     let oldVal=target.parentNode.childNodes[0]
//     let newVal=prompt("edit your value",oldVal.textContent.trim())
//     oldVal.textContent=newVal
// }
// with input***********
//******************FIST METHOD */
// let todoValue = document.getElementById('todoValue')
// let addBtn = document.getElementById('addBtn')
// let list = document.getElementById('list')
// function addPost() {
//     if (todoValue.value !== "") {
//         list.innerHTML += `
//         <li>
//         <input type="text" value="${todoValue.value}" disabled>
//         <button onclick="editTodo()">Edit </button>
//         <button onclick="removePost()">Remove</button>
//        </li>`
//         todoValue.value = ""
//     }
//     else {
//         alert('Write Something')
//     }
// }
// function removePost() {
//     event.target.parentNode.remove();
// }
// function editTodo() {
//     let target = event.target
//     let oldVal = target.parentNode.querySelector("input");
//     let editBtn = target.parentNode.childNodes[3]
//     if (editBtn.innerText === 'Edit') {
//         editBtn.innerText = "Update"
//         oldVal.disabled = false
//         oldVal.focus()
//     } else {
//         editBtn.innerText = "Edit"
//         oldVal.disabled = true
//     }

// }
//**************************************** */
//**********SECOND METHOD */
let todoValue = document.getElementById("todoValue");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");
let arr = [];
function RenderList() {
  for (let i = 0; i < arr.length; i++) {
    list.innerHTML += `<li>
    <input type="text" value="${arr[i]}" >
   <button onclick="editTodo(${i})" >Edit </button>
     <button onclick="removeTodo(${i})">Remove</button>
   </li>`;
    // console.log(arr);
  }
}
function addPost() {
  list.innerHTML = "";
  if (todoValue.value !== "") {
    arr.push(todoValue.value);
    // console.table(arr);
    RenderList();
  } else {
    alert("bhia kuch likh lo andar ");
  }
  todoValue.value = "";
}
function removeTodo(index) {
  list.innerHTML = "";
  arr.splice(index, 1);

  RenderList();
}
function editTodo(index){
    list.innerHTML=""
    let newVal= prompt('han bhai kia haal chal hukum karo ')
    arr.splice(index,1,newVal)
    RenderList()
}