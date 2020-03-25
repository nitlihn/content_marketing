/* Start Preloader */
/* setTimeout(function () {
    $('.loader-bg').fadeToggle();
}, 1000); */
/* End Menu & Preloader */

/* Start Menu & Animation */
$(function() {
  $(".hamburger-menu").on("click", function() {
    $(".toggle").toggleClass("open");
    $(".nav-list").toggleClass("open");
  });

  AOS.init({
    easing: "ease",
    duration: 1000
  });
});
/* End Menu & Animation */

/* Start Instagram Deed  */
(function($) {
  $(window).on("load", function() {
    $.instagramFeed({
      username: "My_Bamboo_",
      container: ".instagram-feed",
      display_profile: true,
      display_biography: true,
      display_gallery: true,
      callback: null,
      styling: true,
      items: 9,
      items_per_row: 3,
      margin: 1
    });
  });
})(jQuery);
/* End Instagram Feed */

/* Start Smooth Scroll */
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
/* End Smooth Scroll */
