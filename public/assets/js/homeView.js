import { selectImgGallery } from "./selectImgGallery.js";

const containerSkeleton = document.querySelector(".skeleton-container");
const container = document.querySelector(".images-container");
const apiBaseUrl = "https://api-manteca-y-harina.herokuapp.com";
const urlGetImages = "/images";

fetch(`${apiBaseUrl}${urlGetImages}`)
  .then((response) => response.json())
  .then((contenido) => {
    containerSkeleton.style.display = "none";
    let image = contenido.image;
    if (contenido) {
      image.filter((element) => {
        if (element.section == "HOME") {
          container.innerHTML += `
            <section>                
                <h3>${element.thematic.replace("-", " ")}</h3>
                <img class="small_img" title="${element.thematic}" src="${element.imageURL}" alt="${element.name}">
            </section>   
            `;
        }
      });
    } else {
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
  .catch((error) => {
    console.error("Error:", error);
    containerSkeleton.style.display = "none";
    container.innerHTML = `
            <section>
                <p>Inconvenientes técnicos, surgió un error inesperado</p>
                <p>Disculpen las molestias!</p>
                <img class="imgError" src="/public/assets/imgMyH/logo.jpg" alt="Logo m&h"></img>
            </section>   
            `;
  });
