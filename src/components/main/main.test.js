import React from "react";
import renderer from "react-test-renderer";
import {Main} from './main.jsx';

test(`Should Main render correctly`, () => {
  const tree = renderer.create(
      <Main
        placesCount={50}
        offers={
          [
            {
              id: `1`,
              isCheckedPremium: true,
              images: [`test`],
              price: 120,
              ratingStars: 0.5,
              titleCard: `test`,
              typeCard: `test`,
              descriptions: [`test`],
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
            },
          ]
        }
        onTitlePlaceClick={() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
