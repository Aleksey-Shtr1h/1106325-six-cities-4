import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {MainOffersAvailable} from './main-offers-available.jsx';
import {MapCities} from '../map-cities/map-cities.jsx';

import {history} from '../../history.js';

import {testProps} from "../../test/offersProps.js";

const mockStore = configureStore([]);

test(`Should MainOffersAvailable render correctly`, () => {
  MapCities.prototype.componentDidMount = jest.fn();

  const store = mockStore({
    DATA: {
      offersActive: testProps.offersProps,
      activeSort: `popular`,
    },

    APP: {
      offerId: 1,
    }

  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <MainOffersAvailable
            placesCount={50}
            cityActive={`test`}
            offers={testProps.offersProps}
            cityCoordinates={[1, 2]}
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
