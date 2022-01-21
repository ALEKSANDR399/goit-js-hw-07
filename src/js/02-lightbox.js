import { galleryItems } from './gallery-items.js';
// Change code below this line

const boxForGalleryImage = document.querySelector('.gallery');
const collectionWithImage = createImage(galleryItems);

boxForGalleryImage.innerHTML = collectionWithImage;

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay:  '250',
 });

function createImage (elem) {
    return elem.map(({preview, original, description}) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('');
};



