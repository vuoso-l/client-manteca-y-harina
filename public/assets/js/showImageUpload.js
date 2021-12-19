const tbody = document.querySelector("tbody");

const showImageUpload = (images) => {
    tbody.innerHTML = "";
    images.forEach(element => {
        if (element) {
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
        } else {
            tbody.innerHTML = `
            <section>
                <p>Inconvenientes técnicos, no se puede acceder a las imágenes</p>
                <p>Disculpen las molestias!</p>
                <img class="imgError" src="/public/assets/imgMyH/logo.jpg" alt="Logo m&h"></img>
            </section>   
            `;
        }
    });
}

export { showImageUpload };