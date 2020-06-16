import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

test(`Should main button be pressed`, () => {
  const handleTitlePlaceClick = jest.fn();

  const main = shallow(
      <Main
        placesCount = {50}
        placesInfo = {
          [
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
          ]
        }
        handleTitlePlaceClick = {handleTitlePlaceClick}
      />
  );

  const titlesClick = main.find(`.place-card__name a`);

  titlesClick.forEach((titleClick) => {
    titleClick.props().onClick();
  });

  expect(handleTitlePlaceClick.mock.calls.length).toBe(titlesClick.length);
});
