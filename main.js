$(document).ready(function(){
    $("#noms-pic").hide();
    $("#noms-dir").hide();
    $("#noms-acto").hide();
    $("#noms-actre").hide();
    $("#best-pic").click(function(){
        $("#noms-pic").toggle();
    });
    $("#best-dir").click(function(){
        $("#noms-dir").toggle();
    });
    $("#best-acto").click(function(){
        $("#noms-acto").toggle();
    });
    $("#best-actre").click(function(){
        $("#noms-actre").toggle();
    });
});

$('#next_btn').click(function(e){
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "Page1.html",
        data: { },
    });
});