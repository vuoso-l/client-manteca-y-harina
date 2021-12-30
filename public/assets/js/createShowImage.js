const container = document.querySelector(".container");
const containerGallery = document.querySelector(".gallery-container");
const galleryTitle = document.querySelector(".gallery-title");
const h2 = document.querySelector(".gallery-container h2");
const gallery = document.querySelector(".gallery");
const dotContainer = document.querySelector(".dotContainer");

const createShowImage = (images) => {
    container.style.display = "none";
    containerGallery.style.display = "flex";

    galleryTitle.innerHTML = `
    <h2>${images.thematic}</h2>
    <a href="./index.html">Volver</a>
    `

    gallery.innerHTML += `    
    <div class="mySlides fades">
        <img src="${images.imageURL}" alt="${images.name}">
        <div class ="text">${images.title}</div>
    </div>
    `

    dotContainer.innerHTML += `
    <span class="dot"></span>
    `
}

export { createShowImage };