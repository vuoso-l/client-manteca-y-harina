import { showImageUpload } from "./showImageUpload.js";

const tbody = document.querySelector("tbody");

const deleteImg = (images) => {

    tbody.querySelectorAll(".btnDelete").forEach((element) => {
        element.addEventListener("click", (e) => {
            images.forEach(img => {
                if (e.target.id == img.id) {
                    console.log(e.target.id);
                    console.log(img.id);
                    const apiBaseUrl = "https://api-manteca-y-harina.herokuapp.com";
                    const urlDelete = "/delete/";

                    let settings = {
                        method: "DELETE",
                    }
                    fetch(`${apiBaseUrl}${urlDelete}${img.id}`, settings)
                        .then((response) => response.json())
                        .catch(error => console.error('Error:', error))
                        .then((contenido) => {
                            console.log(contenido);
                            //showImageUpload(images);
                            location.reload();
                        })
                }
            })
        })
    })
}

export { deleteImg };