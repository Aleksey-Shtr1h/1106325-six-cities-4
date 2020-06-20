import {nanoid} from "nanoid";

export const offers = [
  {
    id: nanoid(),
    isCheckedPremium: true,
    image: `img/apartment-01.jpg`,
    price: 120,
    ratingStars: `20%`,
    titleCard: `Beautiful &amp; luxurious apartment at great location`,
    typeCard: `Apartment`,
  },

  {
    id: nanoid(),
    isCheckedPremium: false,
    image: `img/room.jpg`,
    price: 80,
    ratingStars: `80%`,
    titleCard: `Wood and stone place`,
    typeCard: `Private room`,
  },

  {
    id: nanoid(),
    isCheckedPremium: false,
    image: `img/apartment-02.jpg`,
    price: 132,
    ratingStars: `80%`,
    titleCard: `Canal View Prinsengracht`,
    typeCard: `Apartment`,
  },

  {
    id: nanoid(),
    isCheckedPremium: true,
    image: `img/apartment-03.jpg`,
    price: 180,
    ratingStars: `80%`,
    titleCard: `Nice, cozy, warm big bed apartment`,
    typeCard: `Apartment`,
  },
];
