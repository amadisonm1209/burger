$(function(){
    $(".change-eaten").on("click", function (event){
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");

        var newEatenState = {
            eaten: newEaten
        };

        //send PUT req
        $.ajax ("/api/burgers" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function(){
                console.log ("Changed burger status to", newEaten);
                //reload page to get new list
                location.reload();
            }
        )
    })
});

$(".create-form").on("submit", function(event){
    event.preventDefault();

    var newBurger = {
        name: $("#burger-name").val().trim(),
    };

    //POST req
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function (){
            console.log("That sounds like a yummy burger you just created");
            //reload page
            location.reload();
        }
    )
})