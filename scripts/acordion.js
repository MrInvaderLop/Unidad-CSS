// Seleccionar todos los encabezados con la flecha
const footerHeaders = document.querySelectorAll('.pre-footer .pre-footer-block i');

// Agregar evento de clic a cada encabezado
footerHeaders.forEach(i => {
  i.addEventListener('click', () => {
    const list = i.nextElementSibling; // Selecciona el ul debajo del h3

    // Alternar clase "active" para desplegar/contraer
    if (list.classList.contains('active')) {
      list.classList.remove('active');
      header.classList.remove('active'); // Rotar la flecha hacia la derecha
    } else {
      // Cerrar cualquier otra sección (opcional: acordeón)
      document.querySelectorAll('.pre-footer ul').forEach(ul => ul.classList.remove('active'));
      document.querySelectorAll('.pre-footer h3').forEach(i => i.classList.remove('active'));

      // Desplegar la lista actual
      list.classList.add('active');
      header.classList.add('active'); // Rotar la flecha hacia abajo
    }
  });
});
