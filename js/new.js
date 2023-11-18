const randomIndex = (length) => {
  const arrowIndex = [];
  while(arrowIndex.length !== length) {
    const index = getRandomInteger(0, length - 1);
    if(!arrowIndex.includes(index)) {
      arrowIndex.push(index);
    }
  }
  return arrowIndex;
};
const unicIndexses = randomIndex(numberUsers);

for(let i = 0; i < numberUsers; i++) {
  descriptionPhotos.push(photo(unicIndexses[i]));
};
