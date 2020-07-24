import PropTypes from 'prop-types';

export const propsTypeReview = {
  id: PropTypes.number.isRequired,
  ratingStars: PropTypes.number.isRequired,
  descriptions: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  nameUser: PropTypes.string.isRequired,
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


export const propsTypeAll = {
  citiesAll: PropTypes.arrayOf(
      PropTypes.shape(
          propsTypeCityOffers)
      .isRequired
  ).isRequired,
  cityOffers: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.shape(propsTypeCityOffers).isRequired,
  ]),
  onMenuCityClick: PropTypes.func.isRequired,
  onTitlePlaceClick: PropTypes.func.isRequired,
  nameCities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,

  placeOffer: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.shape(propsTypeOffer).isRequired,
  ]),

  cityActive: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.string.isRequired,
  ]),
  placesCount: PropTypes.number.isRequired,

  offers: PropTypes.arrayOf(
      PropTypes.shape(propsTypeOffer).isRequired
  ),

  offer: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.shape(propsTypeOffer).isRequired,
  ]),

  cityName: PropTypes.string.isRequired,
  reviews: propsTypeOffer.reviews,
  review: PropTypes.shape(propsTypeReview).isRequired,
  cityCoordinates: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  ]),

  func: PropTypes.func.isRequired,
  string: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  stringAndNull: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.string.isRequired,
  ]),
  numberAndNull: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.number.isRequired,
  ]),
  funcAndUndefined: PropTypes.oneOfType([
    PropTypes.oneOf([undefined]).isRequired,
    PropTypes.func.isRequired,
  ]),
  stringAndNumber: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
