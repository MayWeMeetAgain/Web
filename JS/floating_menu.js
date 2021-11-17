$(window).on("load", function () {
	var select = document.querySelector('#menu');
	var initialPosition = select.offsetTop;
	addEventListener('scroll', function (event) {
		if (window.scrollY > initialPosition) {
			select.classList.add('f-menu');
		} else if (select.classList.contains('f-menu')) {
			select.classList.remove('f-menu');
		}
	});
});
