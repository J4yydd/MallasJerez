// Obtener todos los enlaces de la barra de navegación
const navLinks = document.querySelectorAll('.estatic a');

// Añadir un evento de clic a cada enlace
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Eliminar la clase "active" de todos los enlaces
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Añadir la clase "active" al enlace clickeado
        link.classList.add('active');
    });
});
