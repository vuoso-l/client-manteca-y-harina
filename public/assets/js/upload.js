const form = document.querySelector("form");
const image = document.querySelector("#image");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const tematica = document.querySelector("#tematica");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    uploadImage();
})

/* Consumiendo la API */
const apiBaseUrl = "https://api-manteca-y-harina.herokuapp.com";
let apiUpload = "/upload";

const uploadImage = () => {
    
    let settings = {
        method: "POST",
        body: new FormData(form),
    }

    fetch(apiBaseUrl + apiUpload, settings)
        .then((response) => response.json())
        .catch(error => console.error('Error:', error))
        .then((contenido) => {
            console.log('Success:', contenido);
        })
}
