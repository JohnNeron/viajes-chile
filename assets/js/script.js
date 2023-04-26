$(document).ready(function() {
    $("#avion").click(function () {
        $("#descripcion1").toggle("slow", function() {
            
        });
    });
    $("#montana").click(function() {
        $("#descripcion2").toggle("slow", function(){

        });
    });
    $("#ruta").click(function() {
        $("#descripcion3").toggle("slow", function() {

        });
    });
    $("#destacar").click(function() {
        $("#pordestacar h5, p").css({
            "color": "white"
        });
    });
})