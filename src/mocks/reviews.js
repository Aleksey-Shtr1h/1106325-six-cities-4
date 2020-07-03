import {nanoid} from "nanoid";
import {getRandomIntegerNumber, getRandomDoubleNumber, getRandomArrayItem, randomDate} from "../utils/utils.js";

const NAME_USERS = [`User1`, `User2`, `User3`, `User4`, `User5`, `User6`];
const DESCRIPTION_ITEMS = [
  `Равным образом укрепление и развитие структуры в значительной степени обуславливает создание направлений прогрессивного развития.`,
  `Повседневная практика показывает, что дальнейшее развитие различных форм деятельности требуют от нас анализа систем массового участия.`,
  `Идейные соображения высшего порядка, а также сложившаяся структура организации способствует подготовки и реализации соответствующий условий активизации.`,
  `Таким образом новая модель организационной деятельности играет важную роль в формировании соответствующий условий активизации.`
];

const generateReview = () => {
  return {
    id: nanoid(),
    ratingStars: getRandomDoubleNumber(0, 5),
    descriptions: getRandomArrayItem(DESCRIPTION_ITEMS),
    date: randomDate(new Date(2017, 0, 1), new Date()),
    nameUser: getRandomArrayItem(NAME_USERS),
  };
};

const generateReviews = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateReview);
};

export const reviews = generateReviews(getRandomIntegerNumber(1, 10));
