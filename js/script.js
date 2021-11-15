//business logic







//userInterface 
$(document).ready(function(){
    $(".button").click(function(){
        $(".form").toggle();
    })

$(".form").submit(function(){

let age = parseInt($("#age").val())
    if (age < 18) {
        window.location.href="information.html"
    } else {
        window.location.href="vote.html"
    }
});
});
