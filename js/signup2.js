//VARIABLES
var signUpBtn = document.querySelector("#sign-up-btn");

var userName = document.getElementById("name-inp"); //""
var emailInp = document.getElementById("email-inp"); //""
var passwordInp = document.getElementById("password-inp"); //""

var allUsers;//undefined

//CONDITIONS
if(localStorage.getItem("users")){
    allUsers = JSON.parse(localStorage.getItem("users"));//array of object
}else{
    allUsers = [];//empty array
}

//WATCHERS
signUpBtn.addEventListener("click" , addUser);

// add user function
function addUser(){
    // to make sure there will not be empty item added
    if(userName.value == "" || emailInp.value == "" || passwordInp.value == ""){
        alert("please enter values");
    }else{
    //get values of product (store related data of product in object)
    var user = {
        name : userName.value ,
        email : emailInp.value ,
        password : passwordInp.value ,
    }
    allUsers.unshift(user);
    localStorage.setItem("users" ,JSON.stringify(allUsers))//array of objects 
    console.log(allUsers);
    userName.value = ""; //to empty input place after adding product
    emailInp.value = "";//to empty input place after adding product
    passwordInp.value = "";//to empty input place after adding product
    location.href = `../login.html`
}
}
/*
users from  local storage  
loop 
condition email from local storage = userLogin 
user.todolist .push(note)

*/