import React from "react";
import renderer from "react-test-renderer";
import {Main} from './main.jsx';

import {offersProps} from "../../test/offersProps.js";

test(`Should Main render correctly`, () => {
  const tree = renderer.create(
      <Main
        placesCount={50}
        offers={offersProps}
        onTitlePlaceClick={() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
