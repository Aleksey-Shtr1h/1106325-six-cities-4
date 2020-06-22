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
        onTitlePlaceClick={onTitlePlaceClick}
      />
  );

  const titlesClick = main.find(`.place-card__name a`);

  titlesClick.forEach((titleClick) => {
    titleClick.props().onClick();
  });

  expect(onTitlePlaceClick.mock.calls.length).toBe(titlesClick.length);
});
