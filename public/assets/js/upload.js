const containerUpload = document.querySelector(".containerUpload");
const form = document.querySelector("form");
import { closeSession } from "./closeSession.js";
import { uploadImage } from "./uploadImage.js";
let tokenJWT = localStorage.getItem("token");

onload = () => {
    if (!tokenJWT) {
        containerUpload.innerHTML = `
            <section>
                <p>No tienes acceso a esta sección!</p>
                <img class="imgError" src="/public/assets/imgMyH/logo.jpg" alt="Logo m&h"></img>
            </section>   
            `;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    uploadImage();
})

closeSession();