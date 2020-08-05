$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
  $("#cravenButton").click(function () {
    $(".bookReview").show();
    $(".nameComment").focus();
  })
  $("#horrorReset").click(function () {
    $(".bookReview").hide();
  })
  $("#horrorSubmit").click(function (event) {
    event.preventDefault();

    var title=$(".cravenTitle").html();
    // alert(title);
    var name=$(".nameComment").val();
    // alert(name);
    var review=$(".reviewComment").val();
    // alert(review);
    if (name==="") {
      alert("Enter Name to Continue");
      $(".nameComment").focus();
    }
    else if (review==="") {
      alert("Enter Review to Continue");
      $(".reviewComment").focus
    }

    $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                            +"<div class=\"title\">"+name+"</div>"+
                            "<div class=\"sub-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
   
  });
});

$(document).ready(function () {
  $("#sheLiesButton").click(function () {
    $(".bookReview").show();
    $(".nameComment").focus();
  });
  $("#horrorReset").click(function () {
    $(".bookReview").hide();
  })
  $("#horrorSubmit").click(function (event) {
    event.preventDefault();

  });
});

$(document).ready(function () {
  $("#shiningButton").click(function () {
    $(".bookReview").show();
    $(".nameComment").focus();
  });
  $("#horrorReset").click(function () {
    $(".bookReview").hide();
  })
  $("#horrorSubmit").click(function (event) {
    event.preventDefault();

  });
});

$(document).ready(function () {
  $("#deepButton").click(function () {
    $(".bookReview").show();
    $(".nameComment").focus();
  });
  $("#horrorReset").click(function () {
    $(".bookReview").hide();
  })
  $("#horrorSubmit").click(function (event) {
    event.preventDefault();

  });
})


$(document).ready(function () {

});

$(document).ready(function () {

});

// $(document).ready(function(){
//     $("#cravenHover").hover(function(){
//       $("#cravenText").toggle();
//     }, function(){
//     $("#cravenText").toggle();
//     });
//   });

// $(document).ready(function(){
//     $("#liesHover").hover(function(){
//       $("#liesText").toggle();
//     }, function(){
//     $("#liesText").toggle();
//     });
//   });

//   $(document).ready(function(){
//     $("#deepHover").hover(function(){
//       $("#deepText").toggle();
//     }, function(){
//     $("#deepText").toggle();
//     });
//   });

//   $(document).ready(function(){
//     $("#shiningHover").hover(function(){
//       $("#shiningText").toggle();
//     }, function(){
//     $("#shiningText").toggle();
//     });
//   });