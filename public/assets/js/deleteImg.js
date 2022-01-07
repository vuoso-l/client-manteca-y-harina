let tokenJWT = localStorage.getItem("tokenM&H");

const tbody = document.querySelector("tbody");

const deleteImg = (images) => {
  tbody.querySelectorAll(".btnDelete").forEach((element) => {
    element.addEventListener("click", (e) => {
      images.forEach((img) => {
        if (e.target.id == img.id) {
          Swal.fire({
            icon: "question",
            title: `¿Querés eliminar la imagen <-${img.title}-> ?`,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar imagen!",
            cancelButtonText: "Cancelar!",
          }).then((result) => {
            if (result.isConfirmed) {
              const apiBaseUrl = "https://api-manteca-y-harina.herokuapp.com";
              const urlDelete = "/delete/";
              const myHeaders = new Headers();
              myHeaders.append("authorization", `Bearer ${tokenJWT}`);

              let settings = {
                method: "DELETE",
                headers: myHeaders,
                redirect: "follow",
              };

              fetch(`${apiBaseUrl}${urlDelete}${img.id}`, settings)
                .then((response) => response.json())
                .then((result) => {
                  console.log(result);
                  if (result.message === "jwt expired") {
                    Swal.fire({
                      icon: "error",
                      title: "Sesión expirada!",
                      showConfirmButton: false,
                      timer: 3000,
                    });
                  } else {
                    Swal.fire({
                      icon: "success",
                      title: `${result}`,
                      showConfirmButton: false,
                      timer: 4000,
                    });
                    setTimeout(() => {
                      location.reload();
                    }, 5000);
                  }
                })
                .catch((error) => {
                  console.error("Error:", error);
                  Swal.fire({
                    icon: "error",
                    title: "Oops...algo salió mal",
                    text: `${error}`,
                  });
                });
            }
          });
        }
      });
    });
  });
};

export { deleteImg };
