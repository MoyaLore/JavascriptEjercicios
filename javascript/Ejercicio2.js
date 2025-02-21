function lanzarDados() {
    // Generar los valores aleatorios de los dados
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;

    // Actualizar las imágenes de los dados
    document.getElementById("dado1").src = `img/${dado1}.png`;
    document.getElementById("dado2").src = `img/${dado2}.png`;

    // Mostrar la tirada actual en la tabla principal
    document.getElementById("valorDado1").textContent = dado1;
    document.getElementById("valorDado2").textContent = dado2;
    document.getElementById("resultado").textContent = `Suma: ${suma}`;

    // Guardar la tirada en el historial de los resultados
    const tabla = document.getElementById("resultadosTabla").getElementsByTagName("tbody")[0];
    const nuevaFila = tabla.insertRow();
    nuevaFila.insertCell(0).textContent = dado1;
    nuevaFila.insertCell(1).textContent = dado2;
    nuevaFila.insertCell(2).textContent = suma;
}

function resetearTabla() {
    // Limpiar el historial de resultados sin borrar la tabla principal
    const tabla = document.getElementById("resultadosTabla").getElementsByTagName("tbody")[0];
    tabla.innerHTML = ''; // Limpiar las filas de la tabla de historial
}

document.getElementById("lanzar").addEventListener("click", lanzarDados);
document.getElementById("reset").addEventListener("click", resetearTabla);
