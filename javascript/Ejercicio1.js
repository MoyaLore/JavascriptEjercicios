document.addEventListener("DOMContentLoaded", () => {
    // Inicializamos el contador con un valor de 0
    let contador = 0;
    const max = 10;
    const min = 0;

    // Función para actualizar el contador en la pantalla
    function actualizar() {
        document.getElementById("contador").textContent = contador;
    }

    // Función para aumentar el contador
    function aumentar() {
        if (contador < max) {
            contador++;
            actualizar();
        } else {
            alert("El contador no puede ser mayor que " + max);
        }
    }

    // Función para disminuir el contador
    function disminuir() {
        if (contador > min) {
            contador--;
            actualizar();
        } else {
            alert("El contador no puede ser menor que " + min);
        }
    }

    // Función para resetear el contador
    function resetear() {
        contador = 0;
        actualizar();
    }

    // Asociar los eventos de los botones a sus funciones
    document.getElementById("sumar").addEventListener("click", aumentar);
    document.getElementById("restar").addEventListener("click", disminuir);
    document.getElementById("reset").addEventListener("click", resetear);

    // Inicializar el contador en pantalla
    actualizar();
});
