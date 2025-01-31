/**
 * Contains JS code for home page
 */

// Throttling function
function throttle(func, limit) {
	let lastFunc;
	let lastRan;
	return function () {
		const context = this;
		const args = arguments;
		if (!lastRan) {
			func.apply(context, args);
			lastRan = Date.now();
		} else {
			clearTimeout(lastFunc);
			lastFunc = setTimeout(function () {
				if (Date.now() - lastRan >= limit) {
					func.apply(context, args);
					lastRan = Date.now();
				}
			}, limit - (Date.now() - lastRan));
		}
	};
}

// JS for poster hover effect
const elements = document.querySelectorAll(".poster");

elements.forEach(el => {
	const height = el.clientHeight;
	const width = el.clientWidth;

	el.addEventListener("mousemove", e => {
		const { layerX, layerY } = e;

		const yRotation = ((layerX - width / 2) / width) * 20;
		const xRotation = ((layerY - height / 2) / height) * 20;

		const string = `
      perspective(500px)
      scale(1.08)
      rotateX(${xRotation}deg)
      rotateY(${yRotation}deg)`;

		el.style.transform = string;
	});

	el.addEventListener("mouseout", () => {
		el.style.transform = `
      perspective(500px) 
      scale(1)
      rotateX(0)
      rotateY(0)`;
	});
});

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

// JS for How it Works animation
document.addEventListener("DOMContentLoaded", () => {
	const steps = document.querySelectorAll(".step");
	const animatedLine = document.querySelector(".animated-line");
	const componentDiv = document.querySelector(".component-div");

	const animateOnScroll = function () {
		const viewportHeight = window.innerHeight;
		const componentPosition = componentDiv.getBoundingClientRect().top;
		const componentBottomPosition = componentDiv.getBoundingClientRect().bottom;
		const scrollPosition = window.scrollY + viewportHeight / 2;

		if (componentPosition <= viewportHeight / 2) {
			let maxHeight = 0;

			steps.forEach((step, index) => {
				const stepPosition = step.getBoundingClientRect().top + window.scrollY;

				if (scrollPosition > stepPosition) {
					step.classList.add("active");
					maxHeight = Math.max(
						maxHeight,
						scrollPosition - stepPosition + step.offsetHeight / 2
					);
				} else {
					step.classList.remove("active");
				}
			});

			// Calculate the maximum height the line can grow
			const maxComponentHeight = componentBottomPosition - viewportHeight / 2;
			const maxLineHeight = componentDiv.offsetHeight;

			// Ensure the animated line does not grow past the bottom of the component-div
			animatedLine.style.height = `${Math.min(maxHeight, maxLineHeight)}px`;
		} else {
			animatedLine.style.height = "0";
			steps.forEach(step => step.classList.remove("active"));
		}
	};

	window.addEventListener("scroll", throttle(animateOnScroll, 50));
	animateOnScroll(); // Initial check on page load
});

// Slider functionality
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
					price.querySelector(".price-period").textContent = "/MO";
				}
			});
		});
	});
});
