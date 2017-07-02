function capturar(){

    $.getJSON("../data/provincias.json", function(data) {
        console.log("fbfgkjkvcjvnv")
        $.each(data, function(key, val) {
            var ciudades = val["rows"];
            console.log(data);
            for(elemento of ciudades){
                console.log(elemento);
                alert("WTergtrygrtg");
            }
            /*var div = $('<div></div>');
            div.attr('class','col-lg-3 foto-artista '+generos);
            div.css('background-image','url("img/'+val["archivo"]+'")');

            var divOverlay = $('<div></div>');
            divOverlay.attr('class','overlay');

            var divText = $('<div></div>');
            divText.attr('class','text');
            divText.text(val["nombre"]);

            divOverlay.append(divText);
            div.append(divOverlay);
            
            $('#artistas').append(div);*/
        });
    });
    
}


window.onload = function() {
    capturar();
}
