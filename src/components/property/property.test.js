import React from "react";
import renderer from "react-test-renderer";
import {Property} from './property.jsx';

import {offerProps} from "../../test/offersProps.js";

test(`Should Property render correctly`, () => {
  const tree = renderer.create(
      <Property
        offer={offerProps}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
