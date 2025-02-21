document.addEventListener("DOMContentLoaded", function () {
    // Función para actualizar el subtotal de una fila
    function updateRow(row) {
      const qtyInput = row.cells[2].querySelector("input");
      const priceInput = row.cells[3].querySelector("input");
      const subtotalCell = row.cells[4];
      const quantity = parseInt(qtyInput.value) || 0;
      const price = parseFloat(priceInput.value) || 0;
      const subtotal = quantity * price;
      subtotalCell.textContent = subtotal.toFixed(2) + " €";
    }
  
    // Función para actualizar el total general en el pie de tabla
    function updateTotal() {
      let total = 0;
      const rows = document.querySelectorAll("tbody tr");
      rows.forEach(row => {
        const qtyInput = row.cells[2].querySelector("input");
        const priceInput = row.cells[3].querySelector("input");
        const quantity = parseInt(qtyInput.value) || 0;
        const price = parseFloat(priceInput.value) || 0;
        total += quantity * price;
      });
      const totalCell = document.querySelector("tfoot tr th");
      totalCell.textContent = "Total = " + total.toFixed(2) + "€";
    }
  
    // Agregar eventos a cada fila para los botones y cambios en inputs
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
      const qtyInput = row.cells[2].querySelector("input");
      const buttons = row.cells[2].querySelectorAll("button");
      const plusButton = buttons[0];
      const minusButton = buttons[1];
  
      plusButton.addEventListener("click", function () {
        qtyInput.value = parseInt(qtyInput.value) + 1;
        updateRow(row);
        updateTotal();
      });
  
      minusButton.addEventListener("click", function () {
        let value = parseInt(qtyInput.value);
        if (value > 0) {
          qtyInput.value = value - 1;
        }
        updateRow(row);
        updateTotal();
      });
  
      // Actualiza si el usuario cambia manualmente la cantidad
      qtyInput.addEventListener("change", function () {
        updateRow(row);
        updateTotal();
      });
  
      // Actualiza si se cambia manualmente el precio
      const priceInput = row.cells[3].querySelector("input");
      priceInput.addEventListener("change", function () {
        updateRow(row);
        updateTotal();
      });
    });
  });
  