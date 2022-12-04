// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector(".gallery");
const galleryArr = iteamsGallery(galleryItems);
function iteamsGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
    })
    .join("");
}
gallery.insertAdjacentHTML("beforeend", galleryArr);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "botton",
  captionDelay: 250,
});
// console.log(SimpleLightbox);
// console.log(galleryItems);
