import React from "react";
import renderer from "react-test-renderer";
import {ReviewsItem} from './reviews-item.jsx';

import {testProps} from '../../test/offersProps.js';

it(`Should ReviewsItem render correctly`, () => {
  const tree = renderer.create(
      <ReviewsItem
        review={testProps.offerProps.reviews[0]}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
