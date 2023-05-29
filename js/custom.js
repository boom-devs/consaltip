(function ($) {
    "use strict";
    $(document).ready(function () {
        /*
       Preeloader
       ============================*/
        $(window).on("load", function () {
            $("#preloader").fadeOut();
            $("#preloader-status").delay(200).fadeOut("slow");
            $("body").delay(200).css({"overflow-x": "hidden"});
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
                    .animate({"margin-top": "0px"});
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
        $('.nav-tab li').on('click', function(){
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
        $(function() {
            $('.accordion-list-item .accordion-item-body').css("display","none");
            $('.accordion-list-item.open .accordion-item-body').css("display","block");
            $('.accordion-list-item').on('click', function(){
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
        $('.skill-progressbar').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
            if (isInView) {
                jQuery('.progress-inner').each(function() {
                    jQuery(this).find('.progress-content').animate({
                        width:jQuery(this).attr('data-percentage')
                    },2000);

                    jQuery(this).find('.progress-number-count').animate(
                        {left:jQuery(this).attr('data-percentage')},
                        {
                            duration: 2000,
                            step: function(now, fx) {
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
            dots: true,
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
       Info Card Slider
       ============================*/
        $("#info_card_slider_wrapper").slick({
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

        /*
       Team Slider
       ============================*/
        $("#team_slider_wrapper").slick({
            slidesToShow: 3,
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
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
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


        /*
       Testimonial Slider
       ============================*/
        $("#testimonial_two").slick({
            slidesToShow: 2,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
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

        $('#trigger_testimonial_prev').on('click', function() {
            $('.testimonial-slider-wrapper .prev-btn').trigger('click');
        });
        $('#trigger_testimonial_next').on('click', function() {
            $('.testimonial-slider-wrapper .next-btn').trigger('click');
        });

        $("#testimonial_three").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
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
    });
})(jQuery);
