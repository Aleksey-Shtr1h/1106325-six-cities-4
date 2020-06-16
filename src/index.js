import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const SettingsPlace = {
  PLACES_COUNT: 50,
  PLACES_INFO: [
    {
      id: 1,
      isCheckedPremium: true,
      image: `img/apartment-01.jpg`,
      price: 120,
      ratingStars: `20%`,
      titleCard: `Beautiful &amp; luxurious apartment at great location`,
      typeCard: `Apartment`,
    },

    {
      id: 2,
      isCheckedPremium: false,
      image: `img/room.jpg`,
      price: 80,
      ratingStars: `80%`,
      titleCard: `Wood and stone place`,
      typeCard: `Private room`,
    },

    {
      id: 3,
      isCheckedPremium: false,
      image: `img/apartment-02.jpg`,
      price: 132,
      ratingStars: `80%`,
      titleCard: `Canal View Prinsengracht`,
      typeCard: `Apartment`,
    },

    {
      id: 4,
      isCheckedPremium: true,
      image: `img/apartment-03.jpg`,
      price: 180,
      ratingStars: `80%`,
      titleCard: `Nice, cozy, warm big bed apartment`,
      typeCard: `Apartment`,
    },

    {
      id: 5,
      isCheckedPremium: false,
      image: `img/room.jpg`,
      price: 80,
      ratingStars: `80%`,
      titleCard: `Wood and stone place`,
      typeCard: `Private room`,
    },
  ],
};

ReactDOM.render(
    <App
      placesCount = {SettingsPlace.PLACES_COUNT}
      placesInfo = {SettingsPlace.PLACES_INFO}
    />,
    document.querySelector(`#root`)
);
