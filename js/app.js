// Referencias al DOM
const cantidadInput = document.getElementById("cantidad");
const productoSelect = document.getElementById("producto");
const listaProductos = document.getElementById("lista-productos");
const valorTotal = document.getElementById("valor-total");
const btnAgregar = document.getElementById("btn-agregar");
const btnLimpiar = document.getElementById("btn-limpiar");

// Total acumulado
let total = 0;

/**
 * Agrega un producto al carrito después de validar la cantidad.
 * @function agregar
 */
function agregar() {
  const cantidad = parseInt(cantidadInput.value, 10);

  // Validación de cantidad
  if (Number.isInteger(cantidad) && cantidad > 0 && cantidad <= 100) {
    const producto = productoSelect.value;
    const [nombreProducto, valorProducto] = producto.split(" - $");

    const precioUnitario = parseFloat(valorProducto);
    const precioTotalProducto = cantidad * precioUnitario;

    total += precioTotalProducto;

    // Actualizar el DOM con nuevo total
    valorTotal.textContent = `$${total.toLocaleString("es-MX")}`;

    // Crear y añadir el producto al carrito
    const productoHTML = `
      <section class="carrito__productos__producto">
        <span class="texto-azul">${cantidad}x</span> ${nombreProducto}
        <span class="texto-azul">$${precioTotalProducto.toLocaleString(
          "es-MX"
        )}</span>
      </section>
    `;
    listaProductos.innerHTML += productoHTML;

    // Limpiar el campo de cantidad
    cantidadInput.value = "";
  } else {
    alert("Por favor, ingresa una cantidad válida (1-100).");
    cantidadInput.value = "";
  }
}

/**
 * Limpia todos los productos del carrito y reinicia el total.
 * @function limpiar
 */
function limpiar() {
  total = 0;
  listaProductos.innerHTML = "";
  valorTotal.textContent = "$0.00";
}

/**
 * Inicializa los eventos del DOM una vez cargado.
 * @function init
 */
function init() {
  btnAgregar.addEventListener("click", agregar);
  btnLimpiar.addEventListener("click", limpiar);
}

// Esperar a que el DOM esté listo antes de asociar eventos
document.addEventListener("DOMContentLoaded", init);
