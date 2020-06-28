import React from "react";
import renderer from "react-test-renderer";
import {ReviewsItem} from './reviews-item.jsx';

import {reviewProps} from '../../test/reviewsProps.js';

it(`Should ReviewsItem render correctly`, () => {
  const tree = renderer.create(
      <ReviewsItem
        review={reviewProps}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
