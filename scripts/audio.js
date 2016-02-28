(function () {
	"use strict";

	function audioFunc (id, e) {
		var audio = document.getElementById(id);
		if(e.matches) {
			audio.play();
		} else {
			audio.pause();
			audio.currentTime = 0;
		}
	}

	var aural = matchMedia("aural"),
		braille = matchMedia("braille"),
		projection = matchMedia("projection"),
		screen = matchMedia("screen");

	aural.onchange = function(e){ audioFunc('audioAural', e); }
	braille.onchange = function(e){ audioFunc('audioBraille', e); }
	projection.onchange = function(e){ audioFunc('audioProjection', e); }
	screen.onchange = function(e){ audioFunc('audioScreen', e); }
	
	if(projection.matches) {
		$("audioProjection").play();
	}
	if (screen.matches) {
		$("audioScreen").play();
	}
	if (aural.matches) {
		$("audioAural").play();
	}
	if (braille.matches) {
		$("audioBraille").play();
	}
}());

function $(id){
	return document.getElementById(id);
}