$(document).ready(function() {
    $("#square-1").click(() => {
        $("#home").toggleClass("dark-mode")
    })
    $("#jeith").click(() => {
        $("#home").toggleClass("dark-mode")
    })
    setTimeout(() => {
        $("h1").addClass("reveal")
    }, 500);
});