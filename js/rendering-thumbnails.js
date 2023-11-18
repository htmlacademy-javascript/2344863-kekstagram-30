import {descriptionPhotos} from './functions.js';
//определяем шаблон
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
//определяем контейнер для размещения фото
const container = document.querySelector('.pictures');
//создаем миниатюру
const createThumbnail = ({url, description, likes, comments}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  return thumbnail;
};
//создаем необходимое колличество миниатюр
const renderThumbnails = (photos) => {
  //создаем фрагмент
  const fragment = document.createDocumentFragment();
  //перебираем полученный массив
  photos.forEach((photo) => {
    const thumbnail = createThumbnail(photo);
    //добавляем в фрагмент миниатюру
    fragment.append(thumbnail);
  });
  //добавляем в контейнер сгенерированный массив миниатюр
  container.append(fragment);
};
//вызываем функцию создания миниатюр
renderThumbnails(descriptionPhotos);
export {renderThumbnails};





// Посмотреть как работать с html шаблонами
//получить шаблон picture
//let createThumbnails = (values) => {
//values.forEach((element, index) => {
//  const thumbnail = photo(index);
  //вставить в разметку данные  из thumbnail
  /*<a href="#" class="picture">
      <img class="picture__img" src="thumbnail.url" width="182" height="182" alt="Случайная фотография">
      <p class="picture__info">
        <span class="picture__comments">thumbnail.comments</span>
        <span class="picture__likes">thumbnail.like</span>
      </p>
    </a>*/

    //вставить thumbnails в фрагмент из DocumentFragment
//});
  //вставить фрагмент в элемент с классом 'pictures'

//}
//createThumbnails(photos)
