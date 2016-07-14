$(window).scroll(function(event) {
  $('.top_nav').css('width', $(window).width());
  var nav = $('.top_nav'),
      scr = $(window).scrollTop();
  if (scr <= 99.9){
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
    url: 'http://shiro.nekopoly.n-e.kr/tw/',
    type: 'GET',
    dataType: 'json',
    beforeSend:function(){
      $("#append_t").append('<span id="loading">잠시만 기다려 주십시오..</span>');
    }
  })
  .done(function(data) {
    var posts = data;
    for (var i = 0; i < posts.length; i++) {
      //트위터 타임라인.
      $('#append_t').append('<div class="cardview_content"><img src="'+posts[i].user.profile_image_url+'"/><span class="t_head tw_head_top">'+posts[i].user.name+'</span><hr><div class="tw_desc">'+posts[i].text+'</div></div>');
    }
  })
  .fail(function() {
    $("#loading").text('오류');
    console.log("error");
  })
  .always(function() {
    $("#loading").fadeOut('slow', function() {
          $("#loading").remove();
    });
         $('.cardview_content').autolink();
         $('.cardview_content').mentionlink();
         $('.cardview_content').hashtaglink();
    console.log("complete");
  });
});
