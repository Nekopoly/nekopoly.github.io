(function($) {

	        var x = 0;
	        var y = 0;
	        var body = $("body#background");

	        body.css('backgroundPosition', x + 'px' + ' ' + y + 'px');

	        window.setInterval(function() {
	            body.css("backgroundPosition", x + 'px' + ' ' + y + 'px');
	            y--;
	            x--;
	        }, 20);

})(jQuery);
switch(Math.floor((Math.random() * 5) +1) ){
	case 1 : $('#titletxt').text("네코폴리"); break;
	case 2 : $('#titletxt').text("고양이폴리"); break;
	case 3 : $('#titletxt').text("냥폴리"); break;
	case 4 : $('#titletxt').text("네코폴리는 폴리폴리해."); break;
	default : break;
}

switch(Math.floor((Math.random() * 5) +1) ){
	case 1 : $('#text').css("font-size",30); $('#text').html("페이지가 이상하게<br/>보이는점을<br/>수정했어요."); break;
	case 2 : $('#text').html("말풍선<br/>내용바뀌는거<br/>처음봤어요?"); break;
	case 3 : $('#text').css("font-size",29); $('#text').html("더뜯어고치고 싶은데<br/>생각이 안나네요."); break;
	case 4 : $('#text').css("font-size",40); $('#text').html("..."); break;
	case 5 : $('#text').html("냐옹<br/>Meow"); break;
	default : break;
}


	$('.polynyan').click(function(){
		document.getElementById('nya').play()
	});
//배경 스크롤:http://jquerydemo.com/animate-background-image.aspx
