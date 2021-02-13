$(document).ready(function() {
});

$(window).scroll(function() {
	let scroll_pos = $(this).scrollTop();
	if (scroll_pos > 0) {
		$('header').addClass('scrolled');
	} else {
		$('header').removeClass('scrolled');
	}
});