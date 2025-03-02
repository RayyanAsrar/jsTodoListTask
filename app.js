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
let todoValue = document.getElementById('todoValue')
let addBtn = document.getElementById('addBtn')
let list = document.getElementById('list')
function addPost() {
    if (todoValue.value !== "") {
        list.innerHTML += `
        <li>
        <input type="text" value="${todoValue.value}" disabled>
        <button onclick="editTodo()">Edit </button>
        <button onclick="removePost()">Remove</button>
       </li>`
        todoValue.value = ""
    }
    else {
        alert('Write Something')
    }
}
function removePost() {
    event.target.parentNode.remove();
}
function editTodo() {
    let target = event.target
    let oldVal = target.parentNode.querySelector("input");
    let editBtn = target.parentNode.childNodes[3]
    if (editBtn.innerText === 'Edit') {
        editBtn.innerText = "Update"
        oldVal.disabled = false
        oldVal.focus()
    } else {
        editBtn.innerText = "Edit"
        oldVal.disabled = true
    }


}