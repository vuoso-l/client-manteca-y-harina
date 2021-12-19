let tokenJWT = localStorage.getItem("token");

const apiBaseUrl = "https://api-manteca-y-harina.herokuapp.com";
let apiUpate = "/update/";

const updateImage = (form, image) => {
    console.log(form);
    console.log(image);
    const myHeaders = new Headers();
    myHeaders.append("authorization", `Bearer ${tokenJWT}`);

    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: new FormData(form),
        redirect: 'follow'
    };

    fetch(`${apiBaseUrl}${apiUpate}${image.id}`, requestOptions)
        .then((response) => {
            response.json();
        })
        .then((contenido) => {
            console.log(contenido);
            setTimeout(() => {
                location.href = "/public/views/upload.html"
            }, 4000);
        })
        .catch(error => {
            console.error('Error:', error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...algo salió mal',
                text: `${error}`,
            })
        })
}

export { updateImage };