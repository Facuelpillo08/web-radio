let secciones = document.querySelectorAll('.seccion-card');
let indiceActual = 0;

setInterval(() => {
    // ocultar
    secciones.forEach(seccion => {
        seccion.classList.remove('visible');
        seccion.classList.add('oculto');
    });
    //mostrar
    secciones[indiceActual].classList.remove('oculto');
    secciones[indiceActual].classList.add('visible');

    // pasar a siguiete
    indiceActual = (indiceActual + 1) % secciones.length;
}, 2000);