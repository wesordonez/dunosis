function toggleCollapse() {
	const content = document.getElementById("collapsibleContent");
	const button = document.getElementById("toggleButton");

	if (content.classList.contains("hidden")) {
		content.classList.remove("hidden");
		arrowIcon.classList.replace("bi-chevron-right", "bi-chevron-down");
		// button.textContent = 'Hide Project Information';
	} else {
		content.classList.add("hidden");
		arrowIcon.classList.replace("bi-chevron-down", "bi-chevron-right");
		// button.textContent = 'Show Project Information';
	}
}
