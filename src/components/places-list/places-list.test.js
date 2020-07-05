import React from "react";
import renderer from "react-test-renderer";
import {PlacesList} from './places-list.jsx';

import {testProps} from "../../test/offersProps.js";

test(`Should PlacesList render correctly`, () => {
  const tree = renderer.create(
      <PlacesList
        placesCount={50}
        offers={testProps.offersProps}
        onTitlePlaceClick = {() => {}}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
