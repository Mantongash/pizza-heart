$(document).ready(function() {
  // ### Hover effects on pizzas

  // Chicago Pizza hover
  $(".pizza-chicago").hover(
    function() {
      $(".btn-chicago").show(500);
    },
    function() {
      $(".btn-chicago").hide(500);
    }
  );

  // Marinara Pizza hover
  $(".pizza-marinara").hover(
    function() {
      $(".btn-marinara").show(500);
    },
    function() {
      $(".btn-marinara").hide(500);
    }
  );

  // Sicilian Pizza hover
  $(".pizza-sicilian").hover(
    function() {
      $(".btn-sicilian").show(500);
    },
    function() {
      $(".btn-sicilian").hide(500);
    }
  );

  // ### Display options on click ###
  //Chicago button
  $(".btn-chicago").click(function(event) {
    event.preventDefault();
    $(".chicago-options").show(500);
  });

  //Marinara button
  $(".btn-marinara").click(function(event) {
    event.preventDefault();
    $(".marinara-options").show(500);
  });

  //Sicilian
  $(".btn-sicilian").click(function(event) {
    event.preventDefault();
    $(".sicilian-options").show(500);
  });

  //Delivery checkbox
  if ($("#delivery").prop("checked")) {
    $("#delivery-input").show();
  }
});
