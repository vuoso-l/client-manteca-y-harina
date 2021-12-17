/* Consumiendo la API */
const apiBaseUrl = "http://localhost:3000";
let apiUpload = "/update/";

const updateImage = (form, image) => {
    let settings = {
        method: "PUT",
        body: new FormData(form),
    }

    fetch(`${apiBaseUrl}${apiUpload}${image.id}`, settings)
        .then((response) => {
            console.log(response.json());
        })
        .catch(error => console.error('Error:', error))
        .then((contenido) => {
            console.log(contenido);
            location = "/public/views/upload.html"
        })
}

export { updateImage };