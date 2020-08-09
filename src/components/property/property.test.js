import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {Property} from './property.jsx';
import {MapCities} from '../map-cities/map-cities.jsx';

import {history} from '../../history.js';

import {testProps} from "../../test/offersProps.js";

const mockStore = configureStore([]);

it(`Should Property render correctly`, () => {
  MapCities.prototype.componentDidMount = jest.fn();

  const store = mockStore({
    DATA: {
      offersActive: testProps.offersProps,
    },

    APP: {
      offerId: 1,
      rating: 1,
      comment: `test`,
      activeForm: false,
    },

    USER: {
      authorizationStatus: `test`,
    }

  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <Property
            offer={testProps.offerProps}
            reviews={testProps.offerProps.reviews}
            offers={testProps.offersProps}
            onTitlePlaceClick={() => {}}
            cityCoordinates={[1, 2]}
            authorizationStatus={`test`}
          />
        </Provider>
      </Router>,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();
  expect(tree).toMatchSnapshot();
});
