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
          }, 900, function(){  //900 milisegundos de retardo 
  
            window.location.hash = gato;
          });
        } //fin del if
    });
  
    $('[data-toggle="popover"]').popover();
})

/*apertura de ventana al darle click a elementos especificos*/ 
$('.popover-dismiss').popover({
  trigger: 'focus'
})
