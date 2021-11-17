var before_load_time = new Date().getTime();

window.onload = function() {
	choose_active_menu_item()
	page_load_time()
	floating_menu()
}

function page_load_time() {
    document.getElementById("load_time").innerHTML =
        "Page load in <b>" + (new Date().getTime() - before_load_time) + "</b> ms";
}

function choose_active_menu_item() {
	let pages = ["index.html", "random_facts.html", "hobby.html", "table_constr.html"]
	let loc = document.location.href
	let filename = /\/([A-Za-z0-9_#\.]+)$/.exec(loc)[1]
	let ind = pages.indexOf(filename)
	
	nav_links = document.querySelectorAll(".menu_list a");
	nav_links[ind].classList.add('active_nav_link');
}

function floating_menu() {
var select = document.querySelector('#menu');
	var initialPosition = select.offsetTop;
	addEventListener('scroll', function (event) {
		if (window.scrollY > initialPosition) {
			select.classList.add('f-menu');
		} else if (select.classList.contains('f-menu')) {
			select.classList.remove('f-menu');
		}
	});
}