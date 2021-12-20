let tokenJWT = localStorage.getItem("token");

const apiBaseUrl = "http://localhost:3000";
const apiUpdate = "/update";

const updateImage = (form, image) => {
    const myHeaders = new Headers();
    myHeaders.append("authorization", `Bearer ${tokenJWT}`);

    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: new FormData(form),
        redirect: 'follow'
    };

    fetch(`${apiBaseUrl}${apiUpdate}/${image.id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            Swal.fire({
                icon: 'success',
                title: `${result}`,
                showConfirmButton: false,
                timer: 3000,
            })
            setTimeout(() => {
                location.href = "/public/views/upload.html"
            }, 4000);
        })
        .catch(error => {
            console.error('error', error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...algo salió mal',
                text: `${error}`,
            })
        })
}

export { updateImage };