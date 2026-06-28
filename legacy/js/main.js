/*-----------------------------------------------------------------------------------
    Template Name: Cardia - Cardiologist and Medical HTML Template
    Author: ThemeAlpine 
    Author URI: https://themeforest.net/user/ThemeAlpine
    Version: 1.0

    =============================
    Table of Contents:
    ============================

    - Preloader
    - Mouse Cursor Animation
    - Smooth scroll using lenis
    - GSAP and ScrollTrigger Registration
    - Back To Top
    - AOS Init
    - GLightbox
    - Gsap text animations
    - GSAP text animation style one
    - GSAP text animation style two
    - Marquee left
    - Marquee Right
    - Odometer
    - Faq accordion
    - Global tab
    - Testimonial one slider
    - Testimonial two slider
    - Testimonial three slider
    - Partner one slider
    - Case study slider three
    - Service two images - active toggle
    - Progress bar
-----------------------------------------------------------------------------------*/

(function ($) {
    'use strict';

    /*===== - Preloader  =====*/
    $(window).on("load", function (event) {
        setTimeout(function () {
            $(".preloader").fadeToggle();
        }, 200);
    });

    /*===== - Mouse Cursor Animation  =====*/
    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n,
                        i = 0,
                        o = !1;
                    window.onmousemove = function (s) {
                        if (!o) {
                            t.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        }
                        e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        n = s.clientY;
                        i = s.clientX;
                    };
                    $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
                        e.classList.add("cursor-hover");
                        t.classList.add("cursor-hover");
                    });
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
                        if (
                            !(
                                $(this).is("a", "button") &&
                                $(this).closest(".cursor-pointer").length
                            )
                        ) {
                            e.classList.remove("cursor-hover");
                            t.classList.remove("cursor-hover");
                        }
                    });
                    e.style.visibility = "visible";
                    t.style.visibility = "visible";
                }
            }
        }
        itCursor();
    }

    /*==== - Smooth scroll using lenis =====*/
    if (typeof Lenis !== "undefined") {
        const lenis = new Lenis({
            duration: 1.2,
            smooth: true,
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothTouch: false,
            touchMultiplier: 2,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    };


    //*===== - GSAP and ScrollTrigger Registration =====*/
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }
    if (typeof SplitText !== "undefined") {
        gsap.registerPlugin(SplitText);
    }

    /*===== - Back To Top =====*/
    if ($(".cloudflow-progress-circle path").length && !window.clinifyxProgressInitialized) {
        window.clinifyxProgressInitialized = true;

        var $progressPath = $(".cloudflow-progress-circle path");
        var pathLength = $progressPath[0].getTotalLength();

        $progressPath.css({
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
        });

        $(window).on("scroll.clinifyxProgress", function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength) / height;
            $progressPath.css("strokeDashoffset", progress);

            if (scroll > 200) {
                $(".cloudflow-progress-wrap").addClass("active");
            } else {
                $(".cloudflow-progress-wrap").removeClass("active");
            }
        });

        $(".cloudflow-progress-wrap").on("click.clinifyxProgress", function (e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 600);
        });
    }

    /*====== - AOS Init ======*/
    $(window).on('load', function () {
        AOS.init({
            once: true,
            offset: 120,
            duration: 600,
            easing: 'ease-out-cubic',
        });
    });

    /*===== - GLightbox =====*/
    if (typeof GLightbox !== "undefined") {
        const lightbox = GLightbox({
            selector: '.ta-glightbox',
            videoAutoplay: false
        });
    };

    /* ===== - Gsap text animations  =====*/
    function initSplitTextAnimations() {

        /*====== - GSAP text animation style one ======*/
        if ($('.txt-anim-1').length) {
            let staggerAmount = 0.05,
                delayValue = 0.5,
                animatedTextElements = document.querySelectorAll('.txt-anim-1');

            animatedTextElements.forEach((element) => {
                let split = new SplitText(element, { type: "chars, words" });

                gsap.from(split.words, {
                    duration: 1,
                    delay: delayValue,
                    x: 20,
                    autoAlpha: 0,
                    stagger: staggerAmount,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%"
                    }
                });
            });
        }

        /*====== - GSAP text animation style two ======*/
        if ($('.txt-anim-2').length) {
            document.querySelectorAll('.txt-anim-2').forEach((element) => {

                if (element.animation) {
                    element.animation.progress(1).kill();
                    element.split.revert();
                }

                element.split = new SplitText(element, {
                    type: "lines,words,chars",
                    linesClass: "split-line",
                });

                gsap.set(element, { perspective: 400 });
                gsap.set(element.split.chars, { opacity: 0, x: 50 });

                element.animation = gsap.to(element.split.chars, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%"
                    },
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "back.out(1.7)",
                    stagger: 0.02
                });
            });
        }
    }

    document.fonts.ready.then(() => {
        initSplitTextAnimations();
    });


    /*===== - Marquee left =====*/
    if ($('.marquee-left').length > 0) {
        $('.marquee-left').marquee({
            duration: 30000,
            gap: 20,
            direction: 'left',
            duplicated: true,
            startVisible: true
        });
    };

    /*===== - Marquee Right =====*/
    if ($('.marquee-right').length > 0) {
        $('.marquee-right').marquee({
            duration: 30000,
            gap: 20,
            direction: 'right',
            duplicated: true,
            startVisible: true
        });
    };

    /*===== - Odometer =======*/
    if ($(".odometer").length > 0) {
        $('.odometer').appear();

        $(document.body).on('appear', '.odometer', function () {
            var $this = $(this); // only current odometer
            var countNumber = $this.attr("data-count");

            $this.html(countNumber);
        });
    }

    /*===== - Faq accordion ======*/
    $('.faq-item .heading').on('click', function () {
        let parent = $(this).parent();

        if (parent.hasClass('active')) {
            // Close the current item
            parent.removeClass('active');
            parent.find('.content').stop(true, true).animate(
                { height: 0, opacity: 0 },
                400,
                function () { $(this).css('display', 'none'); }
            );
        } else {
            // Close other items
            $('.faq-item.active').removeClass('active').each(function () {
                $(this).find('.content').stop(true, true).animate(
                    { height: 0, opacity: 0 },
                    400,
                    function () { $(this).css('display', 'none'); }
                );
            });

            // Open current item
            parent.addClass('active');
            let content = parent.find('.content');
            content.stop(true, true).css({ display: 'block', height: 'auto', opacity: 0 });
            let autoHeight = content.outerHeight();
            content.css('height', 0).animate({ height: autoHeight, opacity: 1 }, 400, function () {
                $(this).css('height', 'auto'); // allow dynamic height after animation
            });
        }
    });

    /*==== - Global tab =====*/
    $('.ta-tab-nav li').on('click', function () {
        var $clicked = $(this);
        var $wrapper = $clicked.closest('.ta-tab');

        // Remove active class from nav
        $wrapper.find('.ta-tab-nav li').removeClass('active');
        $clicked.addClass('active');

        var target = $clicked.data('tab');

        // Fade transition for tab panes
        $wrapper.find('.ta-tab-pane.active').stop(true, true).fadeOut(50, function () {
            $(this).removeClass('active');

            // Fade in the clicked tab
            $wrapper.find('#' + target).stop(true, true).fadeIn(50, function () {
                $(this).addClass('active');
            });
        });
    });

    /*==== - Testimonial one slider  =====*/
    if ($('.testiOneSwiper').length > 0) {
        new Swiper(".testiOneSwiper", {
            spaceBetween: 24,
            slidesPerView: 1,
            loop: true,
            speed: 800,
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false,
            // },
        });
    };

    /*==== - Testimonial two slider  =====*/
    if ($('.testimonialTwoSlider').length > 0) {
        new Swiper(".testimonialTwoSlider", {
            spaceBetween: 24,
            slidesPerView: 1,
            loop: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                991: {
                    slidesPerView: 2,
                },
                1199: {
                    slidesPerView: 2,
                },
            },
        });
    };

    /*==== - Testimonial three slider  =====*/
    if ($('.testimonialThreeSlider').length > 0) {
        new Swiper(".testimonialThreeSlider", {
            spaceBetween: 24,
            slidesPerView: 1,
            loop: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                991: {
                    slidesPerView: 2,
                },
                1199: {
                    slidesPerView: 2,
                },
            },
        });
    };

    /*==== - Partner one slider  =====*/
    if ($('.partnerOneSlider').length > 0) {
        new Swiper(".partnerOneSlider", {
            spaceBetween: 0,
            slidesPerView: 2,
            loop: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                575: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 5,
                },
                1199: {
                    slidesPerView: 6,
                },
            },
        });
    };

    /*==== - Case study slider three  =====*/
    if ($('.caseStudySliderThree').length) {
        new Swiper(".caseStudySliderThree", {
            spaceBetween: 24,
            slidesPerView: 1,
            loop: true,
            speed: 800,
            centeredSlides: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                991: {
                    slidesPerView: 3,
                },
            },
        });
    }


    /*==== - Service two images - active toggle  =====*/
    $('.service-two-item').on('mouseenter', function () {
        $('.service-two-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.service-two-item').on('mouseleave', function () {
        $(this).addClass('active');
    });


    /*==== - Progress bar  =====*/
    function initProgressBars(selector = '.progress-item', options = {}) {
        const {
            duration = 1.4,
            ease = 'power3.out',
            start = 'top 80%',
            stagger = 0.15,
        } = options;

        const items = gsap.utils.toArray(selector);

        items.forEach((item, i) => {
            const percent = parseFloat(item.dataset.percent) || 0;
            const fill = item.querySelector('.progress-fill');
            const badge = item.querySelector('.progress-badge');

            // Set badge text dynamically (so it's always in sync with data-percent)
            if (badge) badge.textContent = percent + '%';

            // Counter object for animated number inside badge
            const counter = { val: 0 };

            ScrollTrigger.create({
                trigger: item,
                start,
                once: true,
                onEnter() {
                    const delay = i * stagger;

                    // ── Fill bar ──────────────────────────────
                    gsap.fromTo(fill,
                        { width: '0%' },
                        {
                            width: percent + '%',
                            duration,
                            ease,
                            delay,
                        }
                    );

                    // ── Badge: fade + slide in ────────────────
                    gsap.to(badge, {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        ease: 'power2.out',
                        delay: delay + duration * 0.3,
                    });

                    // ── Badge: count-up number ────────────────
                    gsap.to(counter, {
                        val: percent,
                        duration,
                        ease,
                        delay,
                        onUpdate() {
                            badge.textContent = Math.round(counter.val) + '%';
                        },
                    });
                },
            });
        });
    }
    initProgressBars('.progress-item', {
        duration: 1.5,
        ease: 'power3.out',
        start: 'top 85%',
        stagger: 0.18,
    });


})(jQuery);
