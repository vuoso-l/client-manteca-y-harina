const apiBaseUrl = "https://api-manteca-y-harina.herokuapp.com";
const apiUsersLogin = "/login";

const loguinUserAndRedirect = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", email.value);
    urlencoded.append("password", password.value);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch(`${apiBaseUrl}${apiUsersLogin}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.token) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login correcto!',
                    showConfirmButton: false,
                    timer: 1500
                })
                localStorage.setItem("token", result.token);
                setTimeout(() => {
                    location.href = "/public/views/upload.html";                    
                }, 4000);
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Email y/o contraseña incorrecta!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }

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

export { loguinUserAndRedirect };