import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from './place-card.jsx';

import {offerProps} from "../../test/offersProps.js";

test(`Should PlaceCard render correctly`, () => {
  const tree = renderer.create(
      <PlaceCard
        offer={offerProps}
        onTitlePlaceClick={() => {}}
        onArticleMoveMouse={() => {}}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});