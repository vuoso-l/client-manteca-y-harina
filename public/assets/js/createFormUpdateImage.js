const container = document.querySelector(".containerUpload");

const createFormUpdateImage = (image) => {
    container.innerHTML = `
            <form>
                <div>
                    <label for="image">Cargar imagen</label>
                    <input type="file" name="image" id="image">
                    <ul id="imageUpdateError"></ul>
                </div>
                <div>
                    <label for="title">Título</label>
                    <input type="text" name="title" id="title" autofocus value="${image.title}">
                    <ul id="titleUpdateError"></ul>
                    </div>
                <div>
                    <label for="description">Descripción</label>
                    <textarea name="description" id="description" cols="40" rows="5" autofocus>${image.description}</textarea>
                    <ul id="descriptionUpdateError"></ul>
                    </div>
                <div>
                    <label for="section">Temática</label>
                    <select name="section" id="section">
                        <option value="" selected disabled>${image.section}</option>
                        <option value="home">Sección para home</option>
                        <option value="tortas-Varias">Sección para tortas varias</option>
                        <option value="navidad">Sección para navidad</option>
                        <option value="bodas-Comuniones">Sección para bodas-comuniones</option>
                        <option value="infantiles">Sección para infantiles</option>
                    </select>
                    <ul id="sectionUpdateError"></ul>
                </div>
                <div>
                    <label for="thematic">Temática</label>
                    <select name="thematic" id="thematic">
                        <option value="" selected disabled>${image.thematic}</option>
                        <option value="tortas-Varias">Tortas varias</option>
                        <option value="navidad">Navidad</option>
                        <option value="bodas-Comuniones">Bodas-comuniones</option>
                        <option value="infantiles">Infantiles</option>
                    </select>
                    <ul id="thematicUpdateError"></ul>
                </div>
                <div>
                    <button class="btnPut" type="submit">Actualizar imagen</button>
                    <a class="btnReturn" href="/public/views/upload.html">Cancelar y volver</a>
                </div>
            </form>
                `
}

export { createFormUpdateImage };