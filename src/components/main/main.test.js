import React from "react";
import renderer from "react-test-renderer";
import {Main} from './main.jsx';

test(`Should Main render correctly`, () => {
  const tree = renderer
  .create(<Main
    placesCount = {50}
    offers = {
      [
        {
          id: `1`,
          isCheckedPremium: true,
          image: `img/apartment-01.jpg`,
          price: 120,
          ratingStars: `20%`,
          titleCard: `Beautiful &amp; luxurious apartment at great location`,
          typeCard: `Apartment`,
        },

        {
          id: `2`,
          isCheckedPremium: false,
          image: `img/room.jpg`,
          price: 80,
          ratingStars: `80%`,
          titleCard: `Wood and stone place`,
          typeCard: `Private room`,
        },

        {
          id: `3`,
          isCheckedPremium: false,
          image: `img/apartment-02.jpg`,
          price: 132,
          ratingStars: `80%`,
          titleCard: `Canal View Prinsengracht`,
          typeCard: `Apartment`,
        },

        {
          id: `4`,
          isCheckedPremium: true,
          image: `img/apartment-03.jpg`,
          price: 180,
          ratingStars: `80%`,
          titleCard: `Nice, cozy, warm big bed apartment`,
          typeCard: `Apartment`,
        },
      ]
    }
    handleTitlePlaceClick = {() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
