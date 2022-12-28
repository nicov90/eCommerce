const emailInput = document.querySelector("#login__email");
const passwordInput = document.querySelector("#login__password");
const submitBtn = document.querySelector(".login__submit");
const loginError = document.querySelector(".login_error");
emailInput.focus();

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const email = "admin@correo.com";
    const password = "admin";

    const emailToVerify = emailInput.value;
    const passwordToVerify = passwordInput.value;
    if( (emailToVerify == email) &&(passwordToVerify == password)){
        location.href = "admin.html";
    }else{
        loginError.style.display = "block";
    }
    /*alert(`Email: ${emailToVerify}
Contraseña: ${passwordToVerify}`);*/
    return false;
});