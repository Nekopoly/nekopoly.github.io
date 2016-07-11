$(window).scroll(function(event) {
  $('.top_nav').css('width', $(window).width());
  var nav = $('.top_nav'),
      scr = $(window).scrollTop();
  if (scr < 100){
    nav.removeClass('nav_fix');
  }else{
    nav.addClass('nav_fix');
  }
});
$(window).resize(function(event) {
  $('.top_nav').css('width', $(window).width());
});
$(document).ready(function() {
  $.ajax({
    url: 'http://shiro.nekopoly.n-e.kr/tw',
    type: 'GET',
    dataType: 'json',
  })

  .done(function(data) {
    var posts = data;
    for (var i = 0; i < posts.length; i++) {
      $('#append_t').append('<div class="cardview">'+posts[i].user.name+'<br>'+posts[i].text+'</div>');
    }
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
});
