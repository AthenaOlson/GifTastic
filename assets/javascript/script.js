
$(document).ready(function() {

console.log("hello!")

    $("#tvButtons").on("click", "button", function() {

        // Grabbing and storing the tv-show property value from the button
        var show = $(this).attr("data-show");
        
        // Constructing a queryURL using the name of TV show
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          show + "&api_key=pVWxdkSpg4eEVIfLmja5OQJFOnCgAYKN&limit=10";
        console.log(queryURL);
  
        // Performing an AJAX request with the queryURL
        $.ajax({
          url: queryURL,
          method: "GET"
        })

        .then(function(response) {

            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var tvDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var tvImage = $("<img>");
                tvImage.attr("src", results[i].images.fixed_height_still.url);
                tvDiv.append(p);
                tvDiv.append(tvImage);
                $("#gifs-appear-here").prepend(tvDiv);
                console.log(response.data);
            }
        });
    });

    $("#add-show").on("click", function(event) {
        // get the name of the tv show that the user typed. construct a button with text. add the button to his friends!
        event.preventDefault()
        var input_value = $("#show-input").val();
        console.log($("#show-input").val());
        var button = $("<button>");
        button.text(input_value);
        button.attr("data-show", input_value);
        $("#tvButtons").append(button);
        $("#show-input").val("");   
    })

    $(document).on("click", "img", function(){

        var src = $(this).attr("src");
         if($(this).hasClass('playing')){
            //stop
            $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
            $(this).removeClass('playing');
         } else {
           //play
           $(this).addClass('playing');
           $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
         }
      });
});
    
        
