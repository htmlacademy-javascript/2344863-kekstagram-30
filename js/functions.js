//Создание массива данных для фотографий
import { message, name, description, numberUsers, numberOutputMessages } from './data.js';
import {getRandomInteger} from './random-integer.js';
const descriptionPhotos = [];
const photo = function(index) {
  //получение id
  //const idValue = getRandomInteger(0, numberUsers);
  //  const idValue = index;
  //получение имени пользователя
  const nameUser = getRandomInteger(0, name.length - 1);
  //получение адреса
  // const urlValue = getRandomInteger(0, numberUsers - 1);
  //получение описания фото
  const descriptionValue = getRandomInteger(0, description.length - 1);
  //получение количества лайков
  const likeValue = getRandomInteger(15, 200);
  //Получение массива комментариев к фото
  const commentArray = [];
  for (let i = 0; i < getRandomInteger(0, numberOutputMessages); i++) {
    const commentValue = getRandomInteger(0, message.length - 1);
    commentArray.push(message[commentValue]);
  }
  return {
    id: index,
    name: name[nameUser],
    url: `photos/${index + 1}.jpg`,
    description: description[descriptionValue],
    likes: likeValue,
    comments: commentArray
  };
};
//Получение массива неповторяющихся индексов
const randomIndex = (length) => {
  const arr = [];
  while(arr.length !== length) {
    const index = getRandomInteger(0, length - 1);
    if(!arr.includes(index)) {
      arr.push(index);
    }
  }
  return arr;
};
const unicIndexes = randomIndex(numberUsers);

for(let i = 0; i < numberUsers; i++) {
  descriptionPhotos.push(photo(unicIndexes[i]));
}

export {descriptionPhotos};
