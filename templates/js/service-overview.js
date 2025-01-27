// Selecciona todas las tarjetas
const cards = document.querySelectorAll('.card');
const contenidos = document.querySelectorAll('.contenido');
const cards1 = document.querySelectorAll('.card1');
const contenidos1 = document.querySelectorAll('.contenido1');

// Añade eventos a cada tarjeta
cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        // Quita el hover de otras tarjetas
        cards.forEach((otherCard) => {
            if (otherCard !== card) {
                otherCard.classList.remove('md:tw-w-[70%]');
                otherCard.classList.add('md:tw-w-[30%]');
                otherCard.querySelector('.image-container').classList.remove('md:tw-block');
                otherCard.querySelector('.image-container').classList.remove('md:tw-w-[50%]');
                otherCard.querySelector('.image-container').classList.add('md:tw-hidden');
            }
        });

        // Cambia la tarjeta actual
        card.classList.remove('md:tw-w-[30%]');
        card.classList.add('md:tw-w-[70%]');
        card.querySelector('.image-container').classList.remove('md:tw-hidden');
        otherCard.querySelector('.image-container').classList.add('md:tw-w-[50%]');
    });
});

contenidos.forEach((contenido) => {
    contenido.addEventListener('mouseenter', () => {
        // Quita el hover de otras tarjetas
        contenidos.forEach((otherContenidos) => {
            if (otherContenidos !== contenido) {
                otherContenidos.classList.remove('md:tw-w-[50%]');
            }
        });

        // Cambia la tarjeta actual
        otherContenidos.classList.add('md:tw-w-[50%]');
    });
});

// Añade eventos a cada tarjeta
cards1.forEach((card1) => {
    card1.addEventListener('mouseenter', () => {
        // Quita el hover de otras tarjetas
        cards1.forEach((otherCard1) => {
            if (otherCard1 !== card1) {
                otherCard1.classList.remove('md:tw-w-[70%]');
                otherCard1.classList.add('md:tw-w-[30%]');
                otherCard1.querySelector('.image-container1').classList.remove('md:tw-block');
                otherCard1.querySelector('.image-container1').classList.remove('md:tw-w-[50%]');
                otherCard1.querySelector('.image-container1').classList.add('md:tw-hidden');
            }
        });

        // Cambia la tarjeta actual
        card1.classList.remove('md:tw-w-[30%]');
        card1.classList.add('md:tw-w-[70%]');
        card1.querySelector('.image-container1').classList.remove('md:tw-hidden');
        otherCard1.querySelector('.image-container1').classList.add('md:tw-w-[50%]');
    });
});

contenidos1.forEach((contenido1) => {
    contenido1.addEventListener('mouseenter', () => {
        // Quita el hover de otras tarjetas
        contenidos1.forEach((otherContenidos1) => {
            if (otherContenidos1 !== contenido1) {
                otherContenidos1.classList.remove('md:tw-w-[50%]');
            }
        });

        // Cambia la tarjeta actual
        otherContenidos1.classList.add('md:tw-w-[50%]');
    });
});