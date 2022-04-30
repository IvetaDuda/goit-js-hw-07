import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');

function galleryItemsEl(list) {
  return list
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
          <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}" />
          </a>
        </div>`
    )
    .join('');
}
galleryContainerEl.addEventListener('click', openModalGallery);

function openModalGallery(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox
    .create(
      `<img src=${event.target.dataset.source} width="800" height="600" alt=${event.target.alt}>`
    )
    .show();

  galleryContainerEl.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
}

galleryContainerEl.insertAdjacentHTML(
  'beforeend',
  galleryItemsEl(galleryItems)
);
