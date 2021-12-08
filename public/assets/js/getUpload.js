import { createFormAndUpdateImage } from "./createFormAndUpdateImage.js";
import { deleteImg } from "./deleteImg.js";

const tbody = document.querySelector("tbody");
const urlApi = "https://api-manteca-y-harina.herokuapp.com";

fetch(urlApi + "/upload")
    .then((response) => response.json())
    .catch(error => console.error('Error:', error))
    .then((contenido) => {
        let imagen = contenido.image;
        imagen.forEach(element => {
            tbody.innerHTML += `
            <tr>
                <td>"${element.title}"</td>
                <td>"${element.description}"</td>
                <td>"${element.thematic}"</td>
                <td class="tdBtn">
                    <a href="${element.imageURL}" target="_blank" class="btnView">Ver</a>
                    <button id="${element.id}" class="btnUpdate">Modificar</button>
                    <button id="${element.id}" class="btnDelete">Borrar</button>
                </td>
            </tr>
            `
        });

        createFormAndUpdateImage(imagen);

        deleteImg(imagen);

    })