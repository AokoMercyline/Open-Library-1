$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
  $("#cravenButton").click(function () {
    $("#cravenReview").show();
    $(".nameComment").focus();
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
    }
    else if (review==="") {
      alert("Enter Review to Continue");
      $("#cravenReviewComment").focus
    }

    $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                            +"<div class=\"title my-1\">"+name+"</div>"+
                            "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
    $("#cravenReset").click();
  });
});

$(document).ready(function () {
  $("#sheLiesButton").click(function () {
    $("#liesReview").show();
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
    }
    else if (review==="") {
      alert("Enter Review to Continue");
      $("#liesReviewComment").focus
    }

    $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                            +"<div class=\"title my-1\">"+name+"</div>"+
                            "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
    $("#liesReset").click();
  });
});

$(document).ready(function () {
  $("#shiningButton").click(function () {
    $("#shiningReview").show();
    $("#shiningComment").focus();
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
    }
    else if (review==="") {
      alert("Enter Review to Continue");
      $("#shiningReviewComment").focus
    }

    $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                            +"<div class=\"title my-1\">"+name+"</div>"+
                            "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
    $("#shiningReset").click();
  });
});

$(document).ready(function () {
  $("#deepButton").click(function () {
    $("#deepReview").show();
    $("#deepComment").focus();
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
    }
    else if (review==="") {
      alert("Enter Review to Continue");
      $("#deepReviewComment").focus
    }

    $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                            +"<div class=\"title my-1\">"+name+"</div>"+
                            "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
    $("#deepsReset").click();
  });
})


$(document).ready(function () {

});

$(document).ready(function () {

});