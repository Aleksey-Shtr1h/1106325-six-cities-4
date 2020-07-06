import {nanoid} from "nanoid";
import {getArrayRandomLength, getRandomIntegerNumber, getRandomDoubleNumber, getRandomArrayItem, getArrayСoordinates} from "../utils/utils.js";
import {generateReviews} from './reviews.js';

export const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

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

const HOUSEHOLD_ITEMS = [
  `Wi-Fi`,
  `Washing machine`,
  `Towels`,
  `Heating`,
  `Coffee machine`,
  `Baby seat`,
  `Kitchen`,
  `Dishwasher`,
  `Cabel TV`,
  `Fridge`,
];

const AVATAR_USERS = [`img/avatar-max.jpg`, `img/avatar-angelina.jpg`];
const NAME_USERS = [`User1`, `User2`, `User3`, `User4`, `User5`, `User6`];

const COORDINATE = [
  [48.8909553943508, 2.35309666406198],
  [48.8695539435080, 2.35309666406198],
  [48.8909553943508, 2.329309666406198],
  [48.8809553943508, 2.339309666406198],

  [50.9909553943508, 6.95309666406198],
  [50.9695539435080, 6.95309666406198],
  [50.9909553943508, 6.929309666406198],
  [50.9809553943508, 6.939309666406198],

  [50.8909553943508, 4.35309666406198],
  [50.8695539435080, 4.35309666406198],
  [50.8909553943508, 4.329309666406198],
  [50.8809553943508, 4.339309666406198],

  [52.3909553943508, 4.85309666406198],
  [52.3695539435080, 4.85309666406198],
  [52.3909553943508, 4.829309666406198],
  [52.3809553943508, 4.839309666406198],

  [53.5909553943508, 10.05309666406198],
  [53.5695539435080, 10.05309666406198],
  [53.5909553943508, 10.029309666406198],
  [53.5809553943508, 10.039309666406198],

  [51.2909553943508, 6.75309666406198],
  [51.2695539435080, 6.75309666406198],
  [51.2909553943508, 6.729309666406198],
  [51.2809553943508, 6.739309666406198],
];

const CITY_COORDINATE = [
  [48.85333333, 2.348611111],
  [50.93305556, 6.950000000],
  [50.85027778, 4.348611111],
  [52.37388889, 4.889444444],
  [53.57527778, 10.01527778],
  [51.22166667, 6.776111111]
];


let counterCoordinates = getArrayСoordinates(COORDINATE);

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
    numberBadrooms: getRandomIntegerNumber(1, 10),
    numberGuests: getRandomIntegerNumber(1, 10),
    householdItems: getArrayRandomLength(HOUSEHOLD_ITEMS, 1, 10),
    infoUser: {
      avatarUser: getRandomArrayItem(AVATAR_USERS),
      nameUser: getRandomArrayItem(NAME_USERS),
      markSuper: Math.random() > 0.5,
    },
    coordinates: counterCoordinates(),
    reviews: generateReviews(getRandomIntegerNumber(1, 6)),
  };
};


const generateOffers = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateOffer);
};

export const cityOffers = cities.map((city, index) => {
  return {
    cityName: city,
    offers: generateOffers(4),
    placesCount: getRandomIntegerNumber(1, 100),
    cityCoordinates: CITY_COORDINATE[index],
  };
});

cityOffers[5].offers = [];
