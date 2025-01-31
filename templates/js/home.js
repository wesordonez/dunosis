/**
 * Contains JS code for home page
 */

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

// JS for Service Overview hover effect

const cards = document.querySelectorAll(".card");
const contenidos = document.querySelectorAll(".contenido");
const cards1 = document.querySelectorAll(".card1");
const contenidos1 = document.querySelectorAll(".contenido1");

// Add events to each card on first row
cards.forEach(card => {
	card.addEventListener("mouseenter", () => {
		// Remove hover from other cards
		cards.forEach(otherCard => {
			if (otherCard !== card) {
				otherCard.classList.remove("md:tw-w-[70%]");
				otherCard.classList.add("md:tw-w-[30%]");
				otherCard.querySelector(".image-container").classList.remove("md:tw-block");
				otherCard.querySelector(".image-container").classList.remove("md:tw-w-[50%]");
				otherCard.querySelector(".image-container").classList.add("md:tw-hidden");
			}
		});

		// Change the current card
		card.classList.remove("md:tw-w-[30%]");
		card.classList.add("md:tw-w-[70%]");
		card.querySelector(".image-container").classList.remove("md:tw-hidden");
		otherCard.querySelector(".image-container").classList.add("md:tw-w-[50%]");
	});
});

contenidos.forEach(contenido => {
	contenido.addEventListener("mouseenter", () => {
		// Remove hover from other cards
		contenidos.forEach(otherContenidos => {
			if (otherContenidos !== contenido) {
				otherContenidos.classList.remove("md:tw-w-[50%]");
			}
		});

		// Change the current card
		otherContenidos.classList.add("md:tw-w-[50%]");
	});
});

// Add events to each card on second row
cards1.forEach(card1 => {
	card1.addEventListener("mouseenter", () => {
		// Remove hover from other cards
		cards1.forEach(otherCard1 => {
			if (otherCard1 !== card1) {
				otherCard1.classList.remove("md:tw-w-[70%]");
				otherCard1.classList.add("md:tw-w-[30%]");
				otherCard1.querySelector(".image-container1").classList.remove("md:tw-block");
				otherCard1.querySelector(".image-container1").classList.remove("md:tw-w-[50%]");
				otherCard1.querySelector(".image-container1").classList.add("md:tw-hidden");
			}
		});

		// Change the current card
		card1.classList.remove("md:tw-w-[30%]");
		card1.classList.add("md:tw-w-[70%]");
		card1.querySelector(".image-container1").classList.remove("md:tw-hidden");
		otherCard1.querySelector(".image-container1").classList.add("md:tw-w-[50%]");
	});
});

contenidos1.forEach(contenido1 => {
	contenido1.addEventListener("mouseenter", () => {
		// Remove hover from other cards
		contenidos1.forEach(otherContenidos1 => {
			if (otherContenidos1 !== contenido1) {
				otherContenidos1.classList.remove("md:tw-w-[50%]");
			}
		});

		// Change the current card
		otherContenidos1.classList.add("md:tw-w-[50%]");
	});
});

// JS for How it Works animation
document.addEventListener("DOMContentLoaded", () => {
	const steps = document.querySelectorAll(".step");
	const animatedLine = document.querySelector(".animated-line");
	const componentDiv = document.querySelector(".component-div");

	function animateOnScroll() {
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
	}

	window.addEventListener("scroll", animateOnScroll);
	animateOnScroll(); // Initial check on page load
});
