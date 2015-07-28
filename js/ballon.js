$('.balloon').click(function(){
switch(Math.floor((Math.random() * 5) +1) ){
case 1 : $('#text').css("font-size",30); $('#text').html("페이지가 이상하게<br/>보이는점을<br/>수정했어요."); break;
case 2 : $('#text').html("말풍선<br/>내용바뀌는거<br/>처음봤어요?"); break;
case 3 : $('#text').css("font-size",29); $('#text').html("더뜯어고치고 싶은데<br/>생각이 안나네요."); break;
case 4 : $('#text').css("font-size",40); $('#text').html("..."); break;
case 5 : $('#text').html("냐옹<br/>Meow<br/>ニャー"); break;
default : break;
  }
document.getElementById('pop').play()
});
