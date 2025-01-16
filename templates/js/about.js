// Selecciona todos los elementos con la clase 'poster'
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

document.addEventListener("DOMContentLoaded", function () {
	const carousel = document.getElementById("carousel");
	const images = carousel.getElementsByTagName("img");
	let loadedImages = 0;

	function checkAllImagesLoaded() {
		loadedImages++;
		if (loadedImages === images.length) {
			// All images are loaded, start the animation
			carousel.querySelector("div").style.animation = "animate var(--t) linear infinite";
		}
	}

	// Attach load event to each image
	for (let img of images) {
		if (img.complete) {
			// If the image is already loaded (from cache)
			checkAllImagesLoaded();
		} else {
			img.addEventListener("load", checkAllImagesLoaded);
		}
	}
});
