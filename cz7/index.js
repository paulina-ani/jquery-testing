/* 
ĆWICZENIE 7
• Stwórz element div i nanieś na niego serię dowolnych animacji.
• (opcjonalnie) Stwórz dwa buttony, jeden po kliknięciu powinien zatrzymać
animację w miejscu, drugi powinien rozpocząć animację od początku.
*/

function anim() {
    $("div")
    .animate({left: "+=50px"}, '1000')
    .animate({left: "-=50px"}, '1000', anim)
}

anim();