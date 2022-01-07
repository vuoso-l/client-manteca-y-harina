import { createShowImage } from "./createShowImage.js";
import { createShowInfoOrders } from "./createShowInfoOrders.js";
const container = document.querySelector(".container");

const selectImgGallery = (image) => {
    container.querySelectorAll(".small_img").forEach(element => {
        element.addEventListener("click", (e) => {
            image.map(img => {
                switch (e.target.title) {
                    case "ALFAJORES":
                        if (img.thematic == "ALFAJORES") {
                            createShowImage(img);
                            createShowInfoOrders();
                        }
                        break;
                    case "COMUNIONES":
                        if (img.thematic == "COMUNIONES") {
                            createShowImage(img);
                            createShowInfoOrders();
                        }
                        break;
                    case "INFANTILES":
                        if (img.thematic == "INFANTILES") {
                            createShowImage(img);
                            createShowInfoOrders();
                        }
                        break;
                    case "NAVIDAD":
                        if (img.thematic == "NAVIDAD") {
                            createShowImage(img);
                            createShowInfoOrders();
                        }
                        break;
                    case "PORCELANAFRIA":
                        if (img.thematic == "PORCELANAFRIA") {
                            createShowImage(img);
                            createShowInfoOrders();
                        }
                        break;
                    case "POSTRES":
                        if (img.thematic == "POSTRES") {
                            createShowImage(img);
                            createShowInfoOrders();
                        }
                        break;
                    case "TARTASDULCES":
                        if (img.thematic == "TARTASDULCES") {
                            createShowImage(img);
                            createShowInfoOrders();
                        }
                        break;
                    case "TORTASBODAS":
                        if (img.thematic == "TORTASBODAS") {
                            createShowImage(img);
                            createShowInfoOrders();
                        }
                        break;
                    case "TORTASMUSICALES":
                        if (img.thematic == "TORTASMUSICALES") {
                            createShowImage(img);
                            createShowInfoOrders();
                        }
                        break;
                    case "TORTASVARIAS":
                        if (img.thematic == "TORTASVARIAS") {
                            createShowImage(img);
                            createShowInfoOrders();
                        }
                        break;
                    default:
                        container.innerHTML = `
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