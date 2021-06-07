$(document).ready(function() {
  // MODAL
  var modalText = {
    discover: {
      title: 'YelpCamp',
      tag: 'CAMPGROUNDS REVIEWING PLATFORM.',
      detail:
        'YelpCamp is a platform that lets users discover, create and review campgrounds! In order to create or review, an account is a must. It provides business owners with tools to convert first time orders into lifelong adventures. This project was part of Colt Steeles full stack web developer bootcamp on udemy. Here are some accounts you can use to login: (guest: password), (test: password), (admin: password1)',
      link: {
		  page: 'https://immense-island-00973.herokuapp.com/',
		  source: 'https://github.com/javiercab95/yelpcamp'
	  }
    },
	ordering: {
      title: 'Website',
      tag: 'PLACEHOLDER IMAGE',
      detail:
        'This Website is under construction; regular updates change how frecuent the site goes online. If you wish, be sure to check back in a few days to see its functionality and its live updates.',
      link: {
		  page: 'https://wdb-iuwng.run-us-west2.goorm.io/',
		  source: 'https://github.com/javiercab95/'
	  }
    },
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link.page);
	  if (modalText[id].link)
      $('#modal .button2')
        .addClass('visible')
        .parent()
	    .attr('href', modalText[id].link.source);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('/projects/port" + id + '-' + index + ".PNG') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
