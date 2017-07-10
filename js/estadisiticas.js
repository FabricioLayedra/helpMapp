function mostrarEstadisticas(){
    $('#city').click(function(){
        $(".row1").empty();
        var valor = $("#province").val();
        let contenedor = $('<div></div>');
        contenedor.attr("class", "col-lg-4");
        let imagen = $('<img></img>');
        imagen.attr("class", "imagen-estaditica");
        imagen.attr("src","../img/estadistica1.png");
        contenedor.append(imagen);
        $(".row1").append(contenedor);
        let contenedor1 = $('<div></div>');
        contenedor1.attr("class", "col-lg-4");
        let imagen1 = $('<img></img>');
        imagen1.attr("class", "imagen-estaditica");
        imagen1.attr("src","../img/estadistica2.png");
        contenedor1.append(imagen1);
        $(".row1").append(contenedor1);
        let contenedor2 = $('<div></div>');
        contenedor2.attr("class", "col-lg-4");
        let imagen2 = $('<img></img>');
        imagen2.attr("class", "imagen-estaditica");
        imagen2.attr("src","../img/estadistica3.jpg");
        contenedor2.append(imagen2);
        $(".row1").append(contenedor2);
    });
}


$(window).load(function() {
    mostrarEstadisticas();
});