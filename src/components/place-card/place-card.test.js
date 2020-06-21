import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from './place-card.jsx';

test(`Should PlaceCard render correctly`, () => {
  const tree = renderer.create(
      <PlaceCard
        offer={
          {
            id: `1`,
            isCheckedPremium: true,
            images: [
              `img/room.jpg`,
              `img/apartment-02.jpg`,
              `img/apartment-03.jpg`,
            ],
            price: 120,
            ratingStars: 2.5,
            titleCard: `Beautiful &amp; luxurious apartment at great location`,
            typeCard: `Apartment`,
          }
        }
        onTitlePlaceClick={() => {}}
        onArticleMoveMouse={() => {}}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
