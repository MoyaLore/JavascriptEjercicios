// Evento para el botón Take off
document.getElementById('takeoff').addEventListener('click', function() {
    document.getElementById('status').textContent = "Houston, we have liftoff!";
  });
  
  // Referencia al botón Abort Mission
  const abortButton = document.getElementById('abort');
  
  // Cambiar el color de fondo a rojo cuando se pasa el cursor por encima
  abortButton.addEventListener('mouseover', function() {
    abortButton.style.backgroundColor = 'red';
  });
  
  // Restaurar el color de fondo cuando el cursor sale
  abortButton.addEventListener('mouseout', function() {
    abortButton.style.backgroundColor = '';  // Vuelve al estilo definido en CSS
  });
  
  // Evento click para Abort Mission con confirmación
  abortButton.addEventListener('click', function() {
    if (confirm("Are you sure you want to abort the mission?")) {
      document.getElementById('status').textContent = "Mission aborted! Space shuttle returning home.";
    }
  });
  