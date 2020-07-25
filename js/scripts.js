$(document).ready(function () {
  $("form#contacts").submit(function(event) {
    var names= $("input#name").val();
    var email= $("input#email").val();
    var message = $("input#message").val();
    alert("Dear " +names+ ",email address "+ email+ ",your message has been received. Thank you for contacting us");
    document.getElementById("form#contacts").val("");
    event.preventDefault();
    
  });

  $(function(){
    var ports = ["port1","port2","port3","port4","port5","port6","port7","port8"]
    ports.forEach(function(port){
      $("#"+port).hover(function (){
        $(this).width(1.05*$(this).width());
        $(this).height(1.05*$(this).height());
      },
      function () {
        $(this).width((100/105)*$(this).width());
        $(this).height((100/105)*$(this).height());
        event.preventDefault();
      });
      });
    }
    );

  $("#design").click(function(){
    $(".design-show").toggle();
    $(".design-hide").toggle();
  })

  $("#development").click(function(){
    $(".dev-show").toggle();
    $(".dev-hide").toggle();
  })

  $("#prodman").click(function(){
    $(".prod-show").toggle();
    $(".prod-hide").toggle();
  })

  $("#mouse").click(function(){
    $(".mouse-show").toggle();
    $(".mouse-hide").toggle();
  })
  
})

