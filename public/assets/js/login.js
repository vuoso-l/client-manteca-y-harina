import { loguinUserAndRedirect } from "./loginUserAndRedirect.js";
import { emailNotValid, passNotValid, showErrorEmail, showErrorPass } from "./showLoginError.js";
const formulario = document.querySelector(".formLogin");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailNotValid(email.value) || passNotValid(password.value)) {
        showErrorEmail();
        showErrorPass();
    } else {
        loguinUserAndRedirect();        
    }
});