/* Consumiendo la API */
const apiBaseUrl = "https://api-manteca-y-harina.herokuapp.com";
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
        .catch(error => {
            console.error('Error:', error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...algo salió mal',
                text: `${error}`,
            })
        })
        .then((contenido) => {
            console.log(contenido);
            location = "/public/views/upload.html"
        })
}

export { updateImage };