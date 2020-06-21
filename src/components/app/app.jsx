import React from "react";
import PropTypes from "prop-types";
import {Main} from "../main/main.jsx";

export const App = ({placesCount, offers}) => {
  return (
    <Main
      placesCount={placesCount}
      offers={offers}
      onTitlePlaceClick={() => {}}
    />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        isCheckedPremium: PropTypes.bool.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        ratingStars: PropTypes.string.isRequired,
        titleCard: PropTypes.string.isRequired,
        typeCard: PropTypes.string.isRequired,
      }).isRequired
  )
};
