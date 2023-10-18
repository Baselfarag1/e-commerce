//VARIABLES for login
var signInBtn = document.querySelector("#sign-in-btn");
var signUpBtn = document.querySelector("#sign-up-btn");

var email = document.getElementById("email-inp"); //""
var password = document.getElementById("password-inp"); //""

let allUsers;
let usersApi;

let getProducts = async function(){
    let response  = await fetch(`https://api.escuelajs.co/api/v1/users`);
     usersApi = await response.json();
     console.log(usersApi)
        // for(var i=0 ; i<usersApi.length ; i++){
        // allUsers.unshift(usersApi[i]);
        // }
    // if(localStorage.getItem("users")){
    //     usss = JSON.parse(localStorage.getItem("users"));//array of object
    //     const children = usersApi.concat(usss);
    //     console.log(children)
    //     localStorage.setItem("users", JSON.stringify(children));
    // }else{
    //     localStorage.setItem("users", JSON.stringify(usersApi));
    // }
    }
getProducts();

// CONDITIONS
if(localStorage.getItem("users")){
    allUsers = JSON.parse(localStorage.getItem("users"));//array of object
    console.log(allUsers)
}else{
    allUsers = [];
}

//WATCHERS
signInBtn.addEventListener("click" , login);
signUpBtn.addEventListener("click" , signUpPage);

//signup function
function signUpPage(){
    location.href = `../signup.html`
}

//login function
var x = false
// checkUsers = JSON.parse(localStorage.getItem("users"));//array of object
function login(){
    for(var i=0 ; i<allUsers.length ; i++){
        if(email.value == allUsers[i].email && password.value == allUsers[i].password){
            // localStorage.setItem("email", allUsers[i].userEmail)
            location.href = `../index.html`
            x = true;
            // var usedName = allUsers[i].name
        }
    }
    for(var i=0 ; i<usersApi.length ; i++){
        if(email.value == usersApi[i].email && password.value == usersApi[i].password){
            // localStorage.setItem("email", allUsers[i].userEmail)
            location.href = `../index.html`
            x = true;
            // var usedName = allUsers[i].name
        }
    }
    if(x == false){
        alert("wrong email or password")
    }
}


