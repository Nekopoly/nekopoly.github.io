//접속 할때마다 내용바뀜.
switch(Math.floor((Math.random() * 5) +1) ){
	case 1 : $('#titletxt').text("네코폴리"); break;
	case 2 : $('#titletxt').text("고양이폴리"); break;
	case 3 : $('#titletxt').text("냥폴리"); break;
	case 4 : $('#titletxt').text("네코폴리는 폴리폴리해."); break;
	default : break;
}
	$('.polynyan').click(function(){
		document.getElementById('nya').play()
	});
	$('#lol').click(function(event) {
		/* Act on the event */
		var nekopoly_chan = ["네","코","폴","리","짱","!"];
		var rainbow = ["ff0000","ff7f00","faff00","0026ff","002d87","7700ff"];
		for (var i = 0; i <= 5; i++) {
			var win = window.open("");
			win.document.body.innerHTML = '<!doctype html><head><meta name="theme-color" content="'+'#'+rainbow[i]+'"/>'+
			'<meta charset="utf-8"><title>'+nekopoly_chan[i]+'</title></head><body><p>'+nekopoly_chan[i]+'</p></body></html>';
		}
	});
//배경 스크롤:http://jquerydemo.com/animate-background-image.aspx
