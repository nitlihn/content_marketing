/* Start Preloader */
/* setTimeout(function () {
    $('.loader-bg').fadeToggle();
}, 1000); */
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
            'container': ".instagram-feed",
            'display_profile': true,
            'display_biography': true,
            'display_gallery': true,
            'callback': null,
            'styling': true,
            'items': 8,
            'items_per_row': 4,
            'margin': 1
        });
    });
})(jQuery);
/* End Instagram Feed */
