/*
ĆWICZENIE 4
1. Stwórz element select
2. Z poziomu kodu JS wypełnij go kilkoma opcjami
3. Stwórz listę (ul/ol) i button
4. Po kliknięciu w button dodaj do listy aktualnie wybraną opcję z selecta
5. Stwórz drugi button, który po kliknięciu wyczyści listę
*/

$("select").append(
    $('<option value="1">1<option>'),
    $('<option value="2">2<option>'),
    $('<option value="3">3<option>'),
    $('<option value="4">4<option>'),
)

$("#add").click(function () {
    var value=$("select").val();
    $("ul").append($("<li></li>").text(value));

})

$("#clear").click(function () {
    $("ul").remove();

})