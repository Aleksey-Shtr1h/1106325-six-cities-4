import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from './place-card.jsx';

import {testProps} from "../../test/offersProps.js";

test(`Should PlaceCard render correctly`, () => {
  const tree = renderer.create(
      <PlaceCard
        offer={testProps.offerProps}
        onTitlePlaceClick={() => {}}
        onArticleMoveMouse={() => {}}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
