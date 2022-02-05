/*	
BlotBot made by 
Oliver Boermans 
http://www.ollicle.com/
@ollicle
*/

var BB = BB?BB: {};

BB.updatebot = function(){
	if (!Modernizr.svg){
		return false;
	}
	if (location.hash) {
		BB.drawbot(location.hash);
	} else {
		BB.drawbot('#00000000');
	}
};

BB.newcode = function(){
	var code = '';
	for ( i = 0; i < 8; i++ ) {
		var rand = Math.floor( Math.random()*16 );
		code = code.concat( rand.toString(16));
	}
	return code;
};

BB.updatelayout = function(){
	if (location.hash) {
		$('div.reception').css('z-index','1');
	} else {
		$('div.reception').css('z-index','3');
	}
};

if (BB.drawbot) {
	BB.updatebot();
}

$(window).bind('hashchange',function(){
	BB.updatebot();
	BB.updatelayout();
	BB.changes = BB.changes?BB.changes+1 : 1;
	_gaq.push(['_trackEvent', 'bot', 'change', location.hash, BB.changes]);
});

$(function(){
	$('a.next').click(function(){
		$(this).attr('href','#'+ BB.newcode());
	});
	BB.updatelayout();
});

if (location.hash) {
	_gaq.push(['_trackEvent', 'bot', 'landing', location.hash]);
}