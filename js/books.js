$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
//craven book review
$(document).ready(function () {
  $("#cravenButton").click(function () {
    $("#cravenReview").show();
    $("#liesReview").hide();
    $("#shiningReview").hide();
    $("#deepReview").hide();
    $("#cravenNameComment").focus();
  })
  $("#cravenReset").click(function () {
    $("#cravenReview").hide();
  })
  $("#cravenSubmit").click(function (event) {
    event.preventDefault();

    var title=$(".cravenTitle").html();
    // alert(title);
    var name=$("#cravenNameComment").val();
    // alert(name);
    var review=$("#cravenReviewComment").val();
    // alert(review);
    if (name==="") {
      alert("Enter Name to Continue");
      $("#cravenNameComment").focus();
      $("#cravenReset").click();
    }
    else if (review==="") {
      alert("Enter Review to Continue");
      $("#cravenReviewComment").focus();
      $("#cravenReset").click();
    }

    $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                            +"<div class=\"title my-1\">"+name+"</div>"+
                            "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
    $("#cravenReset").click();
  });
});
//she lies book review
$(document).ready(function () {
  $("#sheLiesButton").click(function () {
    $("#liesReview").show();
    $("#cravenReview").hide();
    $("#shiningReview").hide();
    $("#deepReview").hide();
    $("#liesNameComment").focus();
  });
  $("#liesReset").click(function () {
    $("#liesReview").hide();
  })
  $("#liesSubmit").click(function (event) {
    event.preventDefault();

    var title=$(".liesTitle").html();
    // alert(title);
    var name=$("#liesNameComment").val();
    // alert(name);
    var review=$("#liesReviewComment").val();
    // alert(review);
    if (name==="") {
      alert("Enter Name to Continue");
      $("#liesNameComment").focus();
      $("#liesReset").click();
    }
    else if (review==="") {
      alert("Enter Review to Continue");
      $("#liesReviewComment").focus();
      $("#liesReset").click();
    }

    $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                            +"<div class=\"title my-1\">"+name+"</div>"+
                            "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
    $("#liesReset").click();
  });
});
//shining book review
$(document).ready(function () {
  $("#shiningButton").click(function () {
    $("#shiningReview").show();
    $("#liesReview").hide();
    $("#cravenReview").hide();
    $("#deepReview").hide();
    $("#shiningNameComment").focus();
  });
  $("#shiningReset").click(function () {
    $("#shiningReview").hide();
  })
  $("#shiningSubmit").click(function (event) {
    event.preventDefault();

    var title=$(".shiningTitle").html();
    // alert(title);
    var name=$("#shiningNameComment").val();
    // alert(name);
    var review=$("#shiningReviewComment").val();
    // alert(review);
    if (name==="") {
      alert("Enter Name to Continue");
      $("#shiningNameComment").focus();
      $("#shiningReset").click();
    }
    else if (review==="") {
      alert("Enter Review to Continue");
      $("#shiningReviewComment").focus
      $("#shiningReset").click();
    }

    $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                            +"<div class=\"title my-1\">"+name+"</div>"+
                            "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
    $("#shiningReset").click();
  });
});
//the deep book review
$(document).ready(function () {
  $("#deepButton").click(function () {
    $("#deepReview").show();
    $("#liesReview").hide();
    $("#shiningReview").hide();
    $("#cravenReview").hide();
    $("#deepNameComment").focus();
  });
  $("#deepReset").click(function () {
    $("#deepReview").hide();
  })
  $("#deepSubmit").click(function (event) {
    event.preventDefault();

    var title=$(".deepTitle").html();
    // alert(title);
    var name=$("#deepNameComment").val();
    // alert(name);
    var review=$("#deepReviewComment").val();
    // alert(review);
    if (name==="") {
      alert("Enter Name to Continue");
      $("#deepNameComment").focus();
      $("#deepsReset").click();
    }
    else if (review==="") {
      alert("Enter Review to Continue");
      $("#deepReviewComment").focus();
      $("#deepsReset").click();
    }

    // $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
    //                         +"<div class=\"title my-1\">"+name+"</div>"+
    //                         "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
                           
    // $( "<div class=\"card m-1\">"+"<div class=\"content\">"+"<div class=\"title my-1\">"+name+"</div>"+"<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>" ).insertAfter( ".mathenge" );
    $( "<div class=\"card m-1\">"+"<div class=\"content\">"+"<div class=\"title my-1\">"+name+"</div>"+"<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>" ).insertBefore( ".mathenge" );

    $("#deepsReset").click();
  });
})


// $(document).ready(function(){
//   $("#liesReview").hover(function(){
//     // $("#hovershow7").fadeToggle(750);
//   }, function(){
//     $("#liesReview").toggle();
//   });
// });