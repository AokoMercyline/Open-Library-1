$(document).ready(function(){
    $(".btn").click(function(){
        $("#myForm").toggle("3000")
    });
    
    
   $(document).ready(function(){
    $("#myform").submit(function(){
     let username=$("#mce-NAME").val();
     let message= $("#E-massage").val();
    //  let email=$("#email").val();
     alert(username + " THANK YOU FOR CONTACTING US.WE HAVE GLADLY RECIEVED YOUR MESSAGE ");

     $("#myForm").click(function(){
        $("#myForm").toggle("3000")
    });
    });
});

});
