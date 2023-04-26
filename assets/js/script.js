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

const nombre = document.getElementById("nombre")
const asunto = document.getElementById("asunto")
const mensaje = document.getElementById("mensaje")

function enviar() {
    if(nombre.value.length <= 0) {
        alert("Por favor, introduzca su nombre para enviar la solicitud de contacto")
    } else if (asunto.value.length <= 0) {
        alert("Por favor, introduzca su asunto para enviar la solicitud de contacto")
    } else if (mensaje.value.length <= 0) {
        alert("Por favor, escriba su mensaje para enviar la solicitud de contacto")
    } else {
        alert("¡ Solicitud enviada exitosamente !")
    }
}