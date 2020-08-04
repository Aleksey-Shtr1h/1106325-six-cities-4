import React from "react";
import renderer from "react-test-renderer";
import {ReviewsList} from './reviews-list.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {testProps} from '../../test/offersProps.js';

const mockStore = configureStore([]);

test(`Should ReviewsList render correctly`, () => {
  const store = mockStore({

    APP: {
      rating: 1,
      comment: `test`,
    },

  });

  const tree = renderer.create(
      <Provider store={store}>
        <ReviewsList
          reviews={testProps.offerProps.reviews}
          authorizationStatus={`test`}
        />
      </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
