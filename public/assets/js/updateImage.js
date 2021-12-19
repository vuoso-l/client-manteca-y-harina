let tokenJWT = localStorage.getItem("token");

const apiBaseUrl = "https://api-manteca-y-harina.herokuapp.com";
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
        .then((response) => response.text())
        .then((result) => {
            console.log(result);
            /* Swal.fire({
                icon: 'success',
                title: `${result}`,
            }) */
            /* setTimeout(() => {
                location.href = "/public/views/upload.html"
            }, 4000); */
        })
        .catch(error => {
            console.error('error', error)
            /* Swal.fire({
                icon: 'error',
                title: 'Oops...algo salió mal',
                text: `${error}`,
            }) */
        })
}

export { updateImage };