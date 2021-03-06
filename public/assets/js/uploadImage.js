const form = document.querySelector("form");
let tokenJWT = localStorage.getItem("tokenM&H");

const apiBaseUrl = "https://api-manteca-y-harina.herokuapp.com";
const apiUpload = "/upload";

const uploadImage = () => {
  const myHeaders = new Headers();
  myHeaders.append("authorization", `Bearer ${tokenJWT}`);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: new FormData(form),
    redirect: "follow",
  };

  fetch(`${apiBaseUrl}${apiUpload}`, requestOptions)
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
};

export { uploadImage };
