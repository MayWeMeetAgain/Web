$("document").ready(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 610) {
			$('.menu').addClass('f-menu');
		} else {
			$('.menu').removeClass('f-menu');
		}
	});

});