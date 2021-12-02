import { createForm } from "./formUpdateImage.js";
import { updateImage } from "./updateImage.js";

const container = document.querySelector(".containerUpload");
const tbody = document.querySelector("tbody");

const createFormAndUpdateImage = (image) => {
    tbody.querySelectorAll(".btnUpdate").forEach(btn => {
        btn.addEventListener("click", (e) => {
            image.forEach(imaUpd => {
                if (e.target.id == imaUpd.id) {

                    createForm(imaUpd);

                    const form = container.querySelector("form");
                    form.addEventListener("submit", (e) => {
                        e.preventDefault();
                        updateImage(form, imaUpd);
                    })
                }
            })
        })
    })
}

export { createFormAndUpdateImage };