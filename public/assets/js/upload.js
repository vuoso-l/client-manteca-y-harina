import { closeSession } from "./closeSession.js";
import { uploadImage } from "./uploadImage.js";
import * as error from "./showUploadError.js";
const btnCloseSesion = document.querySelector("#closeSession");
const containerUpload = document.querySelector(".containerUpload");
const form = document.querySelector("form");
const image = document.querySelector("#image");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const section = document.querySelector("#section");
const thematic = document.querySelector("#thematic");
let tokenJWT = localStorage.getItem("tokenM&H");

onload = () => {
    if (!tokenJWT) {
        btnCloseSesion.style.display = "none";
        containerUpload.innerHTML = `
            <section class="sectionImgError">
                <h2>No tienes acceso a esta sección!</h2>
                <img class="imgError" src="../assets/imgMyH/logo.jpg" alt="Logo m&h"></img>
            </section>   
            `;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (error.imageNotValid(image.value) || error.titleNotValid(title.value) || error.descriptionNotValid(description.value) || error.sectionNotValid(section.value) || error.thematicNotValid(thematic.value)) {
        error.showErrorImage();
        error.showErrorTitle();
        error.showErrorDescription();
        error.showErrorSection();
        error.showErrorThematic();
    } else {
        uploadImage();
    }
})

closeSession();