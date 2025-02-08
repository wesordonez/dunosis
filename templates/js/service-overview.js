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
	} else if (rowIndex === 2 && cards.length > 0) {
		cards[0].classList.add("active");
	}

	cards.forEach(card => {
		card.addEventListener("mouseenter", () => {
			cards.forEach(c => c.classList.remove("active"));
			card.classList.add("active");
		});
	});
});

// Pricing Slider functionality
const options = document.querySelectorAll(".option");
const slider = document.querySelector(".slider");
const prices = document.querySelectorAll(".price");
// Automatically assign a default active state for the one-time option when the page reloads
document.addEventListener("DOMContentLoaded", () => {
	const defaultOption = document.querySelector(".option[data-type='one-time']");
	if (defaultOption) {
		defaultOption.classList.add("active");
		slider.style.transform = "translateX(0)";
		prices.forEach(price => {
			const oneTimePrice = price.dataset.oneTime;
			price.querySelector(".price-amount").textContent = oneTimePrice;
			price.querySelector(".price-period").textContent = "";
		});
	}

	options.forEach(option => {
		option.addEventListener("click", () => {
			// Toggle active state
			options.forEach(opt => opt.classList.remove("active"));
			option.classList.add("active");

			// Move the slider
			if (option.dataset.type === "one-time") {
				slider.style.transform = "translateX(0)";
			} else {
				slider.style.transform = "translateX(110%)";
			}

			// Update pricing
			prices.forEach(price => {
				const oneTimePrice = price.dataset.oneTime;
				const monthlyPrice = price.dataset.monthly;
				if (option.dataset.type === "one-time") {
					price.querySelector(".price-amount").textContent = oneTimePrice;
					price.querySelector(".price-period").textContent = "";
				} else {
					price.querySelector(".price-amount").textContent = monthlyPrice;
					price.querySelector(".price-period").textContent = "Per month";
				}
			});
		});
	});
});
