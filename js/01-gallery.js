import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBoxForCardImage = document.querySelector('.gallery');
const cardCollection = addCardWithImg(galleryItems);
let instance;

galleryBoxForCardImage.addEventListener('click', addOpenOriginalSizeImage)

galleryBoxForCardImage.innerHTML = cardCollection;

function addCardWithImg (cards) { 
    return cards.map(({original, preview, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');
};

function addOpenOriginalSizeImage(event) {
  event.preventDefault()
  if (!event.target.classList.contains("gallery__image")) return;

  instance = basicLightbox.create(`
		<img width="1280" height="854" src= '${event.target.dataset.source}'>
	`);
  instance.show();
  
};



galleryBoxForCardImage.addEventListener('keydown', (e) => {
 
  if (e.code === "Escape") { 
    instance.close();
  };

});

galleryBoxForCardImage.removeEventListener('keydown', instance);


  

    




