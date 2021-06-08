//alerta bienvenida
$(document).ready(function() {
    alert("Bienvenido");
});

//mostrar alerta
$("#c1").click(function() {
    alert("!!ALERTA¡¡");
});

//Ocultar bloque
$("#c2").click(function() {
    $("#caja").hide(700);
});

//Mostrar bloque
$("#c3").click(function() {
    $("#caja").show(700);
});

//Ocultar / Mostrar
$("#c4").click(function() {
    $("#caja").toggle(700);
}, function() {
    $("#caja").toggle(700);
});

//Cambiar tamaño
$("#c5").click(function() {
    $("#caja").animate({
            fontSize: '2em',
            width: 350,
            padding: 18
        },
        700);
});

//Cambiar tamaño
$("#c6").click(function() {
    $("#caja").animate({
            fontSize: '1em',
            width: 240,
            padding: 10
        },
        700);
});

//Ocultar/mostrar con fadeToggle
$("#c7").click(function() {
    $("#caja").fadeToggle(700);
});

//Ocultar con FadeOut
$("#c8").click(function() {
    $("#caja").fadeOut(700);
});

//Mostrar con FadeIn
$("#c9").click(function() {
    $("#caja").fadeIn(700);
});

//Cambiar estilo color amarillo
$("#c10").click(function() {
    $("#caja").css({
        'border': '3px solid #FEFF00',
        'color': '#FEFF00',
        'background-color': '#525252'
    })
});

//Cambiar estilo color verde
$("#c11").click(function() {
    $("#caja").css({
        'border': '3px solid #47FB2D',
        'color': '#47FB2D',
        'background-color': '#525252'
    })
});

//Cambiar tamaño
$("#c12").click(function() {
    $("section").animate({
            'max-width': '200px'
        },
        700);
});
//Cambiar tamaño
$("#c13").click(function() {
    $("section").animate({
            'max-width': '400px',
        },
        700);
});

//Ocultar
$("#caja").click(function() {
    $(this).hide().delay(700).show(700);
});