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

  // Marinara Pizza hover
  $(".pizza-sicilian").hover(
    function() {
      $(".btn-sicilian").show(500);
    },
    function() {
      $(".btn-sicilian").hide(500);
    }
  );
  
});
