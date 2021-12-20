const form = document.querySelector("form");
let tokenJWT = localStorage.getItem("token");

const apiBaseUrl = "https://api-manteca-y-harina.herokuapp.com";
const apiUpload = "/upload";

const uploadImage = () => {
    const myHeaders = new Headers();
    myHeaders.append("authorization", `Bearer ${tokenJWT}`);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: new FormData(form),
        redirect: 'follow'
    };
    
    fetch(`${apiBaseUrl}${apiUpload}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            Swal.fire({
                icon: 'success',
                title: `${result}`,
                showConfirmButton: false,
                timer: 3000,
            })
            setTimeout(() => {                
                location.reload();
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

export { uploadImage };