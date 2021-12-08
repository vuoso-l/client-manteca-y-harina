const containerGallery = document.querySelector(".containerGallery");
const swipper = document.querySelector(".swiper-wrapper");
const container = document.querySelector(".container");

const createShowImage = (images) => {
    container.style.display = "none";
    containerGallery.style.display = "block";
    let h2 = document.querySelector(".containerGallery h2");
    let img = document.querySelector(".containerGallery img");
    h2.innerHTML = images.thematic;
    img.setAttribute("src", images.imageURL);
    img.setAttribute("alt", images.name);
    swipper.appendChild(img);
}

export { createShowImage };