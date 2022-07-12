let sign = document.getElementById("signForm")
let res = document.getElementById("registerForm")

let main = document.getElementById("mainDiv")
let todo = document.getElementById('todoDiv')


// Change form on button click from login form to register form

function changeForm(){
    sign.classList.add("hidden")
    res.classList.remove("hidden")
}  

function changeForm1(){
    sign.classList.remove("hidden")
    res.classList.add("hidden")
}  


// Check if login is true function

let getLogin = localStorage.getItem('login')

if(getLogin){
        main.classList.add("hidden")
        todo.classList.remove("hidden")
}else{
        main.classList.remove("hidden")
        todo.classList.add("hidden")
}



// Login validation and getting elements from local storage

function logValidation(){
    
    let email = document.getElementById('em')
    let pass = document.getElementById('pass')
    let emailItem = localStorage.getItem('email')
    let passItem = localStorage.getItem('password')

    if(email.value === ''){
        setTimeout(function(){
            alert("Please enter your email")
        },0)

    }else if(emailItem == null || email.value != emailItem){
        setTimeout(function(){
            alert("Email not found")
        },0)
        

    }else if(pass.value == '' || pass.value != passItem){
        setTimeout(function(){
            alert("Password incorrect")
        },0)
        

    }else{
        let isLogin = localStorage.setItem('login',true);
        main.classList.add("hidden")
        todo.classList.remove("hidden")

    }
}

// Register validation and setting elements on local storage

function registerValidation(){

    let firstName = document.getElementById('fName');
    let lastName = document.getElementById('lName');
    let userName = document.getElementById('uName');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if(firstName.value == ""){
        alert("Please enter your First Name")

    }else if(lastName.value == ""){
         firstName = localStorage.setItem('firstName',firstName.value)
         alert("Please enter your Last Name")

    }else if(userName.value == ""){
        lastName = localStorage.setItem('lastName',lastName.value)
        alert("Please enter your User Name")

    }else if(email.value == ""){
        userName = localStorage.setItem('userName',userName.value)
        alert("Please enter your email")

    }else if(password.value == ""){
        email = localStorage.setItem('email',email.value)
        alert("Please enter your password")

    }else{
        password = localStorage.setItem('password',password.value)
    }

} 

// Displaying todo page with login checking

function changeLogin(){

    localStorage.setItem('login',false)

    if(!getLogin){
        main.classList.add("hidden")
        todo.classList.remove("hidden")
    }else{
        main.classList.remove("hidden")
        todo.classList.add("hidden")
    }
}



// Creating header with First Name and Last Name from local storage

let fname = localStorage.getItem('firstName')
let lname = localStorage.getItem('lastName')
let todoUser = document.getElementById('userName')
todoUser.innerHTML = fname +" "+ lname;


// Getting todo list from storage

let items = localStorage.getItem('ToDo')
let myToDo = JSON.parse(items)

// If to do list is empty on Local Storage the below variable should convert to array for the app ->
// to work as intended to

let todoList = JSON.parse(items)


let list = document.getElementById('myList');

// Add item function from add button

function addItem(){

    let item = document.getElementById('addItem').value
    todoList.push(item)
    list.innerHTML += `<li><button class="done">&#10003</button>${item}<button class="remove">X</button></li><hr>`

    localStorage.setItem('ToDo',JSON.stringify(todoList))
    
}

// Displaying todo items
for(let i = 0;i<myToDo.length;i++){
    list.innerHTML += `<li><button class="done">&#10003</button>${myToDo[i]}<button class="remove">X</button></li><hr>`
} 


// Removing items from both storage and list

let close = document.getElementsByClassName('remove')
let i;
for(i = 0;i<close.length;i++){
    close[i].onclick = function(){
        
        let removedItem = this.parentElement
        removedItem.style.display = 'none'

        todoList = todoList.splice(1,i)
        localStorage.setItem('ToDo',JSON.stringify(todoList))
        
    }
}


// Line through on click of tick button

let done = document.getElementsByClassName('done')
let j;
for(j = 0;j<close.length;j++){
    done[j].onclick = function(){
        this.parentElement.style.textDecoration = 'line-through'   
    }
}
