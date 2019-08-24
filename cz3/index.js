$("#button1").click(function () {
    var value = $("input").val();
    $('#result').text(value)
})

$("#button2").click(function() {
    $("input").val('');
    $("#result").text("")
})