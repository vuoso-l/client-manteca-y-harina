const form = document.querySelector("form");
import {closeSession} from "./closeSession.js";
let tokenJWT = localStorage.getItem("jwt");
console.log(tokenJWT);
//una vez funcione el bloqueo y acceso con el token
//ver de armar el form con js para bloquear el acceso
//si no se tiene el token
form.addEventListener("submit", (e) => {
    e.preventDefault();
    uploadImage();    
})

closeSession();

/* Consumiendo la API */
const apiBaseUrl = "https://api-manteca-y-harina.herokuapp.com";
let apiUpload = "/upload";

const uploadImage = () => {
    const myHeaders = new Headers();
    myHeaders.append("authorization", `Bearer ${tokenJWT}`);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: new FormData(form),
        redirect: 'follow'
    };

    fetch(`${apiBaseUrl}${apiUpload}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
