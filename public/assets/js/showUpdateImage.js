import { createFormUpdateImage } from "./createFormUpdateImage.js";
import { updateImage } from "./updateImage.js";
import { notValid, showError } from "./showUpdateError.js";

const container = document.querySelector(".containerUpload");
const tbody = document.querySelector("tbody");

const showUpdateImage = (image) => {
    tbody.querySelectorAll(".btnUpdate").forEach(btn => {
        btn.addEventListener("click", (e) => {
            image.forEach(imaUpd => {
                if (e.target.id == imaUpd.id) {

                    createFormUpdateImage(imaUpd);

                    const form = container.querySelector("form");
                    const imageInput = document.querySelector("#imageUpdate");
                    const title = document.querySelector("#title");
                    const description = document.querySelector("#description");
                    const section = document.querySelector("#section");
                    const thematic = document.querySelector("#thematic");
                    const ulImage = document.querySelector("#imageUpdateError");
                    const ulTitle = document.querySelector("#titleUpdateError");
                    const ulDescription = document.querySelector("#descriptionUpdateError");
                    const ulSection = document.querySelector("#sectionUpdateError");
                    const ulThematic = document.querySelector("#thematicUpdateError");
                    const errorImage = [];
                    const errorTitle = [];
                    const errorDescription = [];
                    const errorSection = [];
                    const errorThematic = [];

                    form.addEventListener("submit", (e) => {
                        e.preventDefault();
                        if (notValid(imageInput.value, errorImage) || notValid(title.value, errorTitle) || notValid(description.value, errorDescription) || notValid(section.value, errorSection) || notValid(thematic.value, errorThematic)) {
                            showError(errorImage, ulImage);
                            showError(errorTitle, ulTitle);
                            showError(errorDescription, ulDescription);
                            showError(errorSection, ulSection);
                            showError(errorThematic, ulThematic);
                        } else {
                            updateImage(form, imaUpd);
                        }
                    })
                }
            })
        })
    })
}

export { showUpdateImage };