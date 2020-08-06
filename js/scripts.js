$(document).ready(function(){

    $("#mailChimpSubmit").click(function(){
      var name = document.getElementById("MERGE1").value;
      var textarea = document.getElementById("MERGE2").value;
  
      if ((textarea.includes("!")==true)) {
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      } 
      else if ((textarea.includes("/")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes("?")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes("+")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes("(")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes(")")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes("[")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes("]")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes("{")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      } 
      else if ((textarea.includes("}")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes('\\')==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes("$")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes("%")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes("$")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes("#")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes("@")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes("\"")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes(":")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double qutes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes(";")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes(">")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else if ((textarea.includes("<")==true)){
        alert("Message cannot have special characters such as /?+&%$#@!\/:;><)(}{][ or double quotes. Please Try again.");
        event.preventDefault();
      }
      else {
        alert("Thank you " +name+ " for reaching out to Us"+ "! We have received your Message.");
        $("#mc-embedded-subscribe-form").reset();
        $("#mailChimpSubmit").focus();
      }
    });
  
  });