// Seleccionar el ícono de las barras (hamburguesa) y el menú lateral
const menuIcon = document.querySelector('.topnavbar .fa-bars');
const menuLateral = document.querySelector('.menu-lateral');

// Añadir un evento de clic al ícono de la hamburguesa
menuIcon.addEventListener('click', () => {
  // Alternar la clase "active" en el menú lateral
  menuLateral.classList.toggle('active');
});