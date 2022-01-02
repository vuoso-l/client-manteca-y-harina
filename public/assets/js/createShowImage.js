const container = document.querySelector(".container");
const containerGallery = document.querySelector(".gallery-container");
const galleryTitle = document.querySelector(".gallery-title");
const galleryImage = document.querySelector(".gallery-image");
const dotContainer = document.querySelector(".dotContainer");

const createShowImage = (images) => {
    container.style.display = "none";
    containerGallery.style.display = "flex";

    galleryTitle.innerHTML = `
    <h2>${images.thematic}</h2>
    <a href="./index.html">Volver</a>
    `

    galleryImage.innerHTML += `    
    <div class="mySlides fades">
        <img src="${images.imageURL}" alt="${images.name}">
    </div>
    `

    dotContainer.innerHTML += `
    <span class="dot"></span>
    `
}

export { createShowImage };