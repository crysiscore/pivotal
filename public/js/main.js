(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs when the library is available
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Active state for Microsoft-like subnavigation
    var subnavLinks = document.querySelectorAll('.ms-subnav a[href^="#"]');
    if (subnavLinks.length > 0) {
        var subnavTargets = Array.prototype.map.call(subnavLinks, function (link) {
            return {
                link: link,
                section: document.querySelector(link.getAttribute('href'))
            };
        }).filter(function (item) {
            return item.section;
        });

        var setActiveSubnav = function (activeLink) {
            subnavLinks.forEach(function (link) {
                link.classList.toggle('is-active', link === activeLink);
            });
        };

        var updateActiveSubnav = function () {
            var current = subnavTargets[0];
            subnavTargets.forEach(function (item) {
                if (item.section.getBoundingClientRect().top < 180) {
                    current = item;
                }
            });
            if (current) {
                setActiveSubnav(current.link);
            }
        };

        subnavLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                setActiveSubnav(link);
            });
        });

        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var current = subnavTargets.find(function (item) {
                            return item.section === entry.target;
                        });
                        if (current) {
                            setActiveSubnav(current.link);
                        }
                    }
                });
            }, {
                rootMargin: '-35% 0px -55% 0px',
                threshold: 0
            });

            subnavTargets.forEach(function (item) {
                observer.observe(item.section);
            });
        }

        window.addEventListener('scroll', updateActiveSubnav);
        window.addEventListener('load', updateActiveSubnav);
        setTimeout(updateActiveSubnav, 150);
    }


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Feedback carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });



})(jQuery);
