import { createShowImage } from "./createShowImage.js";
const container = document.querySelector(".container");

const selectImgGallery = (image) => {
    container.querySelectorAll(".small_img").forEach(element => {
        element.addEventListener("click", (e) => {
            image.map(img => {
                switch (e.target.title) {
                    case "ALFAJORES":
                        if (img.thematic == "ALFAJORES") {
                            createShowImage(img);
                        }
                        break;
                    case "COMUNIONES":
                        if (img.thematic == "COMUNIONES") {
                            createShowImage(img);
                        }
                        break;
                    case "INFANTILES":
                        if (img.thematic == "INFANTILES") {
                            createShowImage(img);
                        }
                        break;
                    case "NAVIDAD":
                        if (img.thematic == "NAVIDAD") {
                            createShowImage(img);
                        }
                        break;
                    case "PORCELANAFRIA":
                        if (img.thematic == "PORCELANAFRIA") {
                            createShowImage(img);
                        }
                        break;
                    case "POSTRES":
                        if (img.thematic == "POSTRES") {
                            createShowImage(img);
                        }
                        break;
                    case "TARTASDULCES":
                        if (img.thematic == "TARTASDULCES") {
                            createShowImage(img);
                        }
                        break;
                    case "TORTASBODAS":
                        if (img.thematic == "TORTASBODAS") {
                            createShowImage(img);
                        }
                        break;
                    case "TORTASMUSICALES":
                        if (img.thematic == "TORTASMUSICALES") {
                            createShowImage(img);
                        }
                        break;
                    case "TORTASVARIAS":
                        if (img.thematic == "TORTASVARIAS") {
                            createShowImage(img);
                        }
                        break;
                    default:
                        containerGallery.innerHTML = `
                            <section>
                                <p>Inconvenientes técnicos, no se puede acceder a las imágenes</p>
                                <p>Disculpen las molestias!</p>
                                <img class="imgError" src="/public/assets/imgMyH/logo.jpg" alt="Logo m&h"></img>
                            </section>   
                        `;
                        break;
                }
            })
        })
    })
}

export { selectImgGallery };