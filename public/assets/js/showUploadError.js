const ulImage = document.querySelector("#imageError");
const ulTitle = document.querySelector("#titleError");
const ulDescription = document.querySelector("#descriptionError");
const ulSection = document.querySelector("#sectionError");
const ulThematic = document.querySelector("#thematicError");
const li = document.createElement("li");
const errorImage = [];
const errorTitle = [];
const errorDescription = [];
const errorSection = [];
const errorThematic = [];

/* Validaciones */
const imageNotValid = (image) => {
    if (image === "") {
        return errorImage.push(`El campo es obligatorio y no puede estar vacío`);
    }
}

const titleNotValid = (title) => {
    if (title === "") {
        return errorTitle.push(`El campo es obligatorio y no puede estar vacío`);
    }
}

const descriptionNotValid = (description) => {
    if (description === "") {
        return errorDescription.push(`El campo es obligatorio y no puede estar vacío`);
    }
}

const sectionNotValid = (section) => {
    if (section === "") {
        return errorSection.push(`El campo es obligatorio y no puede estar vacío`);
    }
}

const thematicNotValid = (thematic) => {
    if (thematic === "") {
        return errorThematic.push(`El campo es obligatorio y no puede estar vacío`);
    }
}


/* Funciones para mostrar errores debajo de los inputs ul */
const showErrorImage = () => {
    if (errorImage.length > 0) {
        errorImage.forEach(error => {
            createLiInput(error);
            ulImage.appendChild(li);
            errorImage.splice(0);
        })
    }
}

const showErrorTitle = () => {
    if (errorTitle.length > 0) {
        errorTitle.forEach(error => {
            createLiInput(error);
            ulTitle.appendChild(li);
            errorTitle.splice(0);
        })
    }
}

const showErrorDescription = () => {
    if (errorDescription.length > 0) {
        errorDescription.forEach(error => {
            createLiInput(error);
            ulDescription.appendChild(li);
            errorDescription.splice(0);
        })
    }
}

const showErrorSection = () => {
    if (errorSection.length > 0) {
        errorSection.forEach(error => {
            createLiInput(error);
            ulSection.appendChild(li);
            errorSection.splice(0);
        })
    }
}

const showErrorThematic = () => {
    if (errorThematic.length > 0) {
        errorThematic.forEach(error => {
            createLiInput(error);
            ulThematic.appendChild(li);
            errorThematic.splice(0);
        })
    }
}

const createLiInput = (error) => {
    li.innerHTML = "";
    li.classList.add("showErrors");
    li.appendChild(document.createTextNode(error));
}

export { imageNotValid, titleNotValid, descriptionNotValid, sectionNotValid, thematicNotValid, showErrorImage, showErrorTitle, showErrorDescription, showErrorSection, showErrorThematic };