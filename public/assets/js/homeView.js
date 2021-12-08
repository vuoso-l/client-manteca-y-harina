const containerGallery = document.querySelector(".containerGallery");
const swipper = document.querySelector(".swiper-wrapper");
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


const createShowImage = (images) => {
    container.style.display = "none";
    let h2 = document.querySelector(".containerGallery h2");
    let img = document.querySelector(".containerGallery img");
    h2.innerHTML = images.thematic;
    img.setAttribute("src", images.imageURL);
    img.setAttribute("alt", images.name);
    swipper.appendChild(img);
}