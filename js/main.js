$(document).ready(function() {

    // closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });

    // establish a frame rate, to be used in the setInterval() function
    //$(".showcase__slides li:eq(0)").show();

    var showcaseCount = 0;

    function changeSlide(slideNum) {
        console.log("hello");
        // reset, turn all off
        $(".showcase__slides li").hide();
        $(".showcase__slides li h1").css({
            "top": "-20px",
            "opacity": 0
        });
        $(".showcase__slides li h3").css({
            "bottom": "-30px",
            "opacity": 0
        });
        // show correct index
        //$(".showcase__slides li:eq(" + slideNum + ")").show().animate({opacity: '.9'}, 500).animate({opacity: '.7'}, 500).animate({opacity: '.9'}, 500);
        // $(".showcase__slides li:eq(" + slideNum + ")").animate({opacity: '.5'});
        $(".showcase__slides li:eq(" + slideNum + ")").fadeIn("slow", function() {
            $(this).find("h1").animate({
                "top": "0px",
                "opacity": 1.0
            });
            $(this).find("h3").delay(100).animate({
                "bottom": "0px",
                "opacity": 1.0
            });
        });
    }

    function showcaseIntervalCount() {
        if (showcaseCount >= 2) {
            showcaseCount = 0;
        } else {
            showcaseCount++;
        }
        changeSlide(showcaseCount);
    } // showcaseIntervalCount

    var interval = setInterval(showcaseIntervalCount, 3500);
    changeSlide(showcaseCount);

    var args = {
        reset: true,
        origin: 'bottom',
        duration: 500,
        delay: 100,
    };
    window.sr = ScrollReveal({
        reset: true,
        origin: 'bottom',
        duration: 1000,
        delay: 100,
        scale: .9,
        opacity: 1.0,
        distance: '0px',
    });
    sr.reveal('#devCode', args);
    sr.reveal('.portfolio-item', args);

    // about page above & portfolio below //


}); // ready method end