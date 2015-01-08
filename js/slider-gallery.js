$(function(){

  var slideWidth = $('.slide').width(),
      slideCount = $('.slide').size(),
      pos = 0;

  // set the width of the slide tray
  $('#slide_tray').width(slideWidth * slideCount);

  $('#next').click(function () {
    pos += 1;
    var slideAmount = slideWidth * pos;
    $('#slide_tray').animate({right: slideAmount}, 600);
  });

});