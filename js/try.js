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
  
      var title=$(".thiefTitle").html();
      // alert(title);
      var name=$("#thiefNameComment").val();
      // alert(name);
      var review=$("#thiefReviewComment").val();
      // alert(review);
      if (name==="") {
        alert("Enter Name to Continue! Try again!");
        $("#thiefNameComment").focus();
        // $("#thiefReset").click();
      }
      else if (review==="") {
        alert("Cannot Have Empty Review. Try again!");
        $("#thiefReviewComment").focus();
        // $("#thiefReset").click();
      }else{
  
      $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                              +"<div class=\"title my-1\">"+name+"</div>"+
                              "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
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
  
      var title=$(".thugTitle").html();
      // alert(title);
      var name=$("#thugNameComment").val();
      // alert(name);
      var review=$("#thugReviewComment").val();
      // alert(review);
      if (name==="") {
        alert("Enter Name to Continue! Try again!");
        $("#thugNameComment").focus();
        // $("#thugReset").click();
      }
      else if (review==="") {
        alert("Cannot Have Empty Review. Try again!");
        $("#thugReviewComment").focus();
        // $("#thugReset").click();
      }else{
  
      $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                              +"<div class=\"title my-1\">"+name+"</div>"+
                              "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
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
  
      var title=$(".faultTitle").html();
      // alert(title);
      var name=$("#faultNameComment").val();
      // alert(name);
      var review=$("#faultReviewComment").val();
      // alert(review);
      if (name==="") {
        alert("Enter Name to Continue! Try again!");
        $("#faultNameComment").focus();
        // $("#faultReset").click();
      }
      else if (review==="") {
        alert("Cannot Have Empty Review. Try again!");
        $("#faultReviewComment").focus();
        // $("#faultReset").click();
      }else{
  
      $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                              +"<div class=\"title my-1\">"+name+"</div>"+
                              "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
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
  
      var title=$(".tweetTitle").html();
      // alert(title);
      var name=$("#tweetNameComment").val();
      // alert(name);
      var review=$("#tweetReviewComment").val();
      // alert(review);
      if (name==="") {
        alert("Enter Name to Continue! Try again!");
        $("#tweetNameComment").focus();
        // $("#tweetReset").click();
      }
      else if (review==="") {
        alert("Cannot Have Empty Review. Try again!");
        $("#tweetReviewComment").focus();
        // $("#tweetReset").click();
      }else{
  
      $(".revWrite").prepend("<div class=\"card m-1\">"+"<div class=\"content\">"
                              +"<div class=\"title my-1\">"+name+"</div>"+
                              "<div class=\"card-title\">"+title+"</div>"+"<p class=\"limit\">"+review+"</p>"+"</div>"+"</div>");
      $("#tweetReset").click();
      }
    });
  });