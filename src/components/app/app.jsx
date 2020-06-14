import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const titlePlaceClickHandler = () => {};

const App = ({placesCount, placesInfo}) => {
  return (
    <Main
      placesCount = {placesCount}
      placesInfo = {placesInfo}
      onTitlePlaceClickHandler = {titlePlaceClickHandler}
    />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  placesInfo: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isCheckedPremium: PropTypes.bool.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        ratingStars: PropTypes.string.isRequired,
        titleCard: PropTypes.string.isRequired,
        typeCard: PropTypes.string.isRequired,
      }).isRequired
  )
};

export default App;
