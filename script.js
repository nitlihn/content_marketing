/* Start Preloader */
setTimeout(function () {
    $('.loader-bg').fadeToggle();
}, 1000);
/* End Menu & Preloader */


/* Start Menu & Animation */
$(function () {
    $('.hamburger-menu').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });

    AOS.init({
        easing: 'ease',
        duration: 1000
    });
});
/* End Menu & Animation */

/* Start Instagram Deed  */
(function ($) {
    $(window).on('load', function () {
        $.instagramFeed({
            'username': 'My_Bamboo_',
            'container': "#my-instagram-feed",
            'display_profile': false,
            'display_biography': false,
            'display_gallery': true,
            'callback': null,
            'styling': true,
            'items': 12,
            'items_per_row': 6,
            'margin': 0.25
        });
    });
})(jQuery);
/* End Instagram Feed */