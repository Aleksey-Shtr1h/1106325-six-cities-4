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
            images: [`test`],
            price: 120,
            ratingStars: 2.5,
            titleCard: `test`,
            typeCard: `test`,
            descriptions: [`test`],
          }
        }
        onTitlePlaceClick={() => {}}
        onArticleMoveMouse={() => {}}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
