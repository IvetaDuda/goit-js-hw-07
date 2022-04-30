import { galleryItems } from './gallery-items.js';
// Change code below this line

// const galleryContainerEl = document.querySelector('.gallery');

// function galleryItemsEl(list) {
//   return list
//     .map(
//       ({ preview, original, description }) =>
//         `<a class="gallery__item" href="${original}">
//           <img class="gallery__image"
//           src="${preview}"
//           alt="${description}" />
//         </a>`
//     )
//     .join('');
// }

// galleryContainerEl.addEventListener('click', openModalGallery);

// function openModalGallery(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }

//   let gallery = new SimpleLightbox('.gallery a', {
//     captionsData: `alt`,
//     captionDelay: 250,
//   });

//   galleryContainerEl.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape') {
//       gallery.close();
//     }
//   });
//   // galleryContainerEl.addEventListener('click', (event) => {
//   //   if (event.currentTarget.nodeName !== 'IMG') {
//   //     gallery.currentTarget.close();
//   //   }
//   // });
// }

// galleryContainerEl.insertAdjacentHTML(
//   'beforeend',
//   galleryItemsEl(galleryItems)
// );

const galleryContainerEl = document.querySelector('.gallery');
galleryContainerEl.insertAdjacentHTML(
  'beforeend',
  galleryItemsEl(galleryItems)
);
function galleryItemsEl(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>`;
    })
    .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
