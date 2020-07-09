import React from "react";
import renderer from "react-test-renderer";
import {PlacesList} from './places-list.jsx';

import {testProps} from "../../test/offersProps.js";

test(`Should PlacesList render correctly`, () => {
  const tree = renderer.create(
      <PlacesList
        offers={testProps.offersProps}
        offersActive={testProps.offersProps}
        onTitlePlaceClick = {() => {}}
        onCardPlaceHoverMove = {() => {}}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
