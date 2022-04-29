import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
function galleryItemsEl(items) {
  return items
    .map(
      (item) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
          <img class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}" />
          </a>
        </div>`
    )
    .join('');
}
galleryEl.innerHTML = galleryItemsEl(galleryItems);
// galleryItemsEl.addEventListener('click', openModal);
// function openModal(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'A') {
//     return;
//   }
// }
