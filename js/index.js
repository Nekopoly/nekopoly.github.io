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
var posts;
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
    posts = data;

    var medi;
      Object.getOwnPropertyNames(posts).forEach(function (val, idx, arr){
        $('#append_t').append('<div class="cardview_content">'
        +'<img src="'+posts[val].user.profile_image_url+'"/>'+
        '<span class="t_head tw_head_top">'+posts[val].user.name+
        '</span><hr><div class="tw_desc">'+posts[val].text+'<img class="isremove" src="'+posts[val].media_url+'"/>'
        +'</div></div>');
        if($('.isremove').attr('src')=='undefined'){
        $('.isremove').remove();
        $('.tw_desc').append('<!-- 컨텐츠 없음 -->');
        }
      });
  })
  .fail(function() {$("#loading").text('오류');console.log("error");})
  .always(function() {
         $("#loading").remove();
         $('.cardview_content').autolink();
         $('.cardview_content').mentionlink();
         $('.cardview_content').hashtaglink();
  });
});
