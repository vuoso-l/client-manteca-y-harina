import { loguinUserAndRedirect } from "./loginUserAndRedirect.js";
const formulario = document.querySelector(".formLogin");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    loguinUserAndRedirect();
});