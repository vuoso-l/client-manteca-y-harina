const notValid = (value, errorType) => {
    if (value === "") {
        return errorType.push(`El campo es obligatorio y no puede estar vacío`);
    }
}

const li = document.createElement("li");

const showError = (errorType, ul) => {
    if (errorType.length > 0) {
        errorType.forEach(error => {
            createLiInput(error);
            ul.appendChild(li);
            errorType.splice(0);
        })
    }
}

const createLiInput = (error) => {
    li.innerHTML = "";
    li.classList.add("showErrors");
    li.appendChild(document.createTextNode(error));
}
export { notValid, showError };