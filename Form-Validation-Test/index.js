//Event listener para cuando el Document está listo.
$(document).ready(function () {
    //Iterar sobre todos los inputs del documento.
    $("input").each(function () {
        /*
        Si es inválido al dar clic el input submit mostrará
        el mensaje que se encuentra en la línea 15.
        */
        $(this).bind("invalid", function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("✨ MENSAJE PERSONALIZADO ✨");
            }
        });
        $(this).on("input", function (e) {
            e.target.setCustomValidity("");
        });

    });
});