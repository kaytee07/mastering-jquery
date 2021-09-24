$(document).ready(function(){

let el = document.getElementById("text");


$("#text").html("This is now my text");
$(".my-input").val("New Input Val");

$("#go-button").on("mouseleave",function(){
    alert("yo gee")
})

$('[data-trigger="dropdown"]').on('mouseenter', function(){
  let submenu = $(this).parent().find('.profile-submenu')
  submenu.fadeIn(300)

  $('.profile-menu').on('mouseleave', function(){
      submenu.fadeOut(300);
  })
    
})

});
