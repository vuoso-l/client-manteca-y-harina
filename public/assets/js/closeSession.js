const closeSes = document.querySelector("#closeSession");

const closeSession = () => {
    closeSes.addEventListener("click", () => {
        Swal.fire({
            title: 'Estás segura que querés cerrar sesión?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cerrar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("token");
                location.href = "../../../index.html";
            }
        })
    })
}

export { closeSession };