/* 
 YouTube Audio Embed 
 --------------------

 Author: Amit Agarwal
 Web: http://www.labnol.org/?p=26740

 edited by Anton Chinaev
*/

// Esta función la llama automáticamente la API de YouTube cuando se ha cargado correctamente
function onYouTubeIframeAPIReady() {

    // Función para cambiar el ícono del botón dependiendo del estado (reproduciendo o detenido)
    var o = function (isStopped, imgElement) {
        // Si está detenido, usamos una imagen; si está reproduciendo, usamos otra
        var img = isStopped ? "icon_play.jpg" : "icono_1prueba.jpg";  // Reemplaza con tus imágenes de Imgur
        // Cambiamos el atributo src de la imagen para mostrar el ícono correcto
        imgElement.setAttribute("src", "" + img);

        var playing = document.querySelector(".playing");
        playing.setAttribute("src","");
    };

    var counter = 0; // Contador para asignar ID únicos a cada reproductor
    var bigE = document.querySelectorAll(".youtube-audio"); // Selecciona todos los elementos con la clase "youtube-audio"

    // Recorremos cada uno de esos elementos
    bigE.forEach(function (element) {

        // Creamos una imagen que será el botón de reproducir/pausar
        var icon = document.createElement("img");
        icon.setAttribute("id", "youtube-icon-" + counter); // Le damos un ID único
        icon.style.cssText = "cursor:pointer;"; // Cambiamos el cursor al pasar sobre la imagen
        element.appendChild(icon); // Añadimos la imagen dentro del contenedor

        // Creamos un div oculto que será reemplazado por el reproductor YouTube
        var playerDiv = document.createElement("div");
        playerDiv.setAttribute("id", "youtube-player-" + counter); // ID único
        element.appendChild(playerDiv); // Lo añadimos dentro del contenedor

        // Le damos al ícono una imagen inicial (estado detenido)
        icon.setAttribute("src", "https://i.imgur.com/OGKm2ZU.png");

        // Creamos un nuevo reproductor de YouTube
        let player = new YT.Player("youtube-player-" + counter, {
            height: "0", // Ocultamos el reproductor visual
            width: "0",
            videoId: element.dataset.video, // Usamos el ID del video de los atributos del HTML
            playerVars: {
                autoplay: element.dataset.autoplay, // Usamos configuración personalizada de autoplay
                loop: element.dataset.loop // Configuración personalizada de bucle (loop)
            },
            events: {
                // Cuando el reproductor está listo
                onReady: function () {
                    player.setPlaybackQuality("small"); // Reducimos la calidad para solo audio
                    o(player.getPlayerState() !== YT.PlayerState.CUED, icon); // Establecemos el ícono inicial
                },
                // Cuando cambia el estado del reproductor
                onStateChange: function (event) {
                    if (event.data === YT.PlayerState.ENDED) {
                        o(true, icon); // Si el video termina, volvemos a mostrar el ícono de detenido
                    }
                }
            }
        });

        // Cuando el usuario hace clic en el contenedor (donde está el ícono)
        element.onclick = function () {
            var state = player.getPlayerState(); // Obtenemos el estado actual del reproductor
            if (state === YT.PlayerState.PLAYING || state === YT.PlayerState.BUFFERING) {
                player.pauseVideo(); // Si está reproduciendo o cargando, lo pausamos
                o(true, icon); // Cambiamos el ícono a detenido
            } else {
                player.playVideo(); // Si está pausado, lo reproducimos
                o(false, icon); // Cambiamos el ícono a "reproduciendo"
            }
        };

        counter++; // Incrementamos el contador para el siguiente reproductor
    });
}