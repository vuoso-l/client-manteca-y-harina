const container = document.querySelector(".container");
const urlApi = "https://api-manteca-y-harina.herokuapp.com";

fetch(urlApi + "/images")
    .then((response) => response.json())
    .then((contenido) => {
        let image = contenido.image;
        image.filter((element) => {
            if (element.section == "HOME") {
                container.innerHTML += `
                <section>                
                <h2>${element.thematic}</h2>
                <a href="public/views/gallery${element.thematic.trim().replace(/ /g, "")}.html">
                <img id="small_img" src="${element.imageURL}"
                alt="${element.name}">
                </a>
                <p>${element.description}</p> 
                </section>   
                `;
            }
        })
    })
    .catch(error => {
        console.error('Error:', error)
        container.innerHTML += `
                <section>
                    <p>Inconvenientes técnicos, no hay imágenes cargadas</p>
                    <p>Disculpen las molestias!</p>
                    <img class="imgError" src="./public/assets/imgMyH/logo.jpg" alt="Logo m&h"></img>
                </section>   
                `;
    })