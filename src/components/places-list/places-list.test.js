import React from "react";
import renderer from "react-test-renderer";
import {PlacesList} from './places-list.jsx';

import {offersProps} from "../../test/offersProps.js";

test(`Should PlacesList render correctly`, () => {
  const tree = renderer.create(
      <PlacesList
        placesCount={50}
        offers={offersProps}
        onTitlePlaceClick = {() => {}}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
