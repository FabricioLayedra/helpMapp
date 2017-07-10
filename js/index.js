function aumentar(){
	$('#btn-socket').click(function(){
        var valor = $(".valor").val();
        alert(valor);
        /*$("#valor").empty();*/
        $.getJSON("/helpMapp/data/ciudades.json", function(data) {
        	if(valor != ""){
	        	let opcion = $('<option></option>');
		        opcion.attr("value", "")
		        opcion.text("Ciudad");
		        $("#city").append(opcion);
		        $.each(data["rows"], function(key,val) {
		        	if (valor == val["id_provincia"]){
			            let nombre = val["nombre"];
			            let opcion = $('<option></option>');
			            opcion.attr("value", val["id_ciudad"])
			            opcion.attr("id","ciudad");
			            opcion.text(nombre);
			            $("#city").append(opcion);
		         	}
		        });
		    }
	    });
    });
}



$(window).load(function() {
 	aumentar();
});