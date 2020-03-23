window.addEventListener("load", sidenVises);

function sidenVises() {
    // Queryselector pÃ¥ burger menu
    // Kalder function show menu
    document.querySelector(".menu_container").addEventListener("click", openNav);
}
(function ($) {
    $(window).on('load', function () {
        $.instagramFeed({
            'username': 'nitiyalihn',
            'container': "#instagram-feed1",
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

/* Set the width of the side navigation to 250px */
function openNav() {
    console.log("yo");
    document.querySelector("#mySidenav").style.height = "100%";
    document.querySelector("#kryds").addEventListener("click", closeNav)
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.querySelector("#mySidenav").style.height = "0";
    document.querySelector(".menu_container").addEventListener("click", openNav)
}
