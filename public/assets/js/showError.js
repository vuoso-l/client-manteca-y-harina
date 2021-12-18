const ulEmail = document.querySelector("#emailError");
const ulPass = document.querySelector("#passError");
let li = document.createElement("li");
let errorEmail = [];
let errorPass = [];

/* Validaciones */
const emailNotValid = (email) => {
    if (email === "" || (email && !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email))) {
        return errorEmail.push(`El campo es obligatorio y debe tener formato de email. Por ejemplo: ejemplo@ejemplo.com`);

    }
}
const passNotValid = (password) => {
    if (password === "" || password.length < 8) {
        return errorPass.push(`El campo es obligatorio y debe tener al menos 8 caracteres`);

    }
}

/* Funciones para mostrar errores debajo de los inputs ul */
const showErrorEmail = () => {
    if (errorEmail.length > 0) {
        errorEmail.forEach(error => {
            li.innerHTML = "";
            li.classList.add("showErrors");
            li.appendChild(document.createTextNode(error));
            ulEmail.appendChild(li);
            errorEmail.splice(0);
        })
    }
}
const showErrorPass = () => {
    if (errorPass.length > 0) {
        errorPass.forEach(error => {
            li.innerHTML = "";
            li.classList.add("showErrors");
            li.appendChild(document.createTextNode(error));
            ulPass.appendChild(li);
            errorPass.splice(0);
        })
    }
}


export { showErrorEmail, showErrorPass, emailNotValid, passNotValid };