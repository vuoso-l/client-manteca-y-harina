import { selectImgGallery } from "./selectImgGallery.js";

const containerGallery = document.querySelector(".gallery-container");
const container = document.querySelector(".container");
const urlApi = "https://api-manteca-y-harina.herokuapp.com";

fetch(urlApi + "/images")
    .then((response) => response.json())
    .then((contenido) => {
        let image = contenido.image;
        if (contenido) {
            image.filter((element) => {
                if (element.section == "HOME") {
                    container.innerHTML += `
                <section>                
                    <h2>${element.thematic}</h2>
                    <img class="small_img" title="${element.thematic}" src="${element.imageURL}"
                        alt="${element.name}">
                    <p>${element.description}</p> 
                </section>   
                `;
                }
            })
        }
        else {
            container.innerHTML = `
            <section>
                <p>Inconvenientes técnicos, no se puede acceder a las imágenes</p>
                <p>Disculpen las molestias!</p>
                <img class="imgError" src="/public/assets/imgMyH/logo.jpg" alt="Logo m&h"></img>
            </section>   
            `;
        }
        selectImgGallery(image);        
    })
    .catch(error => {
        console.error('Error:', error)
        container.innerHTML = `
            <section>
                <p>Inconvenientes técnicos, surgió un error inesperado</p>
                <p>Disculpen las molestias!</p>
                <img class="imgError" src="/public/assets/imgMyH/logo.jpg" alt="Logo m&h"></img>
            </section>   
            `;
    })