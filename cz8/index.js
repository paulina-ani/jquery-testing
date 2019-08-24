/*
ĆWICZENIE 8
Stwórz komponent typu akordeon taki jak w ćwiczeniu 6,
który będzie wspierać dowolną liczbę sekcji.
*/

$(".section__header").click(function() {
    $(this).next().slideToggle(1000)
})

