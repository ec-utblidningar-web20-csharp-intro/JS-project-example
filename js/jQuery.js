/*
  https://www.w3schools.com/jquery/jquery_get_started.asp
  jQuery är ett ease-of-life JS bibliotek som har funnits
  sen 2006.

  Eftersom det är såpass gammalt (3 år före ES5)
  så gör det saker på sitt sätt och är inte alltid
  bättre än mordernare lösningar i ES6.

  Är så välanvänt så det finns redan cachat på de
  flesta datorer.
*/
$(document).ready(function () {
  // $() betyder samma som document.querySelectorAll()
  $("img")
    .click(function (e) {
      $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/ditto",
        success: function (ditto) {
          e.currentTarget.src = ditto.sprites.front_default;
        },
      });

      /* om man vill fortsätta att kalla på jQuery
       metoder för <img> elementet kan man använda
       $(this)

       https://www.w3schools.com/jquery/jquery_fade.asp
       */
      $(this).fadeOut(4000);
    })
    // 'chaining' aka att vi fortsätter
    //  kalla på metoder via '.' är en grundsten i jQuery
    .mouseleave(function () {
      $(this).stop();
      this.src = "img/codic.png";
    });
});
