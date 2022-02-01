const container = document.querySelector(".container");
const containerGallery = document.querySelector(".gallery-container");
const galleryInfo = document.querySelector(".gallery-info");
const btnOpen = document.querySelector(".is-open");

const createShowInfoOrders = () => {
  container.style.display = "none";
  containerGallery.style.display = "flex";

  btnOpen.addEventListener("click", () => {
    galleryInfo.style.display = "flex";
  });

  galleryInfo.innerHTML = `
    
        <div class="modal-container">
            <h2>Importante</h2>
            <button class="modal-close">X</button>
            <h3>Tortas</h3>
            <ul class="cake">
                <li>Cada una incluye 3 capas de relleno</li>
                <li>Bizcochuelo de vainilla o chocolate</li>
                <li>12 cm. a 24cm. de relleno</li>
                <li>Diseño y temática a elección</li>
                <li>Incluye velita</li>
                <li>El presupuesto no incluye packaging individual</li>
                <li>Decoraciones con adornos tiene costo adicional</li>
            </ul>            
            <h3>Letter o number cake</h3>
            <p>3 capas de sablée de vainilla, 2 rellenos y cobertura con deco final a elección. Medidas:</p>
            <ul class="cake">
                <li>15 x 20 cm.</li>
                <li>20 x 25 cm.</li>
            </ul>
            <h3>Alfajores</h3>
            <ul class="cookies">
                <li>Maicena - Chocolate - Nuez - Dulce de leche y chocolate</li>
            </ul>
            <h3>¿Qué más podés agregarle a tus festejos?</h3>
            <ul class="cookies">
                <li>Cookies - cakepops - Oreos bañadas - cupcakes - icepops</li>
                <li>Torta brownie - Lemon pie - Cheese cake - Tarta de frutas frescas</li>
            </ul>
        </div>
    `;

  document.querySelector(".modal-container").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.querySelector(".modal-close").addEventListener("click", () => {
    galleryInfo.style.display = "none";
  });
  
  galleryInfo.addEventListener("click", () => {
    galleryInfo.style.display = "none";
  });
};

export { createShowInfoOrders };
