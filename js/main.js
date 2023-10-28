const message = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const name = ['Гена', 'Gosha', 'Diana', 'Lubovь', 'Roman', 'Kosta', 'Natasha', 'Zena', 'Muxomor'];
const description = ['Uxty', 'Fu!!', 'Good', 'Shlack', 'Axty!', 'Super!', 'Otstoi'];
let descriptionPhotos = [];
//функция создания случайного индекса
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
let photo = function() {
  //получение id
  let idValue = getRandomInteger(0, 25);
  //получение имени пользователя
  let nameUser = getRandomInteger(0, name.length - 1);
  //получение адреса
  let urlValue = getRandomInteger(0, message.length - 1);
  //получение описания фото
  let descriptionValue = getRandomInteger(0, description.length - 1);
  //получение количества лайков
  let likeValue = getRandomInteger(15, 200);
  let commentArray = [];
  for (let i = 0; i < getRandomInteger(0, 30); i++) {
    let commentValue = getRandomInteger(0, message.length - 1);
    commentArray[i] = message[commentValue];
  }
  return {
    id: idValue,
    name: name[nameUser],
    url: 'img/avatar-' + urlValue + '.svg',
    description: description[descriptionValue],
    like: likeValue,
    comments: commentArray,
  };
};
for (let i = 0; i < 25; i++) {
  descriptionPhotos[i] = photo();
}
console.log(descriptionPhotos);
