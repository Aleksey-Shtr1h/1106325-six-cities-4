import React from 'react';
import renderer from 'react-test-renderer';

import {UserNewReview} from './user-new-review.jsx';

it(`Should App render correctly`, () => {

  const tree = renderer.create(
      <UserNewReview
        rating={1}
        comment={`test`}
        activeForm={false}
        onChangeRaitingPlace={() => {}}
        onChangeCommentPlace={() => {}}
        onSubmitReview={() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
