var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'Windows CE;', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson', 'Mobile', 'Symbian', 'Opera Mobi', 'Opera Mini', 'IEmobile');
for (var word in mobileKeyWords){
if (navigator.userAgent.match(mobileKeyWords[word]) != null){
window.location.href = "http://nekopoly.n-e.kr";
break;
}
}