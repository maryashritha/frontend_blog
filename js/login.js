function validateName(){
    let nameError = document.getElementById("name-error");
    let username = document.getElementById('username');
    if(username.value.trim()==""){
        nameError.innerHTML = "Please enter  your username";
        return false;
    }else if(username.value.length<5){
        nameError.innerHTML = "Please enter a valid username";
        return false;
    }else{
        nameError.innerHTML = "";
       return true;
    }

}

function validatePassword(){
    let passwordError = document.getElementById("password-error");
    let password = document.getElementById('password');

    if(password.value.trim()==""){
       passwordError.innerHTML = "Please enter password";
        return false;
    }else if(!(password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,12}$/))){
        passwordError.innerHTML = "Incorrect Password. Please try again."

    }else{
        passwordError.innerHTML = "";
        return true;
    }

}

function validateSubmit(){
    let submitError=document.getElementById("submit-error");
    if(!(validateName()) ||!(validatePassword())){
       submitError.innerHTML="All fields are mandatory. Please enter valid credentials";
        return false;

    }else{
        submitError.innerHTML="";
        return true;
    }
}

    