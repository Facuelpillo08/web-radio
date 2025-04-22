let secciones = document.querySelectorAll('.seccion-card');
let indiceActual = 0;

setInterval(() => {
    // Ocultar todas las secciones
    secciones.forEach(seccion => {
        seccion.classList.remove('visible');
        seccion.classList.add('oculto');
    });

    // Mostrar la siguiente sección
    secciones[indiceActual].classList.remove('oculto');
    secciones[indiceActual].classList.add('visible');

    // Pasar a la siguiente
    indiceActual = (indiceActual + 1) % secciones.length;
}, 4000);