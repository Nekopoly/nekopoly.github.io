$(window).scroll(function(event) {
  var nav = $('.top_nav'),
      scr = $(window).scrollTop();
  if (scr <= 100) nav.addClass('.nav_fix');
  else nav.removeClass('.nav_fix');
});
