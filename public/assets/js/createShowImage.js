const containerGallery = document.querySelector(".gallery-container");
const gallery = document.querySelector(".gallery");
const container = document.querySelector(".container");

const createShowImage = (images) => {
    container.style.display = "none";
    containerGallery.style.display = "flex";

    gallery.innerHTML += `    
    <div class="mySlides fades">
        <img src="${images.imageURL}" alt="${images.name}">
        <div class ="text">${images.title}</div>
    </div>
    `
}

export { createShowImage };