import { createShowImage } from "./createShowImage.js";
import { createShowInfoOrders } from "./createShowInfoOrders.js";
const container = document.querySelector(".container");

const selectImgGallery = (image) => {
    container.querySelectorAll(".small_img").forEach(element => {
        element.addEventListener("click", (e) => {
            image.map(img => {
                switch (e.target.title) {
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
                    case "BODAS-COMUNIONES":
                        if (img.thematic == "BODAS-COMUNIONES") {
                            createShowImage(img);
                            createShowInfoOrders();
                        }
                        break;
                    case "TORTAS-VARIAS":
                        if (img.thematic == "TORTAS-VARIAS") {
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