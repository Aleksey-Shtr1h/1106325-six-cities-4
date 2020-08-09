export const getModifiedRatingValue = (valueRating) => {
  return Math.round(valueRating) * 20 + `%`;
};

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const getRandomDoubleNumber = (min, max) => {
  return Number((min + Math.random() * (max - min)).toFixed(1));
};

export const getArrayRandomLength = (arrayLength, min, max) => {
  const options = arrayLength.slice(0, getRandomIntegerNumber(min, max));
  return shuffleArray(options);
};

export const shuffleArray = (array) => {
  const result = array.slice();
  result.sort(() => Math.random() - 0.5);
  return result;
};

export const getArrayСoordinates = (arr) => {
  let counter = -1;

  return function () {
    counter++;
    return arr[counter];
  };
};

export const randomDate = (start, end) => {
  return new Date(start.getTime()
          + Math.random() * (end.getTime() - start.getTime()));
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffer = (place, router, routerOffer) => {

  if (place) {
    return place;
  }

  routerOffer({id: router.match.params.id});
  return false;
};
