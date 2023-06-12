(function ($) {
    "use strict";
    $(document).ready(function () {
        /*
       Preeloader
       ============================*/
        $(window).on("load", function () {
            $("#preloader").fadeOut();
            $("#preloader-status").delay(200).fadeOut("slow");
            $("body").delay(200).css({ "overflow-x": "hidden" });
        });

        /*
       Jquery Mobile Menu
       ============================*/
        $("#main-menu").meanmenu({
            meanScreenWidth: "991",
            meanMenuContainer: ".mobile-nav-menu",
        });

        /*
        Stikey Js
        ============================*/
        var nav = $(".header-sec.sticky-header");
        var scrolled = false;
        $(window).scroll(function () {
            if (100 < $(window).scrollTop() && !scrolled) {
                nav
                    .addClass("sticky_menu animated fadeIn")
                    .animate({ "margin-top": "0px" });
                scrolled = true;
            }
            if (100 > $(window).scrollTop() && scrolled) {
                nav.removeClass("sticky_menu animated fadeIn").css("margin-top", "0px");
                scrolled = false;
            }
        });



        /*
        Jquery Tab
        ============================*/
        $('.nav-tab li:first-child').addClass('active');
        $('.tab-content').hide();
        $('.tab-content:first').show();
        $('.nav-tab li').on('click', function () {
            $('.nav-tab li').removeClass('active');
            $(this).addClass('active');
            $('.tab-content').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });


        /*
        Jquery Accordion
        ============================*/
        $(function () {
            $('.accordion-list-item .accordion-item-body').css("display", "none");
            $('.accordion-list-item.open .accordion-item-body').css("display", "block");
            $('.accordion-list-item').on('click', function () {
                $(this).toggleClass(' open ');
                $(this).siblings().removeClass(' open ');
                $('.accordion-item-body').stop().slideUp();
                $('.open .accordion-item-body').stop().slideDown();
                return false;
            });
        });

        /*
        Skill Progress Bar Js
        ============================*/
        $('.skill-progressbar').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
            if (isInView) {
                jQuery('.progress-inner').each(function () {
                    jQuery(this).find('.progress-content').animate({
                        width: jQuery(this).attr('data-percentage')
                    }, 2000);

                    jQuery(this).find('.progress-number-count').animate(
                        { left: jQuery(this).attr('data-percentage') },
                        {
                            duration: 2000,
                            step: function (now, fx) {
                                var data = Math.round(now);
                                jQuery(this).find('.progress-percent').html(data + '%');
                            }
                        });
                });

            }
        });
        /*
       Slider
       ============================*/
        $(".slider-wrapper").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='slider-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='slider-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });

        /*
       Portfolio Card Slider service page
       ============================*/
        $(".portfolio_card_wrapper").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='info-card-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='info-card-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });


        $('.prev_btn_custom').on('click', function () {
            $('.prev-btn').trigger('click');
        });
        $('.next_btn_custom').on('click', function () {
            $('.next-btn').trigger('click');
        });

        /*
       Team Slider
       ============================*/
        $(".about_us_team_member").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
             prevArrow:
                "<button type='button' class='team-card-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='team-card-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        /*
       Testimonial Slider
       ============================*/
        $("#testimonial_two").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                    },
                }
            ],
        });

        $('#trigger_testimonial_prev').on('click', function () {
            $('.testimonial-slider-wrapper .prev-btn').trigger('click');
        });
        $('#trigger_testimonial_next').on('click', function () {
            $('.testimonial-slider-wrapper .next-btn').trigger('click');
        });

        // project-page
        $(".project-slider-wrapper").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            centerMode:true,
            centerPadding:'50px',

            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // Home-one case-studies
        $(".home-one-case-studies-slider").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='case-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='case-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // Home-one Review
        $(".home-one-review-slider").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='review-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='review-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // Home-one Team-member slider
        $(".home-one-team-member").slick({
            slidesToShow: 4,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
             prevArrow:
                "<button type='button' class='home-one-team-arrow-prev'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='home-one-team-arrow-next'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

         $('#home-one-team-prev').on('click', function () {
            $('.home-one-team-arrow-prev').trigger('click');
            console.log("kdk")
        });
        $('#home-one-team-next').on('click', function () {
            $('.home-one-team-arrow-next').trigger('click');
        });

        // client-logo slider home-two
        $(".home-two-client-logo-slider").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,

            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: false,
                        slidesToShow: 1,
                    },
                },
            ],
        });


        $(".home-two-process-slider").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='process-arrow-btn prev-btn'><i class='icon-arrow-left-2'></i></button>",
            nextArrow:
                "<button type='button' class='process-arrow-btn next-btn'><i class='icon-arrow-right-2'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                        arrows: false,
                    },
                },
            ],
        });

        $(".home-two-testimonial-card-slider").slick({
            slidesToShow: 1,
            infinite: false,
            autoplay: false,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: false,
            dots: true,
            speed: 1500,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: false,
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // service-slider home-three
        $(".home-three-service-slider").slick({
            slidesToShow: 4,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='home-three-service-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='home-three-service-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });


        $('.prev_btn_custom').on('click', function () {
            $('.prev-btn').trigger('click');
        });
        $('.next_btn_custom').on('click', function () {
            $('.next-btn').trigger('click');
        });



        /*
       Post Gallery Slider
       ============================*/
        $(".post-gallery").slick({
            slidesToShow: 1,
            infinite: false,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 300,
            prevArrow:
                "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
        });

        /*
       Client Logo Slider
       ============================*/
        $(".client-logo-slider-wrapper").slick({
            slidesToShow: 5,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        /*
       Jquery Nice Select Js
       ============================*/
        $('select').niceSelect();
        
        /*
       scrollUp
       ============================*/
        $.scrollUp({
            scrollText: '<i class="fa-light fa-arrow-up-long"></i>',
            easingType: "linear",
            scrollSpeed: 900,
            animation: "fade",
        });

        /*
        ounter Js
        ============================*/
        $(".counter").counterUp({
            delay: 10,
            time: 1000,
        });

        /*
       Magnific Popup
       ============================*/
        $(".video-play").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });

        $('.isotope-grid').isotope({
            // options
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows'
        });
       var $grid = $('.isotope-grid').isotope({
        itemSelector: '.isotope-item',
            layoutMode: 'fitRows'
        // options
        });
        // filter items on button click
        $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        });
    });
})(jQuery);
