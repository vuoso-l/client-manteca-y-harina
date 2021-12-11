import { createFormAndUpdateImage } from "./createFormAndUpdateImage.js";
import { deleteImg } from "./deleteImg.js";
import { showImageUpload } from "./showImageUpload.js";

const urlApi = "https://api-manteca-y-harina.herokuapp.com";

fetch(urlApi + "/upload")
    .then((response) => response.json())
    .catch(error => console.error('Error:', error))
    .then((contenido) => {
        let images = contenido.image;

        showImageUpload(images);

        createFormAndUpdateImage(images);

        deleteImg(images);

    })