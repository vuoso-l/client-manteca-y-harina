const form = document.querySelector("form");
let tokenJWT = localStorage.getItem("jwt");
console.log(tokenJWT);
//una vez funcione el bloqueo y acceso con el token
//ver de armar el form con js para bloquear el acceso
//si no se tiene el token
form.addEventListener("submit", (e) => {
    e.preventDefault();
    uploadImage();
})

/* Consumiendo la API */
const apiBaseUrl = "http://localhost:3000";
let apiUpload = "/upload";

const uploadImage = () => {
    const myHeaders = new Headers();
    myHeaders.append("authorization", tokenJWT);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: new FormData(form),
        redirect: 'follow'
    };

    fetch("http://localhost:3000/upload", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
