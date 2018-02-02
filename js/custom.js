(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
        console.log("in page scroll");
    });
console.log("in scroll");
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.section-a', {
        duration: 2000,
        distance: '0px'
    }, 200);
    sr.reveal('.section-b', {
        duration: 2000,
        delay: 200
    });
    sr.reveal('.section-c', {
        duration: 2000,
        distance: '0px'
    }, 300);
    sr.reveal('.section-d', {
        duration: 2000,
        distance: '0px'
    }, 200);

   
})(jQuery); // End of use strict
