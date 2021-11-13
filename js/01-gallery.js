import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryElem = document.querySelector('.gallery');

// galleryElem.addEventListener('click', galleryPattern);
galleryElem.addEventListener( 'click', e => {
    e.preventDefault();
},
    false);


function galleryPattern(){
    const markup = galleryItems
    .map(
        ({preview, original, description}) => 
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    )
    .join("");
    galleryElem.insertAdjacentHTML('beforeend', markup);

};

galleryPattern();


galleryElem.addEventListener('click', onClickImgGallery);

function onClickImgGallery(evt){
const img = evt.target.dataset.source;
const instance = basicLightbox.create(`
    <img src="${img}" width="800" height="600">
`);

instance.show();
};

console.log(galleryItems);
