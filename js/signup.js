function validateName(){
    let nameError = document.getElementById("fullname-error");
    let name = document.getElementById('fullname');
    if(name.value.trim()==""){
        nameError.innerHTML = "Please enter you full name";
        return false;
    }else{
        nameError.innerHTML = "";
       return true;
    }

}

function validateUsername(){
    let nameError = document.getElementById("username-error");
    let username = document.getElementById('username');
    if(username.value.trim()==""){
        nameError.innerHTML = "Please enter a username";
        return false;
    }else if(username.value.length<5){
        nameError.innerHTML = "Username must not be less than 5 characters";
        return false;
    }else{
        nameError.innerHTML = "";
       return true;
    }

}
function validateEmail(){
    let emailError = document.getElementById("email-error");
    let email = document.getElementById("email");

    if(email.value.trim() == ""){
        emailError.innerHTML = "Please enter your email address";
        return false;
    }else if (!(email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))){
        emailError.innerHTML = "Please enter a valid email address";
        return false;
    }else{
        emailError.innerHTML = "";
        return true;
    }
}
function validatePassword(){
    let passwordError = document.getElementById("password-error");
    let password = document.getElementById('password');

    if(password.value.trim()==""){
       passwordError.innerHTML = "Please enter password.<br>Password must be 8-12 characterslong, and contain atleast one upper and lower case letter, number and symbol.";
        return false;
    }else if(!(password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,12}$/))){
        passwordError.innerHTML = "Password you entered doesn't meet the requirement.<br>Password must be 8-12 characterslong, and contain atleast one upper and lower case letter, number and symbol."

    }else{
        passwordError.innerHTML = "";
        return true;
    }

}
function confirmPassword(){
    let password = document.getElementById('password');
    let confirmError = document.getElementById("confirm-error");
    let confirm = document.getElementById('confirm');
    if(confirm.value.trim()==""){
        confirmError.innerHTML = "Please re-enter your password here";
         return false;
    }else if(password.value!=confirm.value){
        confirmError.innerHTML="Password mismatch!. Please re-enter password";
        confirm.value="";
        return false;
    }else {
        confirmError.innerHTML="";
        return true;
    }

}
function validateSubmit(){
    let submitError=document.getElementById("submit-error")
    if(!validateUsername() || !validateEmail() || !validateName() || !validatePassword() || !confirmPassword()){
       submitError.innerHTML="All fields are required. Please enter valid credentials.";
        return false;

    }else{
        submitError.innerHTML="";
        return true;
    }
}
