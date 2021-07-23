$(document).ready(function(){
    $(".container-image").on({
      mouseenter: function(){
        $(this).find(".opacity-link").css("opacity","1");
        $(this).find(".effect-in").addClass("effect");
      },  
      mouseleave: function(){
        $(this).find(".opacity-link").css("opacity","0");
        $(this).find(".effect-in").removeClass("effect");
      }, 
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('#goToTop').fadeIn();
      } else {
          $('#goToTop').fadeOut();
      }
  });
  var duration_ms = 800;
  $('#goToTop').click(function () {
      var last_scroll = $(window).scrollTop();
      $('html, body').animate({ scrollTop: 0 }, duration_ms)
  });
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 300, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });
  });
 function openPopup(url) {
    $('#img-popup').css('src', url) ;
    $('#section-zoom-popup').css('display', 'block');
    $('.article-frm').css({'opacity':'0.5','filter':'grayscale(100%)'});
    $('#close-popup').on({
      click:function(){
        $('#section-zoom-popup').css('display', 'none');
        $('.article-frm').css({'opacity':'1','filter':'none'});
      }
    })
  }