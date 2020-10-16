/* globals $ */




$('.header').outerHeight($(window).height());

$('.navbar-toggler-icon').on('click', function() {
  $('body').toggleClass('open');
});

$('#gloval-nav').on('click', function() {
  $('body').removeClass('open');
});

$(function() {
  $('.absolute_transform').one('inview', function(event, isInView) {
    if (isInView) {
      $(".skillbar").skillBars({
        from: 0,
        speed: 2000,
        interval: 90,
        decimals: 0,
      });
    }
  });
});

$(function() {
  var navPos = $(".navbar").offset().top;
  var nav = {
    "position": "static",
  };
  $(window).scroll(function() {
    if ($(window).scrollTop() > navPos) {
      $(".navbar").css("position", "fixed");
    }
    else {
      $(".navbar").css(nav);
    }
  });
});

$(function() {
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 2,
    spaceBetween: 10,
    centeredSlides : true,
    loop: true,
    
    breakpoints: {
    0: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		720: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		1020: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
	}
  });
});

$(function() {
  var h = $(window).height();
  $('#wrap').css('display', 'none');
  $('.navbar').hide();
  $('.swiper-container').hide();
  $('#loader-bg ,#loader').height(h).css('display', 'block');
});

$(function() {
  setTimeout(function() {
    $('#wrap').css('display', 'block');
    $('#loader-bg').delay(1000).fadeOut(3000);
    $('#loader').delay(1000).fadeOut(1000);
  }, 1600);
});

$(window).on('load', function() {
  $('#loader-bg').delay(1000).fadeOut(3000);
  $('#loader').delay(1000).fadeOut(1000);
  $('#wrap').css('display', 'block');
  $(function() {
    setTimeout(function() {
      $('.navbar').show(2500);
      $('.swiper-container').show(2500);
    }, 1600);
  });
});
