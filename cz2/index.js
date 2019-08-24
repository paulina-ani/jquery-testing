/*
CWICZENIE 2
Dodaj do strony paragraf z lorem ipsum oraz przycisk.
Po wciśnięciu przycisku paragraf powinien się
ukrywać/pokazywać (toggle).
*/

$(".button").click(function () {
    $("#p").fadeToggle();
})
