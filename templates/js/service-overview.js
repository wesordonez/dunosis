/**
 * Contains JS code for Service Overview page
 */

// Simplified card hover effect
const cardRows = document.querySelectorAll(".card-row");

cardRows.forEach((row, rowIndex) => {
	const cards = row.querySelectorAll(".card");

	// Automatically activate the first card of the first row and the second card of the second row
	if (rowIndex === 0 && cards.length > 0) {
		cards[0].classList.add("active");
	} else if (rowIndex === 1 && cards.length > 1) {
		cards[1].classList.add("active");
	}

	cards.forEach(card => {
		card.addEventListener("mouseenter", () => {
			cards.forEach(c => c.classList.remove("active"));
			card.classList.add("active");
		});
	});
});
