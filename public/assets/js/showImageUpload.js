const tbody = document.querySelector("tbody");

const showImageUpload = (images) => {
    tbody.innerHTML = "";
    images.forEach(element => {
        tbody.innerHTML += `
        <tr>
            <td>"${element.title}"</td>
            <td>"${element.description}"</td>
            <td>"${element.thematic}"</td>
            <td class="tdBtn">
                <a href="${element.imageURL}" target="_blank" class="btnView">Ver</a>
                <button id="${element.id}" class="btnUpdate">Modificar</button>
                <button id="${element.id}" class="btnDelete">Borrar</button>
            </td>
        </tr>
        `
    });
}

export { showImageUpload };