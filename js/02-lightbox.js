import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryElem = document.querySelector('.gallery');

galleryElem.addEventListener( 'click', e => {
    e.preventDefault();
},
    false);


function galleryPattern(){
    const markup = galleryItems
    .map(
        ({preview, original, description}) => 
        `<a class="gallery__item" href="${original}">
             <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    )
    .join("");
    galleryElem.insertAdjacentHTML('beforeend', markup);

};

galleryPattern();


const lightbox = new SimpleLightbox('.gallery a', { captionsData : "alt", captionDelay : 250});
lightbox.on("show.simplelightbox");

console.log(galleryItems);