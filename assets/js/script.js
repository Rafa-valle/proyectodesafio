/*funcion para mostrar texto
pasando cursor por texto, imagen o icono*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

/*funcion para el 
desplazamiento de la pagina*/ 
$(function(){

    $('a').click(function(event) {
        if (this.hash !== "") {
          event.preventDefault();
  
          var gato = this.hash; //almacena el valor de hash en variable llamada gato.
  
          $("html, body").animate({
            scrollTop: $(gato).offset().top
          }, 700, function(){  //700 milisegundos de retardo 
  
            window.location.hash = gato;
          });
        } //fin del if
    });
  
    $('[data-toggle="popover"]').popover();
})
