const container = document.querySelector(".container");
const containerGallery = document.querySelector(".gallery-container");
const h2 = document.querySelector(".gallery-container h2");
const gallery = document.querySelector(".gallery");
const dotContainer = document.querySelector(".dotContainer");

const createShowImage = (images) => {
    container.style.display = "none";
    containerGallery.style.display = "flex";

    h2.innerHTML = `
    <h2>${images.thematic}</h2>
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