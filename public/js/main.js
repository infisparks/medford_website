window.initializeMainEffects = function () {
  if (typeof jQuery === 'undefined') return;

  var $ = jQuery;
  'use strict';

  /*===== - Preloader  =====*/
  // Hide preloader quickly if it is visible
  setTimeout(function () {
      $(".preloader").fadeOut(400);
  }, 200);

  /*===== - Mouse Cursor Animation  =====*/
  if ($(".mouseCursor").length > 0) {
      function itCursor() {
          var myCursor = jQuery(".mouseCursor");
          if (myCursor.length) {
              if ($("body")) {
                  const e = document.querySelector(".cursor-inner"),
                      t = document.querySelector(".cursor-outer");
                  
                  if (e && t) {
                      e.style.transform = "translate(0px, 0px)";
                      t.style.transform = "translate(0px, 0px)";
                      
                      // Remove previous mousemove
                      window.onmousemove = null;
                      window.onmousemove = function (s) {
                          t.style.transform =
                              "translate(" + s.clientX + "px, " + s.clientY + "px)";
                          e.style.transform =
                              "translate(" + s.clientX + "px, " + s.clientY + "px)";
                      };
                      
                      $("body").off("mouseenter mouseleave", "button, a, .cursor-pointer");
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
      }
      itCursor();
  }

  /*==== - Smooth scroll using lenis =====*/
  if (typeof Lenis !== "undefined") {
      if (window.lenisInstance) {
          window.lenisInstance.destroy();
      }
      const lenis = new Lenis({
          duration: 1.2,
          smooth: true,
          direction: 'vertical',
          gestureDirection: 'vertical',
          smoothTouch: false,
          touchMultiplier: 2,
      });
      window.lenisInstance = lenis;
      
      function raf(time) {
          if (window.lenisInstance === lenis) {
              lenis.raf(time);
              requestAnimationFrame(raf);
          }
      }
      requestAnimationFrame(raf);
  };


  //*===== - GSAP and ScrollTrigger Registration =====*/
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      // Clean up previous triggers to avoid memory leaks
      ScrollTrigger.getAll().forEach(t => t.kill());
  }
  if (typeof SplitText !== "undefined") {
      gsap.registerPlugin(SplitText);
  }

  /*===== - Back To Top =====*/
  if ($(".cloudflow-progress-circle path").length) {
      $(window).off("scroll.clinifyxProgress");
      $(".cloudflow-progress-wrap").off("click.clinifyxProgress");

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
  if (typeof AOS !== "undefined") {
      AOS.init({
          once: true,
          offset: 120,
          duration: 600,
          easing: 'ease-out-cubic',
      });
      AOS.refresh();
  }

  /*===== - GLightbox =====*/
  if (typeof GLightbox !== "undefined") {
      const lightbox = GLightbox({
          selector: '.ta-glightbox',
          videoAutoplay: false
      });
  };

  /* ===== - Gsap text animations  =====*/
  function initSplitTextAnimations() {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || typeof SplitText === 'undefined') return;

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
  if ($('.marquee-left').length > 0 && typeof $.fn.marquee !== 'undefined') {
      $('.marquee-left').marquee('destroy');
      $('.marquee-left').marquee({
          duration: 30000,
          gap: 20,
          direction: 'left',
          duplicated: true,
          startVisible: true
      });
  };

  /*===== - Marquee Right =====*/
  if ($('.marquee-right').length > 0 && typeof $.fn.marquee !== 'undefined') {
      $('.marquee-right').marquee('destroy');
      $('.marquee-right').marquee({
          duration: 30000,
          gap: 20,
          direction: 'right',
          duplicated: true,
          startVisible: true
      });
  };

  /*===== - Odometer =======*/
  if ($(".odometer").length > 0 && typeof $.fn.appear !== 'undefined') {
      $('.odometer').appear();
      $(document.body).off('appear', '.odometer');
      $(document.body).on('appear', '.odometer', function () {
          var $this = $(this); // only current odometer
          var countNumber = $this.attr("data-count");
          $this.html(countNumber);
      });
  }

  /*===== - Faq accordion ======*/
  $('.faq-item .heading').off('click');
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
  $('.ta-tab-nav li').off('click');
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

  /*==== - Swiper Sliders Cleanup & Rebuild =====*/
  if (window.swiperInstances) {
      window.swiperInstances.forEach(function (s) {
          if (s && typeof s.destroy === 'function') s.destroy(true, true);
      });
  }
  window.swiperInstances = [];

  if (typeof Swiper !== "undefined") {
      /*==== - Testimonial one slider  =====*/
      if ($('.testiOneSwiper').length > 0) {
          let s = new Swiper(".testiOneSwiper", {
              spaceBetween: 24,
              slidesPerView: 1,
              loop: true,
              speed: 800,
          });
          window.swiperInstances.push(s);
      };

      /*==== - Testimonial two slider  =====*/
      if ($('.testimonialTwoSlider').length > 0) {
          let s = new Swiper(".testimonialTwoSlider", {
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
          window.swiperInstances.push(s);
      };

      /*==== - Testimonial three slider  =====*/
      if ($('.testimonialThreeSlider').length > 0) {
          let s = new Swiper(".testimonialThreeSlider", {
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
          window.swiperInstances.push(s);
      };

      /*==== - Partner one slider  =====*/
      if ($('.partnerOneSlider').length > 0) {
          let s = new Swiper(".partnerOneSlider", {
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
          window.swiperInstances.push(s);
      };

      /*==== - Case study slider three  =====*/
      if ($('.caseStudySliderThree').length) {
          let s = new Swiper(".caseStudySliderThree", {
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
          window.swiperInstances.push(s);
      }
  }

  /*==== - Service two images - active toggle  =====*/
  $('.service-two-item').off('mouseenter mouseleave');
  $('.service-two-item').on('mouseenter', function () {
      $('.service-two-item').removeClass('active');
      $(this).addClass('active');
  });

  $('.service-two-item').on('mouseleave', function () {
      $(this).addClass('active');
  });


  /*==== - Progress bar  =====*/
  function initProgressBars(selector = '.progress-item', options = {}) {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

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
};

// Also execute on page load
$(function() {
  window.initializeMainEffects();
});
