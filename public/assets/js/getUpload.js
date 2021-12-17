import { createFormAndUpdateImage } from "./createFormAndUpdateImage.js";
import { deleteImg } from "./deleteImg.js";
import { showImageUpload } from "./showImageUpload.js";

const urlApi = "http://localhost:3000";

fetch(urlApi + "/images")
    .then((response) => response.json())
    .catch(error => console.error('Error:', error))
    .then((contenido) => {
        let images = contenido.image;

        showImageUpload(images);

        createFormAndUpdateImage(images);

        deleteImg(images);

    })