$(document).ready(function(){
	$('.modal').modal();
	$('.dropdown-trigger').dropdown();
});

function callParallax() {
	$('.parallax').parallax();
}

window.load = callParallax();

