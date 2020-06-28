import React from "react";
import renderer from "react-test-renderer";
import {ReviewsList} from './reviews-list.jsx';

import {reviewsProps} from '../../test/reviewsProps.js';

test(`Should ReviewsList render correctly`, () => {
  const tree = renderer.create(
      <ReviewsList
        reviews={reviewsProps}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
