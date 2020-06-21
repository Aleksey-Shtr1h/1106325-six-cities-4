import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

test(`Should main button be pressed`, () => {
  const onTitlePlaceClick = jest.fn();

  const main = shallow(
      <Main
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
        onTitlePlaceClick={onTitlePlaceClick}
      />
  );

  const titlesClick = main.find(`.place-card__name a`);

  titlesClick.forEach((titleClick) => {
    titleClick.props().onClick();
  });

  expect(onTitlePlaceClick.mock.calls.length).toBe(titlesClick.length);
});
