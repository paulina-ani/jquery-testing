/*
ĆWICZENIE 3
1. Stwórz input na tekst, dwa buttony oraz div z id #result
2. Po kliknięciu w pierwszy button wypełnij element #result tekstem z inputa
3. Po kliknięciu w drugi button wyczyść element #result oraz input z tekstem
4. (opcjonalnie) Jeśli input z tekstem jest pusty, buttony powinny być wyłączone
*/

$("#button1").click(function () {
    var value = $("input").val();
    $('#result').text(value)
})

$("#button2").click(function() {
    $("input").val('');
    $("#result").text("")
})