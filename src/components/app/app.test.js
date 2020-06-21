import React from "react";
import renderer from "react-test-renderer";
import {App} from './app.jsx';

test(`Render App`, () => {
  const tree = renderer.create(
      <App
        placesCount={50}
        offers={
          [
            {
              id: `1`,
              isCheckedPremium: true,
              images: [
                `img/room.jpg`,
                `img/apartment-02.jpg`,
                `img/apartment-03.jpg`,
              ],
              price: 120,
              ratingStars: 0.5,
              titleCard: `Beautiful &amp; luxurious apartment at great location`,
              typeCard: `Apartment`,
            },

            {
              id: `2`,
              isCheckedPremium: false,
              images: [
                `img/room.jpg`,
                `img/apartment-02.jpg`,
                `img/apartment-03.jpg`,
                `img/room.jpg`,
              ],
              price: 80,
              ratingStars: 1.6,
              titleCard: `Wood and stone place`,
              typeCard: `Private room`,
            },

            {
              id: `3`,
              isCheckedPremium: false,
              images: [
                `img/room.jpg`,
                `img/apartment-02.jpg`,
                `img/apartment-03.jpg`,
                `img/room.jpg`,
                `img/studio-01.jpg`,
              ],
              price: 132,
              ratingStars: 2.5,
              titleCard: `Canal View Prinsengracht`,
              typeCard: `Apartment`,
            },

            {
              id: `4`,
              isCheckedPremium: true,
              images: [
                `img/room.jpg`,
                `img/apartment-02.jpg`,
                `img/apartment-03.jpg`,
                `img/room.jpg`,
                `img/studio-01.jpg`,
                `img/apartment-01.jpg`
              ],
              price: 180,
              ratingStars: 4.5,
              titleCard: `Nice, cozy, warm big bed apartment`,
              typeCard: `Apartment`,
            },
          ]
        }
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
