const containerGallery = document.querySelector(".container-gallery");
const swipper = document.querySelector(".swiper-wrapper");
const urlApi = "https://api-manteca-y-harina.herokuapp.com";

fetch(urlApi + "/images")
    .then((response) => response.json())
    .then((contenido) => {
        if (contenido) {
            contenido.image.filter((element) => {
                if (element.thematic == "INFANTILES") {
                    let img = document.querySelector("img");
                    img.setAttribute("src", element.imageURL)
                    img.setAttribute("alt", element.name)
                    swipper.appendChild(img)
                }
            });
        }
        else {
            containerGallery.innerHTML = `
            <section>
                <p>Inconvenientes técnicos, no se puede acceder a las imágenes</p>
                <p>Disculpen las molestias!</p>
                <img class="imgError" src="/public/assets/imgMyH/logo.jpg" alt="Logo m&h"></img>
            </section>   
            `;
        }
    })
    .catch(error => {
        console.error('Error:', error)
        containerGallery.innerHTML = `
                <section>
                    <p>Inconvenientes técnicos, surgió un error inesperado</p>
                    <p>Disculpen las molestias!</p>
                    <img class="imgError" src="/public/assets/imgMyH/logo.jpg" alt="Logo m&h"></img>
                </section>   
                `;
    })