

// Función para crear un Card con la informacion general de una pelicula
function Card(objeto) {
  return `
          <div class="col s6 m6">
            <div class="card blue-grey darken-4" id="${objeto.id}">
              <div class="card-image">
                <img src="${objeto.poster}" alt="${objeto.titulo} Poster" class="img-card">
                
              </div>
              <div class="card-content">
              <span class="card-title blue-grey darken-4 waves-effect waves-light white">${objeto.titulo}</span>
              </div>
            </div>
          </div>
        `;
}
function getPelicula(id){
  return map1[id];

}
class DatosBusqueda{
  constructor(){
    this.buscarPorartisa=true;
    this.buscarDirector=true;
    this.buscarPorNombre=true;
    this.buscarPorNomnreEnIngles=true;
    this.buscarPorAnno=true;
    this.texto="";
  }
}
function getListaPeliculasCoincidente(datosDeBusqueda){
  let peliculasEncontradas=[];
  
  let texto=datosDeBusqueda.texto;
  for (const v of datos) {
    if(datosDeBusqueda.buscarPorNombre){
      
      if(v.titulo.toLocaleLowerCase().includes(texto) ){
        peliculasEncontradas.push(v);
      }

    }

    if(datosDeBusqueda.buscarPorNombre){
      
      if(v.titulo.toLocaleLowerCase().includes(texto) ){
        peliculasEncontradas.push(v);
      }

    }

    if(datosDeBusqueda.buscarPorNombre){
      
      if(v.titulo.toLocaleLowerCase().includes(texto) ){
        peliculasEncontradas.push(v);
      }

    }
  }

}
function alAPretarClick(id){
  let p=getPelicula(id);

}

// Función para mostrar los datos de la pagina actual
function InitPeliculas(datos, pagina, elementosPorPagina) {
  const moviesContainer = $("#movies-container");
  moviesContainer.empty();
  var indiceInicial = (pagina - 1) * elementosPorPagina;
  var indiceFinal = indiceInicial + elementosPorPagina;
  var datosPorPagina = datos.slice(indiceInicial, indiceFinal);

  const movieCards = datosPorPagina.map(function (movie) {
    var element = Card(movie);
    moviesContainer.append(element);
  });
}

function Paginacion(datos, paginaActual, elementosPorPagina) {
  // Agregar los botones de navegación de la paginación
  var contenedorBotones = $("#paginacion");
  var numeroDePaginas = Math.ceil(datos.length / elementosPorPagina);

  for (var i = 1; i <= numeroDePaginas; i++) {
    var boton = $('<li class="waves-effect"><a href="#!">' + i + "</a></li>");
    boton.on("click", { pagina: i }, function (evento) {
      paginaActual = evento.data.pagina;
      InitPeliculas(paginaActual, elementosPorPagina);
    });
    contenedorBotones.append(boton);
  }
}

$(document).ready(() => {
  const peliculas = datos.peliculas;
  // Variables para controlar la paginación
  var paginaActual = 1;
  var elementosPorPagina = 4;
  InitPeliculas(peliculas, paginaActual, elementosPorPagina);

  //Mostrar Paginación
  $("#paginacion").materializePagination({
    align: "center",
    lastPage: Math.ceil(peliculas.length / elementosPorPagina),
    firstPage: 1,
    useUrlParameter: false,
    onClickCallback: function (requestedPage) {
      paginaActual = requestedPage;
      InitPeliculas(peliculas, paginaActual, elementosPorPagina);
      console.log("Requested page is " + requestedPage);
    },
  });
});
