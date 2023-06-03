// window.addEventListener('storage', () => {
//   mostrarDetalles();
// });

function mostrarDetalles() {
  getTrailer()
  return new Promise (response => {
  const llave = "&apikey=59162f1e"
  const link = "http://www.omdbapi.com/?i="
  let codigo = localStorage.codigo
  let urlfetch = `${link}${codigo}${llave}`
  console.log(urlfetch)
  fetch(urlfetch)
  .then(response => response.json())
  .then(data => {
    let titulo = data.Title
    let poster = data.Poster
    let lanzamiento = data.Released
    let generos = data.Genre
    let año = data.Year
    let pais = data.Country
    let trama = data.Plot
    let premios = data.Awards
    let director = data.Director
    let duracion = data.Runtime
    let calificacion = data.imdbRating
    let actores = data.Actors
    document.getElementById("informacion").innerHTML =

      `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${poster}" class="img-fluid rounded-start" alt="..." style="height: 400px;" >
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">${titulo}</h3>
            <h5 class="card-text">Año: ${año}</h5>
            <h5 class="card-text">Lanzamiento: ${lanzamiento}</h5>
            <h5 class="card-text">Genero(s): ${generos}</h5>
            <h5 class="card-text">Premio(s): ${premios}</h5>
            <h5 class="card-text">Director: ${director}</h5>
            <h5 class="card-text">Actores: ${actores}</h5>
            <h5 class="card-text">Duracion: ${duracion}</h5>
            <h5 class="card-text">Pais(es): ${pais}</h5>
            
            <h5 class="card-text">Calificación: ${calificacion}</h5>
          </div>
        </div>
        <div class="card-body">
        <h5 class="card-text">Trama: ${trama}</h5>
      </div>
      </div>
    </div>`
  })
})
}


function getTrailer(){
  return new Promise (response => {
  const keyYoutube = `+trailer&key=AIzaSyDOCSYGxgBJNftg4TwVc_XdJD-7Y9A178g` //caducada
  const keyYoutube2 = `+trailer&key=AIzaSyAJMOjU2oWOrwBF22KA5aHNKwqmXKR81pk` //gastada
  const keyYoutube3 = `+trailer&key=AIzaSyDRIhYNN3aBZHrv9IYpc5NU0N6t77eJ2Hk` //nueva
  const keyYoutube4 = `+trailer&key=AIzaSyB8obEDH1CESIBZAgOokZoNBz6s7olm0lA` //nueva
  const keyYoutube5 = `+trailer&key=AIzaSyDsi8UdSM4lHahIYoeVLT4mpfYEhbE7ItQ` //nueva
  const id = localStorage.codigo
  const url1 = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=`
  const base = `https://www.youtube.com/embed/`

  let url = `${url1}'${id}'${keyYoutube3}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    let parteYoutube = data.items[1].id.videoId
    let urlFinal = `${base}${parteYoutube}`
    console.log(urlFinal)
    document.getElementById("insertarVideo").src = urlFinal
  })
 
})
}

 
//       .then(response => response.json())
//       .then(data => {
//         let titulo = data.Title
//         let poster = data.Poster
//         let lanzamiento = data.Released
//         let generos = data.Genre
//         let año = data.Year
//         let pais = data.Country
//         let trama = data.Plot
//         let premios = data.Awards
//         let director = data.Director
//         let duracion = data.Runtime
//         let calificacion = data.Ratings[0].Value
//         let actores = data.Actors
//         document.getElementById("informacion").innerHTML =

//           `<div class="card mb-3" style="max-width: 540px;">
//           <div class="row g-0">
//             <div class="col-md-4">
//               <img src="${poster}" class="img-fluid rounded-start" alt="..." style="height: 400px;" >
//             </div>
//             <div class="col-md-8">
//               <div class="card-body">
//                 <h3 class="card-title">${titulo}</h3>
//                 <h5 class="card-text">Año: ${año}</h5>
//                 <h5 class="card-text">Lanzamiento: ${lanzamiento}</h5>
//                 <h5 class="card-text">Genero(s): ${generos}</h5>
//                 <h5 class="card-text">Premio(s): ${premios}</h5>
//                 <h5 class="card-text">Director: ${director}</h5>
//                 <h5 class="card-text">Actores: ${actores}</h5>
//                 <h5 class="card-text">Duracion: ${duracion}</h5>
//                 <h5 class="card-text">Pais(es): ${pais}</h5>
                
//                 <h5 class="card-text">Calificación: ${calificacion}</h5>
//               </div>
//             </div>
//             <div class="card-body">
//             <h5 class="card-text">Trama: ${trama}</h5>
//           </div>
//           </div>
//         </div>`
//       })
//   })

// }


