const container = document.querySelector(".container");
const containerGallery = document.querySelector(".gallery-container");
const galleryInfo = document.querySelector(".gallery-info");
const btnOpen = document.querySelector(".is-open");

const createShowInfoOrders = () => {
  container.style.display = "none";
  containerGallery.style.display = "flex";

  btnOpen.addEventListener("click", () => {
      galleryInfo.style.display = "flex";
  })

  galleryInfo.innerHTML = `
    
        <div class="modal-container">
            <h3>Importante</h3>
            <button class="modal-close">X</button>
            <ul>
                <li>Cada torta incluye 3 capas de relleno con altura aprox. de 11 a 12 cm.</li>
                <li>Bizcochuelo de vainilla o chocolate</li>
                <li>El diseño y la temática es a elección</li>
                <li>Incluye velita</li>
                <li>El presupuesto no incluye packaging individual</li>
                <li>Decoraciones con adornos tiene costo adicional</li>
            </ul>
            <h3>Tortas</h3>
            <ul>
                <li>12 cm. de relleno</li>
                <li>15 cm. de relleno</li>
                <li>18 cm. de relleno</li>
                <li>20 cm. de relleno</li>
                <li>22 cm. de relleno</li>
                <li>24 cm. de relleno</li>
            </ul>
            <h3>Letter o number cake</h3>
            <p>3 capas de sablée de vainilla, 2 rellenos y cobertura con deco final a elección</p>
            <ul>
                <li>15 x 20 cm.</li>
                <li>20 x 25 cm.</li>
            </ul>
            <h3>Alfajores</h3>
            <ul>
                <li>Maicena</li>
                <li>Chocolate</li>
                <li>Nuez</li>
                <li>Dulce de leche y chocolate</li>
            </ul>
            <h3>¿Qué más podés agregarle a tus festejos?</h3>
            <p>Cookies - cakepops - Oreos bañadas - cupcakes - icepops</p>
            <p>Torta brownie - Lemon pie - Cheese cake - Tarta de frutas frescas</p>
        </div>
    `;

    const btnClose = document.querySelector(".modal-close");
    btnClose.addEventListener("click", () => {
        galleryInfo.style.display = "none";
    })
};

export { createShowInfoOrders };
