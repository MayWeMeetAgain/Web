window.onload = choose_active_menu_item;

function choose_active_menu_item() {
	let pages = ["index.html", "random_facts.html", "hobby.html", "table_constr.html"]
	let loc = document.location.href
	let re = new RegExp("/([A-Za-z0-9_#\.]+)$")
	let filename = re.exec(loc)[1]
	let ind = pages.indexOf(filename)
	
	nav_links = document.querySelectorAll(".menu_list a");
	nav_links[ind].classList.add('active_nav_link');
}