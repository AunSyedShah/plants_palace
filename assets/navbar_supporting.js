$(document).ready(function() {
    $(function () {
        $("#nav-placeholder").load("navbar.html");
    });
    // Add a smooth scrolling effect to anchor links
    $(".nav-link").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });

    // Add a hover effect to navbar links
    $(".nav-link").hover(function() {
        $(this).css("color", "#1e5f1e");
    }, function() {
        $(this).css("color", "#fff");
    });
});
