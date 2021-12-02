const container = document.querySelector(".containerUpload");

const createForm = (image) => {
    container.innerHTML = `
            <form method="PUT" enctype="multipart/form-data">
                <div>
                    <label for="image">Cargar imagen</label>
                    <input type="file" name="image" id="image">
                </div>
                <div>
                    <label for="title">Título</label>
                    <input type="text" name="title" id="title" autofocus value="${image.title}">
                </div>
                <div>
                    <label for="description">Descripción</label>
                    <textarea name="description" id="description" cols="40" rows="5" autofocus>${image.description}</textarea>
                </div>
                <div>
                    <label for="section">Temática</label>
                    <select name="section" id="section">
                        <option value="" selected disabled>${image.section}</option>
                        <option value="home">Sección para home</option>
                        <option value="bautismo">Sección para bautismo</option>
                        <option value="navidad">Sección para navidad</option>
                        <option value="cobraKai">Sección para Cobra Kai</option>
                        <option value="equipos">Sección para equipos</option>
                        <option value="pascuas">Sección para pascuas</option>
                        <option value="potter">Sección para Harry Potter</option>
                    </select>
                </div>
                <div>
                    <label for="thematic">Temática</label>
                    <select name="thematic" id="thematic">
                        <option value="" selected disabled>${image.thematic}</option>
                        <option value="Bautismo">Bautismo</option>
                        <option value="Navidad">Navidad</option>
                        <option value="CobraKai">Cobra Kai</option>
                        <option value="Equipos">Equipos</option>
                        <option value="Pascuas">Pascuas</option>
                        <option value="HarryPotter">Harry Potter</option>
                    </select>
                </div>
                <div>
                    <button class="btnPut" type="submit">Actualizar imagen</button>
                    <button class="btnReturn" type="submit">Volver</button>
                </div>
            </form>
                `
}

export { createForm };