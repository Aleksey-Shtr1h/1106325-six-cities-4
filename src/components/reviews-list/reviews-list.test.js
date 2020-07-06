import React from "react";
import renderer from "react-test-renderer";
import {ReviewsList} from './reviews-list.jsx';

import {testProps} from '../../test/offersProps.js';

test(`Should ReviewsList render correctly`, () => {
  const tree = renderer.create(
      <ReviewsList
        reviews={testProps.offerProps.reviews}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
