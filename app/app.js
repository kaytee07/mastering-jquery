$(document).ready(function(){

let el = document.getElementById("text");

console.log("EL in vanilaa js", el);
console.log("EL in jquery", $(el)[0]);

$("#text").html("This is now my text");
$(".my-input").val("New Input Val");

$("#go-button").on("mouseleave",function(){
    alert("yo gee")
})

});
