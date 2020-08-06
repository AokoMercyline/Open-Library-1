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

    var title = $(".cravenTitle").html();
    // alert(title);
    var name = $("#cravenNameComment").val();
    // alert(name);
    var review = $("#cravenReviewComment").val();
    // alert(review);
    if (name === "") {
      alert("Enter Name to Continue! Try again!");
      $("#cravenNameComment").focus();
      // $("#cravenReset").click();
    }
    else if (review === "") {
      alert("Cannot Have Empty Review. Try again!");
      $("#cravenReviewComment").focus();
      $("#cravenReset").click();
    } else {

      $(".revWrite").prepend("<div class=\"card m-1\">" + "<div class=\"content\">"
        + "<div class=\"title my-1\">" + name + "</div>" +
        "<div class=\"card-title\">" + title + "</div>" + "<p class=\"limit\">" + review + "</p>" + "</div>" + "</div>");
      $("#cravenReset").click();
    }
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

    var title = $(".liesTitle").html();
    // alert(title);
    var name = $("#liesNameComment").val();
    // alert(name);
    var review = $("#liesReviewComment").val();
    // alert(review);
    if (name === "") {
      alert("Enter Name to Continue! Try again!");
      $("#liesNameComment").focus();
      // $("#liesReset").click();
    }
    else if (review === "") {
      alert("Cannot Have Empty Review. Try again!");
      $("#liesReviewComment").focus();
      // $("#liesReset").click();
    } else {

      $(".revWrite").prepend("<div class=\"card m-1\">" + "<div class=\"content\">"
        + "<div class=\"title my-1\">" + name + "</div>" +
        "<div class=\"card-title\">" + title + "</div>" + "<p class=\"limit\">" + review + "</p>" + "</div>" + "</div>");
      $("#liesReset").click();
    }
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

    var title = $(".shiningTitle").html();
    // alert(title);
    var name = $("#shiningNameComment").val();
    // alert(name);
    var review = $("#shiningReviewComment").val();
    // alert(review);
    if (name === "") {
      alert("Enter Name to Continue! Try again!");
      $("#shiningNameComment").focus();
      // $("#shiningReset").click();
    }
    else if (review === "") {
      alert("Cannot Have Empty Review. Try again!");
      $("#shiningReviewComment").focus
      $("#shiningReset").click();
    } else {

      $(".revWrite").prepend("<div class=\"card m-1\">" + "<div class=\"content\">"
        + "<div class=\"title my-1\">" + name + "</div>" +
        "<div class=\"card-title\">" + title + "</div>" + "<p class=\"limit\">" + review + "</p>" + "</div>" + "</div>");
      $("#shiningReset").click();
    }
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

    var title = $(".deepTitle").html();
    // alert(title);
    var name = $("#deepNameComment").val();
    // alert(name);
    var review = $("#deepReviewComment").val();
    // alert(review);
    if (name === "") {
      alert("Enter Name to Continue! Try again!");
      $("#deepNameComment").focus();
      // $("#deepsReset").click();
    }
    else if (review === "") {
      alert("Cannot Have Empty Review. Try again!");
      $("#deepReviewComment").focus();
      // $("#deepsReset").click();
    } else {

      $(".revWrite").prepend("<div class=\"card m-1\">" + "<div class=\"content\">"
        + "<div class=\"title my-1\">" + name + "</div>" +
        "<div class=\"card-title\">" + title + "</div>" + "<p class=\"limit\">" + review + "</p>" + "</div>" + "</div>");

      // $( "<div class=\"card m-1\">"+"<div class=\"content\">"+"<div class=\"title my-1\">"+name+"</div>"+"<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>" ).insertAfter( ".mathenge" );
      // $( "<div class=\"card m-1\">"+"<div class=\"content\">"+"<div class=\"title my-1\">"+name+"</div>"+"<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>" ).insertBefore( ".mathenge" );

      $("#deepsReset").click();
    }
  });
})

//thief book review
$(document).ready(function () {
  $("#thiefButton").click(function () {
    $("#thiefReview").show();
    $("#thugReview").hide();
    $("#faultReview").hide();
    $("#tweetReview").hide();
    $("#thiefNameComment").focus();
  })
  $("#thiefReset").click(function () {
    $("#thiefReview").hide();
  })
  $("#thiefSubmit").click(function (event) {
    event.preventDefault();

    var title = $(".thiefTitle").html();
    // alert(title);
    var name = $("#thiefNameComment").val();
    // alert(name);
    var review = $("#thiefReviewComment").val();
    // alert(review);
    if (name === "") {
      alert("Enter Name to Continue! Try again!");
      $("#thiefNameComment").focus();
      // $("#thiefReset").click();
    }
    else if (review === "") {
      alert("Cannot Have Empty Review. Try again!");
      $("#thiefReviewComment").focus();
      // $("#thiefReset").click();
    } else {

      $(".revWrite").prepend("<div class=\"card m-1\">" + "<div class=\"content\">"
        + "<div class=\"title my-1\">" + name + "</div>" +
        "<div class=\"card-title\">" + title + "</div>" + "<p class=\"limit\">" + review + "</p>" + "</div>" + "</div>");
      $("#thiefReset").click();
    }
  });
});
//thug book
$(document).ready(function () {
  $("#thugButton").click(function () {
    $("#thugReview").show();
    $("#thiefReview").hide();
    $("#faultReview").hide();
    $("#tweetReview").hide();
    $("#thugNameComment").focus();
  })
  $("#thugReset").click(function () {
    $("#thugReview").hide();
  })
  $("#thugSubmit").click(function (event) {
    event.preventDefault();

    var title = $(".thugTitle").html();
    // alert(title);
    var name = $("#thugNameComment").val();
    // alert(name);
    var review = $("#thugReviewComment").val();
    // alert(review);
    if (name === "") {
      alert("Enter Name to Continue! Try again!");
      $("#thugNameComment").focus();
      // $("#thugReset").click();
    }
    else if (review === "") {
      alert("Cannot Have Empty Review. Try again!");
      $("#thugReviewComment").focus();
      // $("#thugReset").click();
    } else {

      $(".revWrite").prepend("<div class=\"card m-1\">" + "<div class=\"content\">"
        + "<div class=\"title my-1\">" + name + "</div>" +
        "<div class=\"card-title\">" + title + "</div>" + "<p class=\"limit\">" + review + "</p>" + "</div>" + "</div>");
      $("#thugReset").click();
    }
  });
});
//fault book review
$(document).ready(function () {
  $("#faultButton").click(function () {
    $("#faultReview").show();
    $("#thugReview").hide();
    $("#thiefReview").hide();
    $("#tweetReview").hide();
    $("#thiefNameComment").focus();
  })
  $("#faultReset").click(function () {
    $("#faultReview").hide();
  })
  $("#faultSubmit").click(function (event) {
    event.preventDefault();

    var title = $(".faultTitle").html();
    // alert(title);
    var name = $("#faultNameComment").val();
    // alert(name);
    var review = $("#faultReviewComment").val();
    // alert(review);
    if (name === "") {
      alert("Enter Name to Continue! Try again!");
      $("#faultNameComment").focus();
      // $("#faultReset").click();
    }
    else if (review === "") {
      alert("Cannot Have Empty Review. Try again!");
      $("#faultReviewComment").focus();
      // $("#faultReset").click();
    } else {

      $(".revWrite").prepend("<div class=\"card m-1\">" + "<div class=\"content\">"
        + "<div class=\"title my-1\">" + name + "</div>" +
        "<div class=\"card-title\">" + title + "</div>" + "<p class=\"limit\">" + review + "</p>" + "</div>" + "</div>");
      $("#faultReset").click();
    }
  });
});
//tweet cute review
$(document).ready(function () {
  $("#tweetButton").click(function () {
    $("#tweetReview").show();
    $("#thugReview").hide();
    $("#faultReview").hide();
    $("#thiefReview").hide();
    $("#tweetNameComment").focus();
  })
  $("#tweetReset").click(function () {
    $("#tweetReview").hide();
  })
  $("#tweetSubmit").click(function (event) {
    event.preventDefault();

    var title = $(".tweetTitle").html();
    // alert(title);
    var name = $("#tweetNameComment").val();
    // alert(name);
    var review = $("#tweetReviewComment").val();
    // alert(review);
    if (name === "") {
      alert("Enter Name to Continue! Try again!");
      $("#tweetNameComment").focus();
      // $("#tweetReset").click();
    }
    else if (review === "") {
      alert("Cannot Have Empty Review. Try again!");
      $("#tweetReviewComment").focus();
      // $("#tweetReset").click();
    } else {

      $(".revWrite").prepend("<div class=\"card m-1\">" + "<div class=\"content\">"
        + "<div class=\"title my-1\">" + name + "</div>" +
        "<div class=\"card-title\">" + title + "</div>" + "<p class=\"limit\">" + review + "</p>" + "</div>" + "</div>");
      $("#tweetReset").click();
    }
  });
});

//happy book review
$(document).ready(function () {
  $("#happyButton").click(function () {
    $("#happyReview").show();
    $("#monkReview").hide();
    $("#posReview").hide();
    $("#richReview").hide();
    $("#happyNameComment").focus();
  })
  $("#happyReset").click(function () {
    $("#happyReview").hide();
  })
  $("#happySubmit").click(function (event) {
    event.preventDefault();

    var title = $(".happyTitle").html();
    // alert(title);
    var name = $("#happyNameComment").val();
    // alert(name);
    var review = $("#happyReviewComment").val();
    // alert(review);
    if (name === "") {
      alert("Enter Name to Continue! Try again!");
      $("#happyNameComment").focus();
      // $("#thiefReset").click();
    }
    else if (review === "") {
      alert("Cannot Have Empty Review. Try again!");
      $("#happyReviewComment").focus();
      // $("#thiefReset").click();
    } else {

      $(".revWrite").prepend("<div class=\"card m-1\">" + "<div class=\"content\">"
        + "<div class=\"title my-1\">" + name + "</div>" +
        "<div class=\"card-title\">" + title + "</div>" + "<p class=\"limit\">" + review + "</p>" + "</div>" + "</div>");
      $("#happyReset").click();
    }
  });
});
//monk book
$(document).ready(function () {
  $("#monkButton").click(function () {
    $("#monkReview").show();
    $("#happyReview").hide();
    $("#posReview").hide();
    $("#richReview").hide();
    $("#monkNameComment").focus();
  })
  $("#monkReset").click(function () {
    $("#monkReview").hide();
  })
  $("#monkSubmit").click(function (event) {
    event.preventDefault();

    var title = $(".monkTitle").html();
    // alert(title);
    var name = $("#monkNameComment").val();
    // alert(name);
    var review = $("#monkReviewComment").val();
    // alert(review);
    if (name === "") {
      alert("Enter Name to Continue! Try again!");
      $("#monkNameComment").focus();
      // $("#thugReset").click();
    }
    else if (review === "") {
      alert("Cannot Have Empty Review. Try again!");
      $("#monkReviewComment").focus();
      // $("#thugReset").click();
    } else {

      $(".revWrite").prepend("<div class=\"card m-1\">" + "<div class=\"content\">"
        + "<div class=\"title my-1\">" + name + "</div>" +
        "<div class=\"card-title\">" + title + "</div>" + "<p class=\"limit\">" + review + "</p>" + "</div>" + "</div>");
      $("#monkReset").click();
    }
  });
});
//positive book review
$(document).ready(function () {
  $("#posButton").click(function () {
    $("#posReview").show();
    $("#happyReview").hide();
    $("#monkReview").hide();
    $("#richReview").hide();
    $("#posNameComment").focus();
  })
  $("#posReset").click(function () {
    $("#posReview").hide();
  })
  $("#posSubmit").click(function (event) {
    event.preventDefault();

    var title = $(".posTitle").html();
    // alert(title);
    var name = $("#posNameComment").val();
    // alert(name);
    var review = $("#posReviewComment").val();
    // alert(review);
    if (name === "") {
      alert("Enter Name to Continue! Try again!");
      $("#posNameComment").focus();
      // $("#faultReset").click();
    }
    else if (review === "") {
      alert("Cannot Have Empty Review. Try again!");
      $("#posReviewComment").focus();
      // $("#faultReset").click();
    } else {

      $(".revWrite").prepend("<div class=\"card m-1\">" + "<div class=\"content\">"
        + "<div class=\"title my-1\">" + name + "</div>" +
        "<div class=\"card-title\">" + title + "</div>" + "<p class=\"limit\">" + review + "</p>" + "</div>" + "</div>");
      $("#posReset").click();
    }
  });
});
//rich cute review
$(document).ready(function () {
  $("#richButton").click(function () {
    $("#richReview").show();
    $("#happyReview").hide();
    $("#posReview").hide();
    $("#monkReview").hide();
    $("#richNameComment").focus();
  })
  $("#richReset").click(function () {
    $("#richReview").hide();
  })
  $("#richSubmit").click(function (event) {
    event.preventDefault();

    var title = $(".richTitle").html();
    // alert(title);
    var name = $("#richNameComment").val();
    // alert(name);
    var review = $("#richReviewComment").val();
    // alert(review);
    if (name === "") {
      alert("Enter Name to Continue! Try again!");
      $("#richNameComment").focus();
      // $("#tweetReset").click();
    }
    else if (review === "") {
      alert("Cannot Have Empty Review. Try again!");
      $("#richReviewComment").focus();
      // $("#tweetReset").click();
    } else {

      $(".revWrite").prepend("<div class=\"card m-1\">" + "<div class=\"content\">"
        + "<div class=\"title my-1\">" + name + "</div>" +
        "<div class=\"card-title\">" + title + "</div>" + "<p class=\"limit\">" + review + "</p>" + "</div>" + "</div>");
      $("#richReset").click();
    }
  });
});