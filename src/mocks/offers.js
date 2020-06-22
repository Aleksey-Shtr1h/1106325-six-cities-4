import {nanoid} from "nanoid";
import {getArrayRandomLength, getRandomIntegerNumber, getRandomDoubleNumber, getRandomArrayItem} from "../utils/utils.js";

const PLACE_PHOTOS = [
  `img/room.jpg`,
  `img/apartment-02.jpg`,
  `img/apartment-03.jpg`,
  `img/room.jpg`,
  `img/apartment-01.jpg`
];

const TYPES_PLACE = [`Apartment`, `Private`, `House`, `Hotel`];

const DESCRIPTION_ITEMS = [
  `Равным образом укрепление и развитие структуры в значительной степени обуславливает создание направлений прогрессивного развития.`,
  `Повседневная практика показывает, что дальнейшее развитие различных форм деятельности требуют от нас анализа систем массового участия.`,
  `Идейные соображения высшего порядка, а также сложившаяся структура организации способствует подготовки и реализации соответствующий условий активизации.`,
  `Таким образом новая модель организационной деятельности играет важную роль в формировании соответствующий условий активизации.`
];

const TITLE_CARDS = [
  `Beautiful &amp; luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

const generateOffer = () => {
  return {
    id: nanoid(),
    isCheckedPremium: Math.random() > 0.5,
    images: getArrayRandomLength(PLACE_PHOTOS, 1, 5),
    price: getRandomIntegerNumber(100, 5000),
    ratingStars: getRandomDoubleNumber(0, 5),
    titleCard: getRandomArrayItem(TITLE_CARDS),
    typeCard: getRandomArrayItem(TYPES_PLACE),
    descriptions: getArrayRandomLength(DESCRIPTION_ITEMS, 1, 4),
  };
};

const generateOffers = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateOffer);
};

export const offers = generateOffers(4);


