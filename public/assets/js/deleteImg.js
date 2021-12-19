import { showImageUpload } from "./showImageUpload.js";

const tbody = document.querySelector("tbody");

const deleteImg = (images) => {

    tbody.querySelectorAll(".btnDelete").forEach((element) => {
        element.addEventListener("click", (e) => {
            images.forEach(img => {
                if (e.target.id == img.id) {
                    console.log(e.target.id);
                    console.log(img.id);
                    Swal.fire({
                        icon: 'question',
                        title: `¿Querés eliminar la imagen <-${img.title}-> ?`,
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Eliminar imagen!',
                        cancelButtonText: 'Cancelar!'
                    })
                        .then((result) => {
                            if (result.isConfirmed) {
                                const apiBaseUrl = "https://api-manteca-y-harina.herokuapp.com";
                                const urlDelete = "/delete/";
                                let settings = {
                                    method: "DELETE",
                                }
                                fetch(`${apiBaseUrl}${urlDelete}${img.id}`, settings)
                                    .then((response) => response.json())
                                    .catch(error => {
                                        console.error('Error:', error)
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...algo salió mal',
                                            text: `${error}`,
                                        })
                                    })
                                    .then((contenido) => {
                                        console.log(contenido);
                                        //showImageUpload(images);
                                        location.reload();
                                    })
                            }
                        })
                }
            })
        })
    })
}

export { deleteImg };