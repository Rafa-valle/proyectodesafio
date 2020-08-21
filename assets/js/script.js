$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
$(function(){

    $('a').click(function(event) {
        if (this.hash !== "") {
          event.preventDefault();
  
          var gato = this.hash; //guarda el valor de hash en una variable llamada gato. actualmete en vez de var se denomina let o cons
  
          $("html, body").animate({
            scrollTop: $(gato).offset().top
          }, 900, function(){  //600 milisegundos de retardo para abrir
  
            window.location.hash = gato; //Agrega hash (#) a la URL cuando haya terminado de desplazarse. comportamiento de click predeterminado
          });
        } //fin del if
    });
  
    $('[data-toggle="popover"]').popover();
  })
