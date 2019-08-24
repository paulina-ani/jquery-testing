/*
ĆWICZENIE 6
Stwórz komponent typu akordeon z dwoma sekcjami.
Kliknięcie w nagłówek sekcji powinno ją rozwinąć.
Ponownie kliknięcie w nagłówek powinno sekcję zwinąć.
*/

/*$("#section-1-header").click(function () {
    $("#section-1-content").slideToggle("slow",function() {
        alert("Hello")
    })
})

$("#section-2-header").click(function () {
    $("#section-2-content").slideToggle("slow",function() {
        alert("Hi")
    })
})
*/

$(".section__header").click(function(e) {
    let id = e.target.nextSibling.nextSibling.id;
    $("#" + id).slideToggle("slow");
  });


