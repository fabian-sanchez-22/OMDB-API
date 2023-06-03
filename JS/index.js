
// function traerPelicula() {
//   let nombrePelicula = document.getElementById("txtBuscar").value;
//   console.log(nombrePelicula)
//   const llave = "&apikey=59162f1e"
//   const link = "http://www.omdbapi.com/?s="
//   let cartas = ""

//   fetch(`${link}${nombrePelicula}${llave}`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//       data.Search.forEach(element => {
//         console.log(element)
//         let titulo = element.Title
//         let poster = element.Poster
//         cartas += `<a href="info.html" onclick="localStorage.setItem('title', '${titulo}'); window.dispatchEvent(new Event('storage'));">
//         <div class="card" style="  margin-top: 60px; width: 18rem;   ">
//         <h3>${titulo}</h3>
//         <img src="${poster}" class="card-img-top" alt="...">
//       </div>
//       </a>`
//       });
//       document.getElementById("imprimir").innerHTML = cartas
//     })
// }


// IMPORTANTE:  EL CODIGO COMENTADO ARRIBA FUNCIONA NORMALMENTE **********************
//  Y FUE HECHO POR MI, EL DE ABAJO SOLO AGREGA FUNCIONES PARA LA *********
// PARTE VISUAL *********************

const llave = "&apikey=59162f1e"
const link = "http://www.omdbapi.com/?s="

function traerPelicula() {
  let nombrePelicula = document.getElementById("txtBuscar").value;
  document.getElementById("txtBuscar").innerHTML = nombrePelicula

  const llave = "&apikey=59162f1e"
  const link = "http://www.omdbapi.com/?s="
  let cartas = ""

  fetch(`${link}${nombrePelicula}${llave}`)
    .then(response => response.json())
    .then(data => {

      const peliculas = data.Search
      for (let i = 0; i < peliculas.length; i += 5) {
        const peliculasBloque = peliculas.slice(i, i + 5)
        let fila = "<div class='row'>"
        peliculasBloque.forEach(element => {

          let titulo = element.Title
          let id = element.imdbID
          let poster = element.Poster
          let año = element.Year




          fila += `<div class="col-2" style="margin-left: 10px; margin-right: 10px;">
                    <a href="info.html" onclick="localEnviar('${id}')">
                      <div class="card" style="margin-top: 70px; width: 18rem;">
                        <h3>${titulo}</h3>
                        <img src="${poster}" class="card-img-top" alt="...">
                        <h5 class="card-text">Año: ${año}</h5>
                        <h5 class="card-text" id="genero${id}" ></h5>
                        <h5 class="card-text" id="calificar${id}"></h5>
                        <a><button  style="width: 286px;border-color: transparent;border-radius: 20px;"  onclick="listarFavoritos('${id}')"><i class="fas fa-solid fa-star"></i></button></a>
                      </div>
                    </a>
                  </div>`

          fetch(`http://www.omdbapi.com/?i=${id}${llave}`)
            .then(response => response.json())
            .then(data => {
              console.log(data)
              let genero = data.Genre;
              let calificar = data.imdbRating
              document.getElementById(`genero${id}`).innerHTML = `Genero(s): ${genero}`;
              document.getElementById(`calificar${id}`).innerHTML = `Calificación: ${calificar}`;

            })
        })
        fila += "</div>"
        cartas += fila
      }
      document.getElementById("imprimir").innerHTML = cartas
      document.getElementById("completar").innerHTML = ""
      document.getElementById("pelisR").innerHTML = ""

    })
}

function localEnviar(id) {
  localStorage.setItem("codigo", id)
}

function autocompletar() {
  let auto = ""
  let nombrePelicula = document.getElementById("txtBuscar").value;
  document.getElementById("txtBuscar").innerHTML = nombrePelicula
  if (nombrePelicula.length >= 3) {
    fetch(`${link}${nombrePelicula}${llave}`)
      .then(response => response.json())
      .then(data => {
        data.Search.forEach(element => {
          let nombre = element.Title
          let id = element.imdbID
          auto += `<a href="info.html" onclick= "localEnviar('${id}')"><div>${nombre}</div></a>`
        })
        document.getElementById("completar").innerHTML = auto
      })
  } else {
    document.getElementById("completar").innerHTML = ""
  }

}


const añadirFavoritos = []

function listarFavoritos(codigo) {
  añadirFavoritos.push(codigo)
  console.log(añadirFavoritos)
}

function mostrarLista() {
  let lista = ""
  añadirFavoritos.forEach(element => {
    const llave = "&apikey=59162f1e"
    const link = "http://www.omdbapi.com/?i="
    let nombre = element
    let concat = `${link}${nombre}${llave}`

    fetch(concat)
      .then(response => response.json())
      .then(data => {
        let nombreP = data.Title
        let posterP = data.Poster
        let añoP = data.Year
        let id = data.imdbID

        lista +=
          `<div class="col-2 " style="margin-left: 10px; margin-right: 10px;">
        <div class="card" style="margin-top: 70px; width: 16rem;">
          <h3>${nombreP}</h3>
          <a href="info.html" onclick= "localEnviar('${id}')"  ><img src="${posterP}" class="card-img-top" alt="..."></a>
          <h5 class="card-text">Año: ${añoP}</h5>
        </div>
      </a>
    </div>`
        document.getElementById("list").innerHTML = lista
      })

  })
}






function azarPelicula() {
  const key = '&apikey=59162f1e';
  const peliculas = ['comedia', 'drama', 'accion', 'terror', 'romance', 'aventura', 'ciencia ficcion', 'documental', 'misterio', 'musical'];
  let informacionPeliculas = '';

  for (let i = 0; i < 10; i++) {
    const peliRandom = peliculas[Math.floor(Math.random() * peliculas.length)];

    fetch(`http://www.omdbapi.com/?s=${peliRandom}${key}`)
      .then(response => response.json())
      .then(data => {
        const Random = data.Search[Math.floor(Math.random() * data.Search.length)];
        let nombreP = Random.Title;
        let posterP = Random.Poster;
        let añoP = Random.Year;
        let id = Random.imdbID;
        let tipoP = Random.Type;

        informacionPeliculas += `<div class="col" style="margin-left: 10px; margin-right: 10px;">
          <a href="info.html" onclick="localEnviar('${id}')">
            <div class="card" style="margin-top: 70px; width: 18rem;">
              <h3>${nombreP}</h3>
              <img src="${posterP}" class="card-img-top" alt="...">
              <h5 class="card-text">Tipo: ${tipoP}</h5>
              <h5 class="card-text">Año: ${añoP}</h5>
              <a><button style="width: 286px; border-color: transparent; border-radius: 20px;" onclick="listarFavoritos('${id}')"><i class="fas fa-solid fa-star"></i></button></a>
            </div>
          </a>
        </div>`;

        if (i === 9) {
          informacionPeliculas = `<div style="margin-top: 40px" class="row">${informacionPeliculas}</div>`;
          document.getElementById('pelisR').innerHTML = informacionPeliculas;
        }
      });
  }
}
