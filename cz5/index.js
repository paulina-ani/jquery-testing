/*
ĆWICZENIE 5
1. Stwórz paragraf z lorem ipsum
2. Po najechaniu kursorem na paragraf powinien zmieniać się kolor tekstu
*/

$(".p").hover(function() {
    $(".p").css({
        color: "red",
    })
}, function() {
    $(".p").css({
        color: "green"
    })
})