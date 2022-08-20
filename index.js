
//esta función se va a ejecutar cuando se termine de cargar el sitio, es decir, cuando se hayan cargado todos los demas scripts, etc.

//agarro todos los elementos que tengan el atributo data-toggle = tooltip y llamamos a la funcion tool tip sobre ellos. Esto es un plugin de jquery que agrega bootstrap por nosotros.


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

