const formulario = document.querySelector(".formLogin");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();


    /* consumiendo la API y redirección a mis-tareas */
    loguinUserAndRedirect();

});

const apiBaseUrl = "http://localhost:3000";
let apiUsersLogin = "/login";

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

    fetch(apiBaseUrl + apiUsersLogin, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.token) {
                localStorage.setItem("jwt", result.token)
                alert("usuario válido")
                location.href = "/public/views/upload.html"
            } else {
                alert("No existís")
            }

        })
        .catch(error => console.log('error', error));
}

//export {loguinUserAndRedirectToMisTareas};