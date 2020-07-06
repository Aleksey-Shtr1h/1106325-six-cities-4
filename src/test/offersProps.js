export const offersProps = [
  {
    id: `1`,
    isCheckedPremium: true,
    images: [`test`],
    price: 120,
    ratingStars: 0.5,
    titleCard: `test`,
    typeCard: `test`,
    descriptions: [`test`],
    numberBadrooms: 1,
    numberGuests: 1,
    householdItems: [`test`],
    infoUser: {
      avatarUser: `test`,
      nameUser: `test`,
      markSuper: true,
    },
    coordinates: [52.3909553943508, 4.85309666406198],
    reviews: [{
      id: `1`,
      ratingStars: 0.5,
      descriptions: `test`,
      date: new Date(),
      nameUser: `test`,
    }],
  },

  {
    id: `2`,
    isCheckedPremium: false,
    images: [`test`],
    price: 80,
    ratingStars: 1.6,
    titleCard: `test`,
    typeCard: `test`,
    descriptions: [`test`],
    numberBadrooms: 1,
    numberGuests: 1,
    householdItems: [`test`],
    infoUser: {
      avatarUser: `test`,
      nameUser: `test`,
      markSuper: true,
    },
    coordinates: [52.369553943508, 4.85309666406198],
    reviews: [{
      id: `2`,
      ratingStars: 0.6,
      descriptions: `test`,
      date: new Date(),
      nameUser: `test`,
    }],
  },

  {
    id: `3`,
    isCheckedPremium: false,
    images: [`test`],
    price: 132,
    ratingStars: 2.5,
    titleCard: `test`,
    typeCard: `test`,
    descriptions: [`test`],
    numberBadrooms: 1,
    numberGuests: 1,
    householdItems: [`test`],
    infoUser: {
      avatarUser: `test`,
      nameUser: `test`,
      markSuper: true,
    },
    coordinates: [52.3909553943508, 4.929309666406198],
    reviews: [{
      id: `3`,
      ratingStars: 0.7,
      descriptions: `test`,
      date: new Date(),
      nameUser: `test`,
    }],
  },

  {
    id: `4`,
    isCheckedPremium: true,
    images: [`test`],
    price: 180,
    ratingStars: 4.5,
    titleCard: `test`,
    typeCard: `Apartment`,
    descriptions: [`test`],
    numberBadrooms: 1,
    numberGuests: 1,
    householdItems: [`test`],
    infoUser: {
      avatarUser: `test`,
      nameUser: `test`,
      markSuper: true,
    },
    coordinates: [52.3809553943508, 4.939309666406198],
    reviews: [{
      id: `4`,
      ratingStars: 0.8,
      descriptions: `test`,
      date: new Date(),
      nameUser: `test`,
    }],
  },
];

export const offerProps = {
  id: `1`,
  isCheckedPremium: true,
  images: [`test`],
  price: 120,
  ratingStars: 2.5,
  titleCard: `test`,
  typeCard: `test`,
  descriptions: [`test`],
  numberBadrooms: 1,
  numberGuests: 1,
  householdItems: [`test`],
  infoUser: {
    avatarUser: `test`,
    nameUser: `test`,
    markSuper: true,
  },
  coordinates: [52.3909553943508, 4.85309666406198],
  reviews: [
    {
      id: `1`,
      ratingStars: 0.5,
      descriptions: `test`,
      date: new Date(),
      nameUser: `test`,
    },

    {
      id: `2`,
      ratingStars: 0.6,
      descriptions: `test`,
      date: new Date(Date.now()),
      nameUser: `test`,
    },

    {
      id: `3`,
      ratingStars: 0.7,
      descriptions: `test`,
      date: new Date(),
      nameUser: `test`,
    },

    {
      id: `4`,
      ratingStars: 0.8,
      descriptions: `test`,
      date: new Date(),
      nameUser: `test`,
    },
  ],
};

export const cityOffersProps = {
  cityName: `test`,
  offers: offersProps,
  placesCount: 1,
  cityCoordinates: [1, 2],
};

export const cityOffersArrayProps = [{
  cityName: `test`,
  offers: offersProps,
  placesCount: 1,
  cityCoordinates: [1, 2],
}];

export const testProps = {
  cityOffersProps,
  cityOffersArrayProps,
  offersProps,
  offerProps,
};
