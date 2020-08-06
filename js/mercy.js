$(document).ready(function() {
    $(".kill").click(function() {
      $(".kill").slideUp("1000");
      $("#btn1").fadeIn();
    });
    $("#btn1").click(function() {
      $("form#form1").slideDown();
    });
  });


  $(document).ready(function() {
    $(".jojo").click(function() {
      $(".jojo").slideUp("1000");
      $("#btn2").fadeIn();
    });
    $("#btn2").click(function() {
      $("form#form2").slideDown();
    });
  });

  $(document).ready(function() {
    $(".fault").click(function() {
      $(".fault").slideUp("1000");
      $("#btn3").fadeIn();
    });
    $("#btn3").click(function() {
      $("form#form3").slideDown();
    });
  });

  $(document).ready(function() {
    $(".gone").click(function() {
      $(".gone").slideUp("1000");
      $("#btn4").fadeIn();
    });
    $("#btn4").click(function() {
      $("form#form4").slideDown();
    });
  });

  $(document).ready(function() {
    $(".home").click(function() {
      $(".home").slideUp("1000");
      $("#btn5").fadeIn();
    });
    $("#btn5").click(function() {
      $("form#form5").slideDown();
    });
  });

  $(document).ready(function() {
    $(".paper").click(function() {
      $(".paper").slideUp("1000");
      $("#btn6").fadeIn();
    });
    $("#btn6").click(function() {
      $("form#form6").slideDown();
    });
  });

  $(document).ready(function() {
    $(".hill").click(function() {
      $(".hill").slideUp("1000");
      $("#btn7").fadeIn();
    });
    $("#btn7").click(function() {
      $("form#form7").slideDown();
    });
  });

  $(document).ready(function() {
    $(".myle").click(function() {
      $(".myle").slideUp("1000");
      $("#btn8").fadeIn();
    });
    $("#btn8").click(function() {
      $("form#form8").slideDown();
    });
  });

  $(document).ready(function() {
    $(".memory").click(function() {
      $(".memory").slideUp("1000");
      $("#btn9").fadeIn();
    });
    $("#btn9").click(function() {
      $("form#form9").slideDown();
    });
  });


$(document).ready(function() {
    $(".far").click(function() {
      $(".far").slideUp("1000");
      $("#btn10").fadeIn();
    });
    $("#btn10").click(function() {
      $("form#form10").slideDown();
    });
});
$(document).ready(function() {
  $(".van").click(function() {
    $(".van").slideUp("1000");
    $("#btn11").fadeIn();
  });
  $("#btn11").click(function() {
    $("form#form11").slideDown();
  });
});

$(document).ready(function() {
    $(".truth").click(function() {
      $(".truth").slideUp("1000");
      $("#btn12").fadeIn();
    });
    $("#btn12").click(function() {
      $("form#form12").slideDown();
    });
  });

  $(document).ready(function(){
    $(".kill").hover(function(){
        $(".overlay").show();
        $(".kill img").css({
            opacity:0.6
        });
        $(".kill").mouseleave(function(){
          $(".kill img").css({
              opacity:0.6
          });
          $(".overlay").hide();
      });
    });




