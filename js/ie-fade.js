// patch jQuery's fade animations for old IE versions that don't play nice
// with opacity and cleartype fonts, transparent images and checked inputs
// http://jquery.malsup.com/fadetest.html

(function($) {
/*jshint expr:true */    

var m = /(MSIE) ([\w.]+)/.exec( navigator.userAgent );
var patch = m && m[1] && m[2] < 9;

if (patch) {
    $.fn.fadeIn = function(speed, callback) {
        return this.animate({opacity: 'show'}, speed, function() {
            this.style.removeAttribute('filter'); 
            callback && callback(); 
        });
    };

    $.fn.fadeOut = function(speed, callback) {
        return this.animate({opacity: 'hide'}, speed, function() {
            this.style.removeAttribute('filter'); 
            callback && callback(); 
        });
    };

    $.fn.fadeTo = function(speed,to,callback) {
        return this.animate({opacity: to}, speed, function() {
            to == 1 && this.style.removeAttribute('filter'); 
            callback && callback(); 
        });
    };
}
})(jQuery);
