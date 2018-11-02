
// BELOW CODE IS CRITICAL. IT HANDLES HOW FORM DATA IS SENT TO OUR SERVER -->

// In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
// In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
$(document).ready(function () {
  $(".submit").on("click", function (event) {
    event.preventDefault();
    this.blur(); // remove focus
    
    // Grab the form elements
    var newFriend = {
      customerName: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
      scores: {
        bigThinker: $("#bigThinker").val().trim(),
        creative: $("#creative").val().trim(),
        emotions: $("#emotions").val().trim(),
        meat: $("#meat").val().trim(),
        spiritual: $("#spiritual").val().trim(),
        lgroups: $("#lgroups").val().trim(),
        sgroups: $("#sgroups").val().trim(),
        books: $("#books").val().trim(),
        movies: $("#movies").val().trim(),
        stalwartness: $("#stalwartness").val().trim(),
      }
    };

    console.log(newFriend);

    $.modal.defaults = {
        // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
    };
    $.post("/api/friends", newFriend,
      function (data) {
        if (data) {
          $("#friendName").text(data.name);
          $("#friendPhoto").attr("src", data.photo);
          $("#friendModal").modal("toggle", {
            closeExisting: true,    // Close existing modals. Set this to false if you need to stack multiple modal instances.
            escapeClose: true,      // Allows the user to close the modal by pressing `ESC`
            clickClose: true,       // Allows the user to close the modal by clicking the overlay
            closeText: 'Close',     // Text content for the close <a> tag.
            closeClass: '',         // Add additional class(es) to the close <a> tag.
            showClose: true,        // Shows a (X) icon/link in the top-right corner
            modalClass: "modal",    // CSS class added to the element being displayed in the modal.
            blockerClass: "modal",  // CSS class added to the overlay (blocker).
          
            // HTML appended to the default spinner during AJAX requests.
            spinnerHtml: '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',
          
            showSpinner: true,      // Enable/disable the default spinner during AJAX requests.
            fadeDuration: null,     // Number of milliseconds the fade transition takes (null means no transition)
            fadeDelay: 1.0  
          });
        }
        else {
          console.log("Sorry no match!");
        }

        // Clear the form when submitting
        $("#name").val(""),
          $("#photo").val(""),
          $("#bigThinker").val(""),
          $("#creative").val(""),
          $("#emotions").val(""),
          $("#meat").val(""),
          $("#spiritual").val(""),
          $("#lgroups").val(""),
          $("#sgroups").val(""),
          $("#books").val(""),
          $("#movies").val(""),
          $("#stalwartness").val("")
      });

  });
});
