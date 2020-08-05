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
  
      var title=$(".happyTitle").html();
      // alert(title);
      var name=$("#happyNameComment").val();
      // alert(name);
      var review=$("#happyReviewComment").val();
      // alert(review);
      if (name==="") {
        alert("Enter Name to Continue! Try again!");
        $("#happyNameComment").focus();
        // $("#thiefReset").click();
      }
      else if (review==="") {
        alert("Cannot Have Empty Review. Try again!");
        $("#happyReviewComment").focus();
        // $("#thiefReset").click();
      }else{
  
      $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                              +"<div class=\"title my-1\">"+name+"</div>"+
                              "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
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
  
      var title=$(".monkTitle").html();
      // alert(title);
      var name=$("#monkNameComment").val();
      // alert(name);
      var review=$("#monkReviewComment").val();
      // alert(review);
      if (name==="") {
        alert("Enter Name to Continue! Try again!");
        $("#monkNameComment").focus();
        // $("#thugReset").click();
      }
      else if (review==="") {
        alert("Cannot Have Empty Review. Try again!");
        $("#monkReviewComment").focus();
        // $("#thugReset").click();
      }else{
  
      $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                              +"<div class=\"title my-1\">"+name+"</div>"+
                              "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
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
  
      var title=$(".posTitle").html();
      // alert(title);
      var name=$("#posNameComment").val();
      // alert(name);
      var review=$("#posReviewComment").val();
      // alert(review);
      if (name==="") {
        alert("Enter Name to Continue! Try again!");
        $("#posNameComment").focus();
        // $("#faultReset").click();
      }
      else if (review==="") {
        alert("Cannot Have Empty Review. Try again!");
        $("#posReviewComment").focus();
        // $("#faultReset").click();
      }else{
  
      $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                              +"<div class=\"title my-1\">"+name+"</div>"+
                              "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
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
  
      var title=$(".richTitle").html();
      // alert(title);
      var name=$("#richNameComment").val();
      // alert(name);
      var review=$("#richReviewComment").val();
      // alert(review);
      if (name==="") {
        alert("Enter Name to Continue! Try again!");
        $("#richNameComment").focus();
        // $("#tweetReset").click();
      }
      else if (review==="") {
        alert("Cannot Have Empty Review. Try again!");
        $("#richReviewComment").focus();
        // $("#tweetReset").click();
      }else{
  
      $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                              +"<div class=\"title my-1\">"+name+"</div>"+
                              "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
      $("#richReset").click();
      }
    });
  });