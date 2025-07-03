fetch ("noticias.json",
    {
        metohod: "GET",
        headers: {
            "Content-Type":"application/json"
        }
    }
)
.then(response => response.text())
.then(data => {
    const json = JSON.parse(data);
    console.log(json);

    divNoticia = document.querySelector(".divNoticia");
    divNoticia.innerHTML = "";

     json.forEach(elem => {
               console.log("Adentro json");
               noticia = ` <div class="col m12">
                <div class="noticia destacada">
                    <img class="img" src="${elem.image}">
                    <div class="content">
                        <div class="titulo">${elem.titulo}</div>
                        <div class="descripcion">${elem.descripcion}</div>
                    </div>
                </div>
            </div>`;

        divNoticia.innerHTML += noticia;
    });
});

