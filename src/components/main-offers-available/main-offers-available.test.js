import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {MainOffersAvailable} from './main-offers-available.jsx';
import {MapCities} from '../map-cities/map-cities.jsx';

import {testProps} from "../../test/offersProps.js";

const mockStore = configureStore([]);

test(`Should MainOffersAvailable render correctly`, () => {
  MapCities.prototype.componentDidMount = jest.fn();

  const store = mockStore({
    offerId: null,
    offersActive: testProps.offersProps,
    activeSort: `popular`,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MainOffersAvailable
          placesCount={50}
          cityActive={`test`}
          offers={testProps.offersProps}
          onTitlePlaceClick={() => {}}
          cityCoordinates={[1, 2]}
          onCardPlaceHoverMove={() => {}}
        />
      </Provider>,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
