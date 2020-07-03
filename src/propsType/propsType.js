import PropTypes from 'prop-types';

export const propsTypeOffer = {
  id: PropTypes.string.isRequired,
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
};

export const propsTypeReview = {
  id: PropTypes.string.isRequired,
  ratingStars: PropTypes.number.isRequired,
  descriptions: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  nameUser: PropTypes.string.isRequired,
};
