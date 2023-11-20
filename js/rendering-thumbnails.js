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
