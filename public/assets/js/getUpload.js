import { showUpdateImage } from "./showUpdateImage.js";
import { deleteImg } from "./deleteImg.js";
import { showImageUpload } from "./showImageUpload.js";

const apiBaseUrl = "https://api-manteca-y-harina.herokuapp.com";
const urlGetImages = "/images";

fetch(`${apiBaseUrl}${urlGetImages}`)
    .then((response) => response.json())
    .catch(error => {
        console.error('Error:', error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...algo salió mal',
            text: `${error}`,
        })
    })
    .then((contenido) => {
        let images = contenido.image;

        showImageUpload(images);

        showUpdateImage(images);

        deleteImg(images);

    })