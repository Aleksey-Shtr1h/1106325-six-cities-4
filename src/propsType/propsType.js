import PropTypes from 'prop-types';

export const propsTypeReview = {
  id: PropTypes.number.isRequired,
  ratingStars: PropTypes.number.isRequired,
  descriptions: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    pro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export const propsTypeOffer = {
  id: PropTypes.number.isRequired,
  isCheckedPremium: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  price: PropTypes.number.isRequired,
  ratingStars: PropTypes.number.isRequired,
  titleCard: PropTypes.string.isRequired,
  typeCard: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  numberBadrooms: PropTypes.number.isRequired,
  numberGuests: PropTypes.number.isRequired,
  householdItems: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  infoUser: PropTypes.shape({
    avatarUser: PropTypes.string.isRequired,
    nameUser: PropTypes.string.isRequired,
    markSuper: PropTypes.bool.isRequired,
  }),
  coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(propsTypeReview).isRequired
  ),
};

export const propsTypeCityOffers = {
  cityName: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape(propsTypeOffer).isRequired
  ),
  placesCount: PropTypes.number.isRequired,
  cityCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export const propsTypeNearbyOffers = {
  cityName: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.string.isRequired,
  ]),
  offers: PropTypes.arrayOf(
      PropTypes.shape(propsTypeOffer).isRequired
  ),
  placesCount: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.number.isRequired,
  ]),
  cityCoordinates: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  ]),
};

export const hostData = {
  id: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.number.isRequired,
  ]),
  email: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.string.isRequired,
  ]),
  name: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.string.isRequired,
  ]),
  [`avatar_url`]: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.string.isRequired,
  ]),
  [`is_pro`]: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.bool.isRequired,
  ]),
};


export const propsTypeAll = {
  onMenuCityClick: PropTypes.func.isRequired,
  onTitlePlaceClick: PropTypes.func.isRequired,
  nameCities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  placesCount: PropTypes.number.isRequired,
  cityName: PropTypes.string.isRequired,
  reviews: propsTypeOffer.reviews,
  review: PropTypes.shape(propsTypeReview).isRequired,
  func: PropTypes.func.isRequired,
  string: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  userAuthData: PropTypes.shape(hostData).isRequired,
  bool: PropTypes.bool.isRequired,

  nearbyOffers: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.shape(propsTypeNearbyOffers).isRequired,
  ]),

  citiesAll: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.arrayOf(
        PropTypes.shape(
            propsTypeCityOffers)
        .isRequired
    ).isRequired,
  ]),

  cityOffersAndNull: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.shape(propsTypeCityOffers).isRequired,
  ]),

  cityOffersAndUndefined: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.shape(propsTypeCityOffers).isRequired,
  ]),

  placeOffer: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.shape(propsTypeOffer).isRequired,
  ]),

  cityActive: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.string.isRequired,
  ]),

  offers: PropTypes.arrayOf(
      PropTypes.shape(propsTypeOffer).isRequired
  ),

  offer: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.shape(propsTypeOffer).isRequired,
  ]),


  cityCoordinates: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  ]),

  stringAndNull: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.string.isRequired,
  ]),

  stringAndUndefined: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.string.isRequired,
  ]),

  numberAndNull: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.number.isRequired,
  ]),

  numberAndNullAndString: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),

  funcAndUndefined: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.func.isRequired,
  ]),

  stringAndNumber: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),

  boolAndUndefined: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.oneOf([undefined]).isRequired,
  ]),

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  favoritePlacesAndNull: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),

};
