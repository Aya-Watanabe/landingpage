 //Overlay
 
 const overlay = document.getElementById('overlay-text');
 const overlayBTN = document.getElementById('overlay-btn');
 
function removeVisible(){
  overlay.classList.remove('visible');
}

overlayBTN.addEventListener('click', removeVisible);
    

$(function () {
  //Go back to top
  $('#js-page-top').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

  //Fixed header
  $(window).scroll(function () {
    if ($(window).scrollTop() >= offset.top) {
      $nav.addClass('fixed');
      $("body").css("margin-top", navHeight);
    } else {
      $nav.removeClass('fixed');
      $("body").css("margin-top", "0");
    }
  });

  //page scroll 
  var $nav = $(".gnav");
  var offset = $nav.offset();
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });
});

$(function(){
  $('.animation').css('visibility','hidden');
  $(window).scroll(function(){
   var windowHeight = jQuery(window).height(),
       topWindow = jQuery(window).scrollTop();
   $('.animation').each(function(){
    var targetPosition = jQuery(this).offset().top;
    if(topWindow > targetPosition - windowHeight + 100){
     jQuery(this).addClass("fadeInDown");
    }
   });
  });
  });

