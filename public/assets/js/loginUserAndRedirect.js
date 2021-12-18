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
            console.log(result);
            if (result.token) {
                localStorage.setItem("token", result.token)
                alert("usuario válido")
                location.href = "/public/views/upload.html"
            } else {
                alert("No tienes una cuenta registrada")
            }

        })
        .catch(error => console.log('error', error));
}

export {loguinUserAndRedirect};