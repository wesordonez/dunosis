/**
 * Contains JS code for home page
 */



const reviewContainer = document.querySelector(".review-container")
const reviewSlideShow = new SlideShow(reviewContainer, true, 10000)


const reviewModal = new Modal(document.querySelector("#modal"))

/** Selecciona todos los elementos con la clase 'poster' */
const elements = document.querySelectorAll('.poster');

elements.forEach(el => {
 const height = el.clientHeight;
 const width = el.clientWidth;

 el.addEventListener('mousemove', (e) => {
     const { layerX, layerY } = e;

     const yRotation = (
         (layerX - width / 2) / width
     ) * 20;

     const xRotation = (
         (layerY - height / 2) / height
     ) * 20;

     const string = `
         perspective(500px)
         scale(1.08)
         rotateX(${xRotation}deg)
         rotateY(${yRotation}deg)`;

     el.style.transform = string;
 });

 el.addEventListener('mouseout', () => {
     el.style.transform = `
     perspective(500px) 
     scale(1)
     rotateX(0)
     rotateY(0)`;
 });
});