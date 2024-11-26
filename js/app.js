let total = 0; // Inicializamos el total en 0

/**
 * Función para agregar un producto al carrito
 */
function agregar() {
  // Obtenemos el valor del input de cantidad
  const cantidad = document.getElementById("cantidad").value;

  // Validamos que la cantidad sea mayor a 0 y menor o igual a 100
  if (cantidad > 0 && cantidad <= 100) {
    // Recuperamos el producto seleccionado
    const producto = document.getElementById("producto").value;
    const [nombreProducto, valorProducto] = producto.split(" - $");

    // Convertimos el valor del producto a número
    const precioUnitario = parseFloat(valorProducto);

    // Calculamos el precio total para la cantidad seleccionada
    const precioTotalProducto = cantidad * precioUnitario;

    // Sumamos el precio del producto al total general
    total += precioTotalProducto;

    // Actualizamos el total del carrito en el DOM, formateado con comas
    const campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `$${total.toLocaleString("es-MX")}`;

    // Creamos una nueva entrada en el carrito con el producto agregado
    const carrinho = document.getElementById("lista-productos");
    carrinho.innerHTML += `
      <section class="carrito__productos__producto">
        <span class="texto-azul">${cantidad}x</span> ${nombreProducto} 
        <span class="texto-azul">$${precioTotalProducto.toLocaleString(
          "es-MX"
        )}</span>
      </section>
    `;

    // Limpiamos el campo de cantidad
    document.getElementById("cantidad").value = "";
  } else {
    // Mostramos un mensaje de alerta si la cantidad no es válida
    alert("Por favor, ingresa una cantidad válida (1-100).");
    document.getElementById("cantidad").value = "";
  }
}

/**
 * Función para limpiar el carrito
 */
function limpiar() {
  // Reiniciamos el total a 0
  total = 0;

  // Limpiamos los productos del carrito y el total mostrado
  document.getElementById("lista-productos").innerHTML = "";
  document.getElementById("valor-total").textContent = "$0.00";
}
