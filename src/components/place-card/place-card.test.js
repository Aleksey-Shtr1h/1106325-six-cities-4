import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from './place-card.jsx';

test(`Should PlaceCard render correctly`, () => {
  const tree = renderer
  .create(<PlaceCard
    offer = {
      {
        id: `1`,
        isCheckedPremium: true,
        image: `img/apartment-01.jpg`,
        price: 120,
        ratingStars: `20%`,
        titleCard: `Beautiful &amp; luxurious apartment at great location`,
        typeCard: `Apartment`,
      }
    }
    handleTitlePlaceClick = {() => {}}
    hadleArticleMoveMouse = {() => {}}
  />).toJSON();
  // eslint-disable-next-line no-console
  // console.log(tree);
  expect(tree).toMatchSnapshot();
});
